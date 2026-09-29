import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { createParticles, createRibbons, createShield, GrainShader, makeGlowTexture, PALETTE, ShieldSet } from './scenes';
import { stageBus, StageMode } from './stageBus';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * One fixed, full-viewport WebGL canvas behind the whole page.
 *
 * Dark sections are transparent and let it show through; light "sheets" slide
 * over it. It crossfades between the ribbon set and the shield set depending on
 * which dark section owns the middle of the viewport.
 *
 * Kept cheap on purpose: it renders below native resolution, sleeps whenever
 * no dark section is on screen or the tab is hidden, builds the shield only the
 * first time it is needed, and steps its own quality down on slow devices.
 */
export function BackgroundStage() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current!;
    const small = window.matchMedia('(max-width: 999px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
    } catch {
      return; // No WebGL: the CSS gradient underneath still carries the look.
    }

    // Quality ladder: [pixel ratio, bloom on]. Starts high and steps down if frames run long.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ladder: [number, boolean][] = small
      ? [[Math.min(dpr, 1), false], [0.75, false], [0.6, false]]
      : [[Math.min(dpr, 1.25), true], [1, true], [0.8, false], [0.65, false]];
    let level = 0;

    renderer.setPixelRatio(ladder[0][0]);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(PALETTE.clear, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = makeGlowTexture(0.2, 0.23, 512, 512);
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
    const basePos = new THREE.Vector3(0, 0, 14);
    camera.position.copy(basePos);

    const ribbons = createRibbons({ steps: small ? 90 : 150 });
    const particles = createParticles(small ? 140 : 260);
    particles.material.uniforms.uScale.value = ladder[0][0];
    scene.add(ribbons.group, particles.points);

    // The shield is only built the first time a shield section comes into view.
    let shield: ShieldSet | null = null;
    function sizeShield() {
      if (!shield) return;
      const w = window.innerWidth;
      shield.group.scale.setScalar(w < 700 ? 0.55 : w < 1000 ? 0.75 : 1);
    }
    const ensureShield = () => {
      if (shield) return;
      shield = createShield({ segments: small ? 48 : 72 });
      shield.group.visible = false;
      scene.add(shield.group);
      sizeShield();
    };

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2), 0.18, 0.35, 0.72);
    bloom.enabled = ladder[0][1];
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
    const grain = new ShaderPass(GrainShader);
    composer.addPass(grain);

    // --- which set is wanted (checked a few times a second, not per scroll event)
    let mode: StageMode = 'ribbons';
    let active = true;
    const probe = () => {
      const h = window.innerHeight;
      const mid = h * 0.5;
      let found: StageMode | null = null;
      let anyDark = false;
      document.querySelectorAll<HTMLElement>('[data-stage]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < h) anyDark = true;
        if (r.top <= mid && r.bottom >= mid) found = el.dataset.stage as StageMode;
      });
      if (found) mode = found;
      if (mode === 'shield') ensureShield();
      active = anyDark;
    };
    probe();

    // --- pointer --------------------------------------------------------------
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
      ribbons.group.scale.setScalar(w < 700 ? 0.8 : 1);
      sizeShield();
    };
    onResize();
    window.addEventListener('resize', onResize);

    const applyLevel = () => {
      const [ratio, useBloom] = ladder[level];
      renderer.setPixelRatio(ratio);
      composer.setPixelRatio(ratio);
      bloom.enabled = useBloom;
      particles.material.uniforms.uScale.value = ratio;
      onResize();
    };

    // --- loop -----------------------------------------------------------------
    const clock = new THREE.Clock();
    let t = 0;
    let hold = 0;
    let mix = 0; // 0 = ribbons, 1 = shield
    let raf = 0;
    let frame = 0;
    let slowFrames = 0;
    let sampled = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const raw = Math.min(clock.getDelta(), 0.25);
      if (frame++ % 6 === 0) probe();
      if (!active || document.hidden) return;
      const dt = Math.min(raw, 0.05);

      // Adaptive quality: after warm-up, if most frames take > 24ms, step down.
      if (frame > 90 && level < ladder.length - 1) {
        sampled++;
        if (raw > 0.024) slowFrames++;
        if (sampled >= 90) {
          if (slowFrames > 55) {
            level++;
            applyLevel();
          }
          sampled = slowFrames = 0;
        }
      }

      hold = lerp(hold, stageBus.hold ? 1 : 0, 1 - Math.exp(-raw * 3.5));
      const speed = (reduced ? 0.3 : 1) * (1 + hold * 5);
      t += dt * speed;
      mix = lerp(mix, mode === 'shield' ? 1 : 0, 1 - Math.exp(-raw * 2.2));

      ribbons.group.visible = mix < 0.99;
      ribbons.materials.forEach((m) => (m.opacity = 1 - mix));
      ribbons.group.position.y = -2.1 - mix * 4;
      ribbons.update(t);

      const sh = shield as ShieldSet | null;
      if (sh) {
        sh.group.visible = mix > 0.01;
        sh.materials.forEach((m) => (m.opacity = mix * (m.userData.maxOpacity ?? 1)));
        sh.shieldMaterial.uniforms.uOpacity.value = 0.4 * mix;
        sh.group.position.y = (1 - mix) * -3;
        if (sh.group.visible) sh.update(t, dt * speed);

        // Hex cells brighten where the pointer rests on the shield.
        if (mix > 0.5 && frame % 2 === 0) {
          raycaster.setFromCamera(ndc, camera);
          const hit = raycaster.intersectObject(sh.shield)[0];
          if (hit) sh.shieldMaterial.uniforms.uMouse.value.copy(sh.shield.worldToLocal(hit.point.clone()));
          mouseStrength = lerp(mouseStrength, hit ? 1 : 0, 1 - Math.exp(-raw * 6));
          sh.shieldMaterial.uniforms.uMouseStrength.value = mouseStrength;
        }
      }
      particles.update(t);

      const ease = 1 - Math.exp(-raw * 1.2);
      mouse.x = lerp(mouse.x, mouseTg.x * 1.2, ease);
      mouse.y = lerp(mouse.y, mouseTg.y * 0.8, ease);
      camera.position.set(basePos.x + mouse.x, basePos.y + mouse.y, basePos.z - hold * 3.5);
      camera.lookAt(0, 0, 0);

      bloom.strength = 0.18 + hold * 0.3;
      grain.uniforms.uTime.value = (frame % 97) * 0.13;
      composer.render();
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      composer.dispose();
      renderer.dispose();
      scene.traverse((o: THREE.Object3D) => {
        (o as THREE.Mesh).geometry?.dispose();
      });
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div aria-hidden="true" className="stage">
      <div ref={hostRef} className="stage-canvas" />
    </div>
  );
}

export default BackgroundStage;
