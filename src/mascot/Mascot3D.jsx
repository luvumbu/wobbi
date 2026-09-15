import { createElement, useEffect, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { resolveState } from '../../packages/core/config.js';
import { renderParts } from '../../packages/core/render.js';
import { DEFAULT_RELIEF } from './relief.js';
import './mascot.css';

const VIEWBOX = '-16 -16 288 288';

// Maps a path's nearest 'data-part' (as authored by packages/core/render.js)
// to one of RELIEF_PARTS, so each facial feature can get its own depth.
// The raw value is also kept: back hair/ears/horns/halo ('head', authored
// in 2D to have their base hidden behind the body) and custom hair
// ('head-front', authored to sit fully on top of the body) share the same
// relief slider but need different forward offsets — see frontLift below.
function partCategory(node) {
  const el =
    typeof node?.closest === 'function' ? node.closest('[data-part]') : null;
  const raw = el?.getAttribute('data-part');
  if (raw === 'eye-white' || raw === 'pupil' || raw === 'eyes')
    return { category: 'eyes', raw };
  if (raw === 'nose') return { category: 'nose', raw };
  if (raw === 'mouth') return { category: 'mouth', raw };
  if (raw === 'brows') return { category: 'brows', raw };
  if (raw === 'head' || raw === 'head-front') return { category: 'head', raw };
  if (raw === 'accessory' || raw === 'accessory-back')
    return { category: 'accessory', raw };
  if (raw === 'shadow') return { category: 'shadow', raw };
  return { category: 'body', raw };
}

function shapeExtent(shape) {
  const points = shape.extractPoints(6).shape;
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  points.forEach((p) => {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y);
    maxY = Math.max(maxY, p.y);
  });
  return Math.min(maxX - minX, maxY - minY);
}

