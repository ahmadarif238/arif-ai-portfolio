import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { applyStudioEnvironment, createParticles, createRibbons, createShield, makeGlowTexture, PALETTE } from './scenes';
import { stageBus, StageMode } from './stageBus';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * One fixed, full-viewport WebGL canvas that sits behind the whole page.
 *
 * Dark sections are transparent and let it show through; light "sheets" slide
 * over it. It crossfades between the ribbon set and the shield set depending on
 * which dark section owns the middle of the viewport, and stops rendering while
 * nothing dark is on screen.
 */
export function BackgroundStage() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current!;
    const small = window.matchMedia('(max-width: 999px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !small, powerPreference: 'high-performance' });
    } catch {
      return; // No WebGL: the CSS gradient underneath still carries the look.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.25 : 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(PALETTE.clear, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = makeGlowTexture();
    applyStudioEnvironment(renderer, scene);
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
    const basePos = new THREE.Vector3(0, 0, 14);
    camera.position.copy(basePos);

    const ribbons = createRibbons({ steps: small ? 120 : 220 });
    const shield = createShield({ segments: small ? 64 : 96 });
    const particles = createParticles(small ? 450 : 1000);
    scene.add(ribbons.group, shield.group, particles.points);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.22, 0.4, 0.18);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    // --- which set is wanted -------------------------------------------------
    let mode: StageMode = 'ribbons';
    let active = true;
    let mix = 0; // 0 = ribbons, 1 = shield
    const probe = () => {
      const mid = window.innerHeight * 0.5;
      let found: StageMode | null = null;
      let anyDark = false;
      document.querySelectorAll<HTMLElement>('[data-stage]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) anyDark = true;
        if (r.top <= mid && r.bottom >= mid) found = el.dataset.stage as StageMode;
      });
      if (found) mode = found;
      active = anyDark;
    };
    probe();

    // --- pointer ---------------------------------------------------------------
    const mouseTg = new THREE.Vector2();
    const mouse = new THREE.Vector2();
    const ndc = new THREE.Vector2(-10, -10);
    const onMove = (e: PointerEvent) => {
      mouseTg.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
      ndc.copy(mouseTg);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    const raycaster = new THREE.Raycaster();
    let mouseStrength = 0;

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const s = w < 700 ? 0.55 : w < 1000 ? 0.75 : 1;
      shield.group.scale.setScalar(s);
      ribbons.group.scale.setScalar(w < 700 ? 0.8 : 1);
    };
    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', probe, { passive: true });

    // --- loop ------------------------------------------------------------------
    const clock = new THREE.Clock();
    let t = 0;
    let hold = 0;
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const raw = Math.min(clock.getDelta(), 0.25);
      const dt = Math.min(raw, 0.05);
      if (!active || document.hidden) return;

      hold = lerp(hold, stageBus.hold ? 1 : 0, 1 - Math.exp(-raw * 3.5));
      const speed = (reduced ? 0.3 : 1) * (1 + hold * 5);
      t += dt * speed;
      mix = lerp(mix, mode === 'shield' ? 1 : 0, 1 - Math.exp(-raw * 2.2));

      // Crossfade: the outgoing set drifts and fades while the other arrives.
      ribbons.group.visible = mix < 0.99;
      shield.group.visible = mix > 0.01;
      ribbons.materials.forEach((m) => (m.opacity = 1 - mix));
      shield.materials.forEach((m) => (m.opacity = mix * (m.userData.maxOpacity ?? 1)));
      shield.shieldMaterial.uniforms.uOpacity.value = 0.4 * mix;
      ribbons.group.position.y = -0.8 - mix * 4;
      shield.group.position.y = (1 - mix) * -3;

      ribbons.update(t);
      shield.update(t, dt * speed);
      particles.update(dt, speed);

      // Camera: slow eased parallax, pushed in while the hero is held.
      const ease = 1 - Math.exp(-raw * 1.2);
      mouse.x = lerp(mouse.x, mouseTg.x * 1.2, ease);
      mouse.y = lerp(mouse.y, mouseTg.y * 0.8, ease);
      camera.position.set(basePos.x + mouse.x, basePos.y + mouse.y, basePos.z - hold * 3.5);
      camera.lookAt(0, 0, 0);

      // Hex cells brighten where the pointer rests on the shield.
      if (mix > 0.5) {
        raycaster.setFromCamera(ndc, camera);
        const hit = raycaster.intersectObject(shield.shield)[0];
        if (hit) shield.shieldMaterial.uniforms.uMouse.value.copy(shield.shield.worldToLocal(hit.point.clone()));
        mouseStrength = lerp(mouseStrength, hit ? 1 : 0, 1 - Math.exp(-raw * 6));
        shield.shieldMaterial.uniforms.uMouseStrength.value = mouseStrength;
      }

      bloom.strength = 0.22 + hold * 0.3;
      composer.render();
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', probe);
      composer.dispose();
      renderer.dispose();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose();
      });
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div aria-hidden="true" className="stage">
      <div ref={hostRef} className="stage-canvas" />
      <div className="stage-grain" />
    </div>
  );
}

export default BackgroundStage;
