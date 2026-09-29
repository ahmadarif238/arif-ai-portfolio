import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import * as Icons from 'lucide-react';
import { createParticles, createRibbons, makeGlowTexture, PALETTE } from '../three/scenes';
import { COVERS } from '../data/covers';

/**
 * Dev-only page that renders one cover (?id=...) at 1200x750 and flags
 * `window.__coverReady` so scripts/render-covers.cjs can screenshot it.
 */
const W = 1200;
const H = 750;

function Cover() {
  const id = new URLSearchParams(location.search).get('id') ?? COVERS[0].id;
  const spec = COVERS.find((c) => c.id === id) ?? COVERS[0];
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(1);
    renderer.setSize(W, H);
    renderer.setClearColor(PALETTE.clear, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    host.current!.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = makeGlowTexture(0.25, 0.3, W, H);
    const ribbons = createRibbons({ seed: spec.seed, count: 4 });
    ribbons.update(spec.seed * 0.37);
    const particles = createParticles(120, new THREE.Vector3(14, 9, 6));
    particles.update(spec.seed);
    scene.add(ribbons.group, particles.points);

    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(spec.cam[0] * 0.35 + 0.5, spec.cam[1] * 0.3, 13 + spec.cam[2] * 0.15);
    camera.lookAt(new THREE.Vector3(spec.look[0] * 0.3 + 1.8, spec.look[1] * 0.3 + 0.2, -1));
    camera.rotation.z += spec.roll ?? 0;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(W, H), 0.2, 0.35, 0.7));
    composer.addPass(new OutputPass());
    composer.render();
    requestAnimationFrame(() => {
      composer.render();
      (window as unknown as { __coverReady: boolean }).__coverReady = true;
    });
  }, [spec]);

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[spec.icon];
  return (
    <div id="cover" style={{ position: 'relative', width: W, height: H, overflow: 'hidden' }}>
      <div ref={host} style={{ position: 'absolute', inset: 0 }} />
      {Icon && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
          <Icon
            size={190}
            strokeWidth={1.1}
            color="#ffffff"
            style={{ filter: 'drop-shadow(0 0 18px rgba(255,92,187,.85)) drop-shadow(0 0 2px #fff)' }}
          />
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Cover />);