// The 3D mesh is built straight from the same SVG the 2D preview renders
// (with depth forced to 'flat' so every path is a plain fill SVGLoader can
// read — the soft 2D shading gradient would be redundant once real WebGL
// lighting is applied), so shapes and colours stay identical to the 2D view.
function buildGroup(config, state, relief) {
  const reaction = resolveState(state);
  const flatConfig = { ...config, depth: 'flat' };
  const markup = renderToStaticMarkup(
    createElement(
      'svg',
      { viewBox: VIEWBOX, xmlns: 'http://www.w3.org/2000/svg' },
      renderParts(createElement, flatConfig, reaction),
    ),
  );
  const { paths } = new SVGLoader().parse(markup);
  const group = new THREE.Group();
  const disposables = [];

  const makeMaterial = (hex, opacity) =>
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex),
      opacity,
      transparent: opacity < 1,
      side: THREE.DoubleSide,
      roughness: 0.55,
      metalness: 0.04,
    });

  // SVG paint order stacks later paths on top of earlier ones; giving each
  // path a small forward z-offset (in that same order) reproduces that
  // layering in 3D and keeps coincident surfaces (e.g. a pupil sitting
  // exactly on its eye-white) from z-fighting.
  const Z_STEP = 2.2;
  const bodyDepth = Math.max(4, relief.base * (relief.body ?? 1));
  paths.forEach((path, pathIndex) => {
    const style = path.userData.style;
    const { category, raw } = partCategory(path.userData.node);
    const depth =
      category === 'shadow'
        ? Math.max(4, relief.base * 0.08)
        : Math.max(4, relief.base * (relief[category] ?? 1));
    // Every feature drawn "on top of" the body in the 2D art (eyes, nose,
    // mouth, hair, accessories…) must start at least at the body's own
    // front face, or it ends up embedded in — and hidden by — the body
    // once that face gets thick. Only the body and its shadow stay at 0.
    // Back hair/ears/horns/halo ('head') were authored in 2D with their
    // base hidden behind the body, so lifting them all the way to the
    // front makes them look detached; they only come half-way forward,
    // while custom hair ('head-front', always meant to sit on top) gets
    // the full lift like every other feature.
    const frontLift =
      category === 'body' || category === 'shadow'
        ? 0
        : raw === 'head'
          ? bodyDepth * 0.4
          : bodyDepth;
    const layerZ = frontLift + pathIndex * Z_STEP;

    if (style.fill !== undefined && style.fill !== 'none') {
      const fillOpacity = style.fillOpacity ?? 1;
      if (fillOpacity > 0.01) {
        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          // A small round detail (an eye, a nostril) given the same depth
          // as the body reads as a flat-faced cylinder stuck onto the
          // face, not a rounded eyeball — nothing like the soft 2D art.
          // Capping its depth to its own size, then giving it a bevel big
          // enough to eat most of that depth, turns it into a dome/pill
          // instead. Large shapes (the body) are essentially never capped,
          // so the volume sliders still control them as expected.
          const extent = shapeExtent(shape);
          const shapeDepth = Math.min(depth, extent * 1.1);
          const bevelSize = Math.max(
            0.6,
            Math.min(shapeDepth * 0.48, extent * 0.48),
          );
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: shapeDepth,
            bevelEnabled: true,
            bevelThickness: bevelSize,
            bevelSize,
            bevelSegments: extent > 6 ? 16 : 4,
            curveSegments: 24,
          });
          const material = makeMaterial(style.fill, fillOpacity);
          disposables.push(geometry, material);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.z = layerZ;
          group.add(mesh);
        });
      }
    }

    // Stroke-only paths (glasses/monocle rims, etc. drawn with fill:none)
    // have no shape to extrude, so they're drawn as a thin flat ribbon on
    // the front face instead — the same technique three.js's own SVGLoader
    // example uses, since these lines are already thin in the source art.
    if (style.stroke !== undefined && style.stroke !== 'none') {
      const strokeOpacity = style.strokeOpacity ?? 1;
      if (strokeOpacity > 0.01) {
        path.subPaths.forEach((subPath) => {
          const geometry = SVGLoader.pointsToStroke(subPath.getPoints(), style);
          if (!geometry) return;
          const material = makeMaterial(style.stroke, strokeOpacity);
          disposables.push(geometry, material);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.z = layerZ + depth;
          group.add(mesh);
        });
      }
    }
  });

  // SVG space is y-down; three.js is y-up.
  group.scale.y = -1;
  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  // Offset the group itself (not each mesh's local position) so the
  // already-applied y-flip on the group doesn't get double-counted.
  group.position.sub(center);
  const size = box.getSize(new THREE.Vector3());
  const radius = Math.max(size.x, size.y, size.z, 1) / 2;

  return { group, disposables, radius };
}

export function Mascot3D({
  config,
  state = config.defaultState,
  size = 380,
  relief = DEFAULT_RELIEF,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 5000);
    const { group, disposables, radius } = buildGroup(config, state, relief);
    scene.add(group);

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(radius * 1.6, radius * 2.2, radius * 2.4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.4);
    fill.position.set(-radius * 2, radius * 0.4, radius * 1.4);
    scene.add(fill);

    const distance = radius / Math.sin((camera.fov * Math.PI) / 360) + radius;
    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0);

    if (renderer.outputColorSpace !== undefined) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion =
      config.accessibility.respectReducedMotion && media.matches;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = distance * 0.5;
    controls.maxDistance = distance * 2;
    controls.autoRotate = !reducedMotion;
    controls.autoRotateSpeed = 2.4;

    const resize = () => {
      const width = container.clientWidth || size;
      const height = container.clientHeight || size;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    let raf = 0;
    let disposed = false;
    const tick = () => {
      if (disposed) return;
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      controls.dispose();
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [config, state, size, relief]);

  return (
    <div
      ref={containerRef}
      className="wobbi-mascot-3d"
      role="img"
      aria-label={config.accessibility.label}
      style={{ width: size, height: size }}
    />
  );
}
