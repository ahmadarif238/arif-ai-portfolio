import * as THREE from 'three';

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
  ribbon: '#8c2f82',
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
  grad.addColorStop(0, '#3a0f31');
  grad.addColorStop(0.45, '#1f0719');
  grad.addColorStop(1, '#060106');
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

/** Falloff toward the floor: bands glow at the crown and sink into shadow below. */
function shadeByHeight(geo: THREE.BufferGeometry) {
  const p = geo.attributes.position as THREE.BufferAttribute;
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = THREE.MathUtils.smoothstep(p.getY(i), -9, 3);
    const v = 0.38 + 0.62 * t;
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = v;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
}

export interface RibbonSet {
  group: THREE.Group;
  materials: THREE.Material[];
  update: (t: number) => void;
}

/**
 * Thick satin slabs that rise from the bottom of the frame and arc away to the
 * upper right, the same silhouette as the reference hero. Broad faces take a
 * soft violet key light, the slab sides fall into shadow, and only a grazing
 * specular line catches white.
 */
export function createRibbons(opts: { seed?: number; count?: number; steps?: number } = {}): RibbonSet {
  const rand = rng(opts.seed ?? 7);
  const count = opts.count ?? 4;
  const steps = opts.steps ?? 160;
  const group = new THREE.Group();

  // Phong rather than PBR: the bands cover much of the screen, and this keeps
  // the satin look and specular glint at a fraction of the per-pixel cost.
  const faceMat = new THREE.MeshPhongMaterial({
    color: PALETTE.ribbon,
    vertexColors: true,
    specular: new THREE.Color('#8a3c80'),
    shininess: 30,
    side: THREE.DoubleSide,
    transparent: true
  });

  const ribbons: { mesh: THREE.Mesh; phase: number; speed: number; baseRot: number }[] = [];
  for (let i = 0; i < count; i++) {
    const x0 = -3.2 + i * 2.3 + (rand() - 0.5) * 0.6;
    const lift = 1.1 + i * 0.8 + rand() * 0.4;
    const reach = 3.4 + rand() * 1.0;
    const pts = [
      new THREE.Vector3(x0 - 2.6, -11, 0),
      new THREE.Vector3(x0 - 0.4, -4, 0),
      new THREE.Vector3(x0 + 0.9, lift * 0.8, 0),
      new THREE.Vector3(x0 + 0.9 + reach * 0.5, lift + 0.6, 0),
      new THREE.Vector3(x0 + 0.9 + reach, lift * 0.75, 0),
      new THREE.Vector3(x0 + 1.4 + reach * 1.15, -4, 0),
      new THREE.Vector3(x0 + 1.8 + reach * 1.25, -11, 0)
    ];
    const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    const width = 2.1 + rand() * 0.6;
    const geo = ribbonGeometry(curve, width, 0.75 + rand() * 0.2, steps);
    shadeByHeight(geo);
    const mesh = new THREE.Mesh(geo, faceMat);
    mesh.position.z = -i * 1.9;
    const baseRot = (rand() - 0.5) * 0.15;
    group.add(mesh);
    ribbons.push({ mesh, phase: rand() * Math.PI * 2, speed: 0.1 + rand() * 0.1, baseRot });
  }

  group.rotation.set(0.08, -0.72, -0.04);
  group.position.set(2.4, -2.1, 0);

  // Soft violet sky/ground wash, a cool key from upper left, a pink kicker behind.
  const hemi = new THREE.HemisphereLight('#d88ad6', '#1a0415', 2.2);
  const key = new THREE.DirectionalLight('#f7c9f1', 2.6);
  key.position.set(-3, 8, 5);
  const rim = new THREE.DirectionalLight('#ff4fb4', 1.4);
  rim.position.set(6, 2, -8);
  group.add(hemi, key, rim);

  return {
    group,
    materials: [faceMat],
    update: (t) => {
      ribbons.forEach((r) => {
        r.mesh.rotation.y = r.baseRot + Math.sin(t * r.speed + r.phase) * 0.05;
        r.mesh.rotation.z = Math.cos(t * r.speed * 0.8 + r.phase) * 0.02;
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

  const coreMat = new THREE.MeshPhongMaterial({
    color: '#5e1449',
    specular: new THREE.Color('#ff9ad8'),
    shininess: 60,
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

/**
 * Soft pink motes drifting upward. All motion runs in the vertex shader, so
 * nothing is recomputed or re-uploaded on the CPU each frame.
 */
export function createParticles(count = 260, box = new THREE.Vector3(18, 11, 8)) {
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * box.x;
    pos[i * 3 + 1] = (Math.random() - 0.5) * box.y;
    pos[i * 3 + 2] = (Math.random() - 0.5) * box.z;
    seed[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uHeight: { value: box.y },
      uOpacity: { value: 1 },
      uScale: { value: window.devicePixelRatio || 1 },
      uColor: { value: new THREE.Color(PALETTE.particle) }
    },
    vertexShader: /* glsl */ `
      attribute float seed;
      uniform float uTime, uHeight, uScale;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uHeight * 0.5 + uTime * (0.08 + seed * 0.18), uHeight) - uHeight * 0.5;
        p.x += sin(p.y * 1.7 + seed * 6.283) * 0.12;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float big = step(0.975, seed);
        gl_PointSize = (big * 26.0 + 3.0 + seed * 3.0) * uScale * (10.0 / -mv.z);
        float edge = 1.0 - smoothstep(0.35, 0.5, abs(p.y / uHeight));
        vAlpha = edge * (big * 0.2 + 0.4);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(uColor, a * a * vAlpha * uOpacity);
      }
    `
  });
  const points = new THREE.Points(geo, material);
  points.frustumCulled = false;
  return {
    points,
    material,
    update: (t: number) => {
      material.uniforms.uTime.value = t;
    }
  };
}

/* ------------------------------------------------------------------------ */
/* Final pass: film grain + dither, in the same draw as tone output          */
/* ------------------------------------------------------------------------ */

export const GrainShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uAmount: { value: 0.07 } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime, uAmount;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float n = hash(gl_FragCoord.xy) - 0.5;
      c.rgb += n * uAmount;
      gl_FragColor = c;
    }
  `
};
