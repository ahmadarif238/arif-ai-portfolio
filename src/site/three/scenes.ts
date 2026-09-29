import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * The two 3D "sets" the fixed stage cycles between, plus the pieces they share.
 *
 * Kept free of React and of the DOM so the same builders drive both the live
 * background and the offline cover renderer (cover-lab.html) that bakes the
 * project, case-study and blog images.
 */

export const PALETTE = {
  clear: 0x050003,
  glow: '#2D0B23',
  ribbon: '#841862',
  ribbonEdge: '#ff5cbb',
  shield: '#d676bc',
  shieldHover: '#d68ac0',
  core: '#ff5cbb',
  particle: 0xff9ee5,
  lightWarm: '#fff5fb',
  lightPink: '#f8b8e8'
};

/** Radial "#000 → #2D0B23" wash used as the scene background, with dither. */
export function makeGlowTexture(cx = 0.2, cy = 0.23, w = 1024, h = 1024) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d')!;
  g.fillStyle = '#050003';
  g.fillRect(0, 0, w, h);
  const grad = g.createRadialGradient(cx * w, cy * h, 0, cx * w, cy * h, Math.max(w, h) * 0.95);
  grad.addColorStop(0, PALETTE.glow);
  grad.addColorStop(0.55, '#12040f');
  grad.addColorStop(1, '#000000');
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
  // Dither so the gradient never bands on 8-bit displays.
  const img = g.getImageData(0, 0, w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 4;
    img.data[i] += n;
    img.data[i + 1] += n;
    img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Deterministic PRNG so a cover seed always bakes the same image. */
export function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

/* ------------------------------------------------------------------------ */
/* Ribbons                                                                   */
/* ------------------------------------------------------------------------ */

/**
 * Sweeps a flat, thick band along a curve with a *fixed* width axis. Extrude's
 * Frenet frames flip at the top of an arch; pinning the axis keeps the band
 * perfectly flat, and each side gets its own vertices so edges stay crisp.
 */
function ribbonGeometry(curve: THREE.Curve<THREE.Vector3>, width: number, thickness: number, steps: number) {
  const W = new THREE.Vector3(0, 0, 1);
  const pos: number[] = [];
  const idx: number[] = [];
  const corners = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ];
  // side k spans corner k -> k+1
  for (let k = 0; k < 4; k++) {
    const base = pos.length / 3;
    const a = corners[k];
    const b = corners[(k + 1) % 4];
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      const c = curve.getPointAt(u);
      const T = curve.getTangentAt(u);
      const N = new THREE.Vector3().crossVectors(W, T).normalize();
      for (const q of [a, b]) {
        const v = c.clone().addScaledVector(W, (q[0] * width) / 2).addScaledVector(N, (q[1] * thickness) / 2);
        pos.push(v.x, v.y, v.z);
      }
    }
    for (let i = 0; i < steps; i++) {
      const r = base + i * 2;
      idx.push(r, r + 2, r + 1, r + 1, r + 2, r + 3);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

export interface RibbonSet {
  group: THREE.Group;
  materials: THREE.Material[];
  update: (t: number) => void;
}

/**
 * Wide lacquered bands that rise from the lower left and arc away to the right,
 * the same silhouette as the reference hero. Faces sit in shadow while the
 * grazing key light catches the edges, which is what gives them their glow.
 */
export function createRibbons(opts: { seed?: number; count?: number; steps?: number } = {}): RibbonSet {
  const rand = rng(opts.seed ?? 7);
  const count = opts.count ?? 6;
  const steps = opts.steps ?? 220;
  const group = new THREE.Group();

  const faceMat = new THREE.MeshPhysicalMaterial({
    color: PALETTE.ribbon,
    metalness: 0.1,
    roughness: 0.36,
    specularColor: new THREE.Color('#ff7fcf'),
    specularIntensity: 1,
    envMapIntensity: 0,
    side: THREE.DoubleSide,
    transparent: true
  });

  const ribbons: { mesh: THREE.Mesh; phase: number; speed: number; baseRot: number }[] = [];
  for (let i = 0; i < count; i++) {
    const spread = i / Math.max(1, count - 1);
    const x0 = -8 + spread * 7 + rand() * 1.2;
    const lift = 2.2 + rand() * 1.6 + spread * 1.6;
    const reach = 6 + rand() * 3;
    const pts = [
      new THREE.Vector3(x0 - 5, -12, 0),
      new THREE.Vector3(x0 - 0.5, -4, 0),
      new THREE.Vector3(x0 + 2.4, lift * 0.8, 0),
      new THREE.Vector3(x0 + 2.4 + reach * 0.45, lift, 0),
      new THREE.Vector3(x0 + 2.4 + reach * 0.9, lift * 0.3, 0),
      new THREE.Vector3(x0 + 2.4 + reach * 1.15, -12, 0)
    ];
    const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    const width = 3.4 + rand() * 2.4;
    const geo = ribbonGeometry(curve, width, 0.07 + rand() * 0.05, steps);
    const mesh = new THREE.Mesh(geo, faceMat);
    mesh.position.z = -i * 1.6;
    const baseRot = (rand() - 0.5) * 0.25;
    group.add(mesh);
    ribbons.push({ mesh, phase: rand() * Math.PI * 2, speed: 0.12 + rand() * 0.12, baseRot });
  }

  group.rotation.set(0.1, -0.55, -0.08);
  group.position.set(3.8, -0.8, 0);

  // Lighting rig: faces stay in plum shadow, a grazing key catches the edges.
  const key = new THREE.DirectionalLight('#ff9ad8', 2.4);
  key.position.set(4, 6, 5);
  const rim = new THREE.DirectionalLight('#ff4fb4', 3);
  rim.position.set(-6, 3, -6);
  const fill = new THREE.PointLight('#ff4fb4', 38, 40, 2);
  fill.position.set(-4, -1, 6);
  const ambient = new THREE.AmbientLight('#3a0a2c', 2);
  group.add(key, rim, fill, ambient);

  return {
    group,
    materials: [faceMat],
    update: (t) => {
      ribbons.forEach((r) => {
        r.mesh.rotation.y = r.baseRot + Math.sin(t * r.speed + r.phase) * 0.06;
        r.mesh.rotation.z = Math.cos(t * r.speed * 0.8 + r.phase) * 0.03;
      });
    }
  };
}

/* ------------------------------------------------------------------------ */
/* Force-field shield with the agent-network core                            */
/* ------------------------------------------------------------------------ */

const shieldVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    vPos = position;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * mv;
  }
`;

const shieldFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uHover;
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uMouse;
  uniform float uMouseStrength;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;

  // Hex grid distance on a 2D plane.
  float hexEdge(vec2 p) {
    p *= 9.5;
    vec2 r = vec2(1.0, 1.7320508);
    vec2 h = r * 0.5;
    vec2 a = mod(p, r) - h;
    vec2 b = mod(p - h, r) - h;
    vec2 g = dot(a, a) < dot(b, b) ? a : b;
    vec2 q = abs(g);
    float d = max(dot(q, normalize(r)), q.x);
    return smoothstep(0.5 - 0.22 * 0.5, 0.5, d);
  }

  float noise(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  }

  void main() {
    vec3 n = normalize(vPos);
    // Triplanar-ish mapping so the hexes wrap without a seam.
    vec3 w = pow(abs(n), vec3(12.0));
    w /= (w.x + w.y + w.z);
    float hex = hexEdge(n.yz) * w.x + hexEdge(n.xz) * w.y + hexEdge(n.xy) * w.z;

    float fres = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 2.9);
    float flow = 0.5 + 0.5 * sin(dot(n, vec3(2.4)) * 3.0 + uTime * 0.36);
    float hexFres = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 4.6);

    float hover = uMouseStrength * smoothstep(0.55, 0.0, distance(n, normalize(uMouse)));
    vec3 col = uColor * (fres * 2.2 * (0.66 + flow * 0.34));
    col += uColor * hex * (0.06 + hexFres * 0.9);
    col += uHover * hex * hover * 2.2;
    float grain = noise(n * 40.0 + uTime) * 0.04;
    float alpha = clamp((fres * 0.8 + hex * (0.05 + hexFres * 0.7) + hover * hex * 0.6) * uOpacity + grain * uOpacity, 0.0, 1.0);
    gl_FragColor = vec4(col, alpha);
  }
`;

export interface ShieldSet {
  group: THREE.Group;
  materials: THREE.Material[];
  shieldMaterial: THREE.ShaderMaterial;
  shield: THREE.Mesh;
  update: (t: number, dt: number) => void;
}

/**
 * A hex-latticed fresnel sphere with a glossy core inside it: three nodes wired
 * to a hub, i.e. the site's own agent-network mark in 3D, circled by an orbit.
 */
export function createShield(opts: { segments?: number } = {}): ShieldSet {
  const seg = opts.segments ?? 96;
  const group = new THREE.Group();

  const shieldMaterial = new THREE.ShaderMaterial({
    vertexShader: shieldVertex,
    fragmentShader: shieldFragment,
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uColor: { value: new THREE.Color(PALETTE.shield) },
      uHover: { value: new THREE.Color(PALETTE.shieldHover) },
      uTime: { value: 0 },
      uOpacity: { value: 0.4 },
      uMouse: { value: new THREE.Vector3(0, 0, 1) },
      uMouseStrength: { value: 0 }
    }
  });
  const shield = new THREE.Mesh(new THREE.SphereGeometry(4.5, seg, seg), shieldMaterial);
  group.add(shield);

  const coreMat = new THREE.MeshStandardMaterial({
    color: '#5e1449',
    metalness: 0.6,
    roughness: 0.42,
    envMapIntensity: 0.35,
    transparent: true
  });

  const core = new THREE.Group();
  const hub = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.26, 32, 64), coreMat);
  core.add(hub);
  const nodeGeo = new THREE.SphereGeometry(0.95, 48, 48);
  const armGeo = new THREE.CylinderGeometry(0.16, 0.16, 1, 24);
  [0, 1, 2].forEach((i) => {
    const a = Math.PI / 2 + (i * Math.PI * 2) / 3;
    const dir = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
    const node = new THREE.Mesh(nodeGeo, coreMat);
    node.position.copy(dir.clone().multiplyScalar(2.3));
    core.add(node);
    const arm = new THREE.Mesh(armGeo, coreMat);
    arm.scale.y = 1.35;
    arm.position.copy(dir.clone().multiplyScalar(1.45));
    arm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    core.add(arm);
  });
  core.rotation.set(-0.25, -0.35, -0.88);
  group.add(core);

  // The glowing orbit that slices across the sphere.
  const ringMat = new THREE.MeshBasicMaterial({ color: '#ff4fb4', transparent: true, opacity: 0.85 });
  ringMat.userData.maxOpacity = 0.85;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.1, 0.028, 12, 260), ringMat);
  ring.rotation.set(1.2, 0.5, 0.2);
  group.add(ring);

  const key = new THREE.DirectionalLight('#ffffff', 1);
  key.position.set(1.39, -0.5, 0.4);
  const s1 = new THREE.SpotLight(PALETTE.lightWarm, 22, 0, 0.39, 0.99, 2);
  s1.position.set(3.2, 1.4, 5.5);
  const s2 = new THREE.SpotLight('#ffffff', 8, 20, 0.47, 0.41, 2);
  s2.position.set(-4.2, 0.2, 3.8);
  const s3 = new THREE.SpotLight(PALETTE.lightPink, 30, 0, 0.9, 0, 2);
  s3.position.set(0.6, -2.8, -4.5);
  group.add(key, s1, s2, s3, new THREE.AmbientLight('#2a0620', 1));

  return {
    group,
    materials: [coreMat, ringMat],
    shieldMaterial,
    shield,
    update: (t, dt) => {
      shieldMaterial.uniforms.uTime.value = t;
      core.rotation.z = -0.88 + Math.sin(t * 0.25) * 0.12;
      core.rotation.y = -0.35 + t * 0.12;
      ring.rotation.z += dt * 0.15;
    }
  };
}

/* ------------------------------------------------------------------------ */
/* Floating particles                                                        */
/* ------------------------------------------------------------------------ */

function dotSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.5)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export function createParticles(count = 1000, box = new THREE.Vector3(16, 10, 8)) {
  const pos = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * box.x;
    pos[i * 3 + 1] = (Math.random() - 0.5) * box.y;
    pos[i * 3 + 2] = (Math.random() - 0.5) * box.z;
    seeds[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: PALETTE.particle,
    size: 0.06,
    map: dotSprite(),
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geo, mat);
  return {
    points,
    material: mat,
    update: (dt: number, speed = 1) => {
      const a = geo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        let y = a.getY(i) + dt * (0.08 + seeds[i] * 0.18) * speed;
        if (y > box.y / 2) y = -box.y / 2;
        a.setY(i, y);
        a.setX(i, a.getX(i) + Math.sin(y * 2 + seeds[i] * 6) * 0.0006 * speed);
      }
      a.needsUpdate = true;
    }
  };
}

/** Neutral studio reflections so the lacquer reads as glossy, not flat. */
export function applyStudioEnvironment(renderer: THREE.WebGLRenderer, scene: THREE.Scene) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
}
