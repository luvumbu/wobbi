import {
  CUSTOM_SHAPE_MAX_RADIUS,
  CUSTOM_SHAPE_MIN_RADIUS,
  CUSTOM_SHAPE_POINT_COUNT,
  DEFAULT_CUSTOM_SHAPE_POINTS,
  CUSTOM_EYE_MAX_RADIUS,
  CUSTOM_EYE_MIN_RADIUS,
  CUSTOM_EYE_POINT_COUNT,
  DEFAULT_CUSTOM_EYE_POINTS,
  CUSTOM_IRIS_MAX_RATIO,
  CUSTOM_IRIS_MIN_RATIO,
  CUSTOM_IRIS_POINT_COUNT,
  DEFAULT_CUSTOM_IRIS_POINTS,
  CUSTOM_HAIR_MAX_RADIUS,
  CUSTOM_HAIR_MIN_RADIUS,
  CUSTOM_HAIR_POINT_COUNT,
  DEFAULT_CUSTOM_HAIR_POINTS,
} from './custom-shape.js';

export const REACTIONS = [
  'idle',
  'happy',
  'thinking',
  'surprised',
  'sad',
  'error',
  'success',
  'loading',
  'sleeping',
  'singing',
];
export const SHAPES = [
  'wobbi',
  'ghost',
  'circle',
  'rounded-square',
  'cloud',
  'drop',
  'oval',
  'egg',
  'custom',
];
export const EYES = [
  'classic',
  'round',
  'capsules',
  'dots',
  'asymmetric',
  'pixel',
  'sleepy',
  'angry',
  'side-eye',
  'wink',
  'lashed',
  'bubble',
  'winged',
  'custom',
];
export const IRIS = [
  'dot',
  'glossy',
  'money',
  'heart',
  'star',
  'swirl',
  'rings',
  'pinwheel',
  'veil',
  'custom',
];
export const NOSES = [
  'none',
  'dot',
  'round',
  'button',
  'hook',
  'nostrils',
  'pointy',
  'muzzle',
  'moustache',
  'beak',
];
export const BROWS = ['none', 'soft', 'straight', 'arched', 'worried'];
export const MOUTHS = [
  'none',
  'smile',
  'small',
  'open',
  'tooth',
  'grin',
  'pout',
  'fangs',
];
const NO_MOUTH_NOSES = new Set(['muzzle', 'beak']);
export const mouthsForNose = (nose) =>
  NO_MOUTH_NOSES.has(nose) ? ['none'] : MOUTHS;
export const DEPTHS = ['flat', 'soft', 'deep'];
export const HEADS = [
  'none',
  'tuft',
  'curl',
  'spiky',
  'bun',
  'fringe',
  'blaze',
  'mane',
  'wild-mane',
  'custom-hair',
  'bunny-ears',
  'ears',
  'round-ears',
  'horns',
  'halo',
];
export const ACCESSORIES = [
  'none',
  'glasses',
  'sunglasses',
  'headphones',
  'bowtie',
  'monocle',
  'blush',
  'freckles',
  'bandage',
];
export const HEADS_BY_SHAPE = {
  wobbi: [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'round-ears',
    'horns',
    'halo',
  ],
  ghost: [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'round-ears',
    'horns',
    'halo',
  ],
  circle: HEADS,
  'rounded-square': [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'horns',
    'halo',
  ],
  cloud: [
    'none',
    'tuft',
    'curl',
    'spiky',
    'bun',
    'fringe',
    'blaze',
    'mane',
    'wild-mane',
    'custom-hair',
    'halo',
  ],
  drop: ['none', 'halo'],
  oval: HEADS,
  egg: HEADS,
  custom: HEADS,
};
export const ACCESSORIES_BY_SHAPE = {
  wobbi: ACCESSORIES,
  ghost: ACCESSORIES,
  circle: ACCESSORIES,
  'rounded-square': ACCESSORIES,
  cloud: ACCESSORIES,
  drop: ACCESSORIES,
  oval: ACCESSORIES,
  egg: ACCESSORIES,
  custom: ACCESSORIES,
};
export const headsForShape = (shape) => HEADS_BY_SHAPE[shape] || ['none'];
export const accessoriesForShape = (shape) =>
  ACCESSORIES_BY_SHAPE[shape] || ['none'];
export const MOVEMENTS = [
  'bounce',
  'squash',
  'tilt',
  'shake',
  'blink',
  'eye-movement',
  'mouth',
];
export const EASINGS = [
  'ease-out',
  'ease-in-out',
  'linear',
  'cubic-bezier(0.34,1.56,0.64,1)',
];
export const PROJECT_VERSION = 2;
export const resolveState = (state) =>
  REACTIONS.includes(state) ? state : 'idle';
export function normalizeSlug(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 64);
}
export function normalizeMotion(value = {}) {
  const clamp = (n, min, max, fallback) =>
    Number.isFinite(Number(n))
      ? Math.min(max, Math.max(min, Number(n)))
      : fallback;
  return {
    duration: clamp(value.duration, 200, 5000, 800),
    intensity: clamp(value.intensity, 0, 100, 60),
    easing: EASINGS.includes(value.easing) ? value.easing : 'ease-out',
    playback: value.playback === 'once' ? 'once' : 'loop',
    movements: (value.movements || [])
      .filter(
        (m, i, a) =>
          MOVEMENTS.includes(m.type) &&
          a.findIndex((x) => x.type === m.type) === i,
      )
      .map((m) => ({ type: m.type, enabled: !!m.enabled })),
  };
}
const LEGACY_EYE_REMAP = {
  glossy: { eyes: 'classic', iris: 'glossy' },
  money: { eyes: 'classic', iris: 'money' },
  heart: { eyes: 'classic', iris: 'heart' },
  star: { eyes: 'classic', iris: 'star' },
};
export function createConfig(rawOverrides = {}) {
  const legacyEyes = LEGACY_EYE_REMAP[rawOverrides.eyes];
  const overrides = legacyEyes
    ? {
        ...rawOverrides,
        eyes: legacyEyes.eyes,
        iris: rawOverrides.iris ?? legacyEyes.iris,
      }
    : rawOverrides;
  const moves = {
    idle: ['blink', 'eye-movement'],
    happy: ['bounce', 'squash', 'tilt', 'blink'],
    thinking: ['tilt', 'eye-movement'],
    surprised: ['squash', 'blink'],
    sad: ['tilt'],
    error: ['shake'],
    success: ['bounce', 'squash'],
    loading: ['tilt', 'blink'],
    sleeping: ['blink'],
    singing: ['bounce', 'mouth'],
  };
  const defaults = {
    version: PROJECT_VERSION,
    id: 'wobbi-original',
    slug: 'wobbi',
    name: 'Wobbi',
    componentName: 'Wobbi',
    preset: 'wobbi',
    shape: 'wobbi',
    eyes: 'classic',
    iris: 'dot',
    nose: 'none',
    brows: 'none',
    mouth: 'none',
    depth: 'soft',
    color: '#111218',
    mouthColor: '#111218',
    noseColor: '#111218',
    browColor: '#111218',
    pupilColor: '#111218',
    lashColor: '#111218',
    eyeOutlineColor: '#111218',
    eyeOutlineWidth: 0,
    headColor: '#111218',
    noseOutlineColor: '#111218',
    noseOutlineWidth: 0,
    browOutlineColor: '#111218',
    browOutlineWidth: 0,
    mouthOutlineColor: '#111218',
    mouthOutlineWidth: 0,
    headOutlineColor: '#111218',
    headOutlineWidth: 0,
    accessoryOutlineColor: '#111218',
    accessoryOutlineWidth: 0,
    head: 'none',
    accessory: 'none',
    accessoryColor: '#262331',
    accentColor: '#9270ff',
    eyeColor: '#ffffff',
    outlineColor: '#ffffff',
    outlineWidth: 0,
    irisSpin: false,
    background: { type: 'solid', color: '#f1edff' },
    customShape: { points: DEFAULT_CUSTOM_SHAPE_POINTS },
    customEyeShape: {
      symmetric: true,
      left: { points: DEFAULT_CUSTOM_EYE_POINTS },
      right: { points: DEFAULT_CUSTOM_EYE_POINTS },
    },
    customIris: { points: DEFAULT_CUSTOM_IRIS_POINTS },
    customHair: { points: DEFAULT_CUSTOM_HAIR_POINTS },
    size: 256,
    defaultState: 'idle',
    reactions: Object.fromEntries(
      REACTIONS.map((state) => [
        state,
        normalizeMotion({
          duration: state === 'idle' ? 2400 : 800,
          intensity: 60,
          movements: moves[state].map((type) => ({ type, enabled: true })),
        }),
      ]),
    ),
    export: {
      folder: 'src/components/mascot',
      framework: 'react',
    },
    accessibility: {
      respectReducedMotion: true,
      pauseOffscreen: true,
      label: 'Mascotte Wobbi',
    },
  };
  const knownOverrides = Object.fromEntries(
    Object.keys(defaults)
      .filter((key) => Object.hasOwn(overrides, key))
      .map((key) => [key, overrides[key]]),
  );
  return {
    ...defaults,
    ...knownOverrides,
    background: { ...defaults.background, ...overrides.background },
    customShape: { ...defaults.customShape, ...overrides.customShape },
    customEyeShape: {
      ...defaults.customEyeShape,
      ...overrides.customEyeShape,
      left: {
        ...defaults.customEyeShape.left,
        ...overrides.customEyeShape?.left,
      },
      right: {
        ...defaults.customEyeShape.right,
        ...overrides.customEyeShape?.right,
      },
    },
    customIris: { ...defaults.customIris, ...overrides.customIris },
    customHair: { ...defaults.customHair, ...overrides.customHair },
    export: { ...defaults.export, ...overrides.export },
    accessibility: { ...defaults.accessibility, ...overrides.accessibility },
    reactions: Object.fromEntries(
      REACTIONS.map((state) => [
        state,
        normalizeMotion(
          overrides.reactions?.[state] || defaults.reactions[state],
        ),
      ]),
    ),
  };
}

const CONFIG_KEYS = [
  'version',
  'id',
  'slug',
  'name',
  'componentName',
  'preset',
  'shape',
  'eyes',
  'iris',
  'nose',
  'brows',
  'mouth',
  'depth',
  'color',
  'mouthColor',
  'noseColor',
  'browColor',
  'pupilColor',
  'lashColor',
  'eyeOutlineColor',
  'eyeOutlineWidth',
  'headColor',
  'noseOutlineColor',
  'noseOutlineWidth',
  'browOutlineColor',
  'browOutlineWidth',
  'mouthOutlineColor',
  'mouthOutlineWidth',
  'headOutlineColor',
  'headOutlineWidth',
  'accessoryOutlineColor',
  'accessoryOutlineWidth',
  'head',
  'accessory',
  'accessoryColor',
  'accentColor',
  'eyeColor',
  'outlineColor',
  'outlineWidth',
  'irisSpin',
  'background',
  'customShape',
  'customEyeShape',
  'customIris',
  'customHair',
  'size',
  'defaultState',
  'reactions',
  'export',
  'accessibility',
];
const hasOnlyKeys = (value, keys) =>
  value &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  Object.keys(value).every((key) => keys.includes(key));

export function validateConfig(config) {
  const errors = [];
  const color = /^#[\da-f]{6}$/i;
  if (!config || typeof config !== 'object' || Array.isArray(config))
    return ['Configuration must be an object.'];
  if (!hasOnlyKeys(config, CONFIG_KEYS))
    errors.push('Configuration contains unsupported fields.');
  if (config.version !== PROJECT_VERSION)
    errors.push(`Project version must be ${PROJECT_VERSION}.`);
  if (
    typeof config.id !== 'string' ||
    config.id.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.id)
  )
    errors.push('Project id must be a safe identifier.');
  if (
    typeof config.preset !== 'string' ||
    config.preset.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.preset)
  )
    errors.push('Preset must be a safe identifier.');
  if (
    typeof config.componentName !== 'string' ||
    config.componentName.length > 50 ||
    !/^[A-Z][A-Za-z0-9]*$/.test(config.componentName)
  )
    errors.push(
      'Component name must be a valid PascalCase JavaScript identifier.',
    );
  if (
    typeof config.slug !== 'string' ||
    config.slug.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.slug)
  )
    errors.push('Slug must use lowercase letters, numbers and hyphens.');
  if (
    typeof config.name !== 'string' ||
    !config.name.trim() ||
    config.name.length > 40 ||
    /[\0\r\n]/.test(config.name)
  )
    errors.push('Mascot name must contain between 1 and 40 characters.');
  if (!SHAPES.includes(config.shape)) errors.push('Choose a supported shape.');
  if (!EYES.includes(config.eyes)) errors.push('Choose supported eyes.');
  if (!IRIS.includes(config.iris)) errors.push('Choose a supported iris.');
  if (!NOSES.includes(config.nose)) errors.push('Choose a supported nose.');
  if (!BROWS.includes(config.brows)) errors.push('Choose supported eyebrows.');
  if (!MOUTHS.includes(config.mouth)) errors.push('Choose a supported mouth.');
  if (!mouthsForNose(config.nose).includes(config.mouth))
    errors.push('A muzzle or beak cannot be combined with a mouth.');
  if (!DEPTHS.includes(config.depth)) errors.push('Choose supported depth.');
  if (!HEADS.includes(config.head)) errors.push('Invalid head detail.');
  if (!ACCESSORIES.includes(config.accessory))
    errors.push('Invalid accessory.');
  if (!headsForShape(config.shape).includes(config.head))
    errors.push('Choose a head detail compatible with the shape.');
  if (!accessoriesForShape(config.shape).includes(config.accessory))
    errors.push('Choose an accessory compatible with the shape.');
  if (
    !Number.isFinite(config.eyeOutlineWidth) ||
    config.eyeOutlineWidth < 0 ||
    config.eyeOutlineWidth > 6
  )
    errors.push('Invalid eye outline.');
  for (const key of [
    'noseOutlineWidth',
    'browOutlineWidth',
    'mouthOutlineWidth',
    'headOutlineWidth',
    'accessoryOutlineWidth',
  ]) {
    if (!Number.isFinite(config[key]) || config[key] < 0 || config[key] > 6)
      errors.push(`Invalid ${key}.`);
  }
  for (const key of [
    'color',
    'mouthColor',
    'noseColor',
    'browColor',
    'eyeColor',
    'outlineColor',
    'pupilColor',
    'lashColor',
    'eyeOutlineColor',
    'headColor',
    'noseOutlineColor',
    'browOutlineColor',
    'mouthOutlineColor',
    'headOutlineColor',
    'accessoryOutlineColor',
    'accessoryColor',
    'accentColor',
  ]) {
    if (key === 'lashColor' && config[key] === undefined) continue;
    if (!color.test(config[key])) errors.push(`Invalid ${key}.`);
  }
  if (
    !hasOnlyKeys(config.background, ['type', 'color']) ||
    !color.test(config.background?.color) ||
    !['solid', 'transparent'].includes(config.background?.type)
  )
    errors.push('Invalid background.');
  if (
    !config.customShape ||
    typeof config.customShape !== 'object' ||
    !hasOnlyKeys(config.customShape, ['points']) ||
    !Array.isArray(config.customShape.points) ||
    config.customShape.points.length !== CUSTOM_SHAPE_POINT_COUNT ||
    config.customShape.points.some(
      (radius) =>
        !Number.isFinite(radius) ||
        radius < CUSTOM_SHAPE_MIN_RADIUS ||
        radius > CUSTOM_SHAPE_MAX_RADIUS,
    )
  )
    errors.push('Invalid custom shape.');
  const isValidEyeSidePoints = (side) =>
    side &&
    typeof side === 'object' &&
    hasOnlyKeys(side, ['points']) &&
    Array.isArray(side.points) &&
    side.points.length === CUSTOM_EYE_POINT_COUNT &&
    side.points.every(
      (radius) =>
        Number.isFinite(radius) &&
        radius >= CUSTOM_EYE_MIN_RADIUS &&
        radius <= CUSTOM_EYE_MAX_RADIUS,
    );
  if (
    !config.customEyeShape ||
    typeof config.customEyeShape !== 'object' ||
    !hasOnlyKeys(config.customEyeShape, ['symmetric', 'left', 'right']) ||
    typeof config.customEyeShape.symmetric !== 'boolean' ||
    !isValidEyeSidePoints(config.customEyeShape.left) ||
    !isValidEyeSidePoints(config.customEyeShape.right)
  )
    errors.push('Invalid custom eye shape.');
  if (
    !config.customIris ||
    typeof config.customIris !== 'object' ||
    !hasOnlyKeys(config.customIris, ['points']) ||
    !Array.isArray(config.customIris.points) ||
    config.customIris.points.length !== CUSTOM_IRIS_POINT_COUNT ||
    config.customIris.points.some(
      (ratio) =>
        !Number.isFinite(ratio) ||
        ratio < CUSTOM_IRIS_MIN_RATIO ||
        ratio > CUSTOM_IRIS_MAX_RATIO,
    )
  )
    errors.push('Invalid custom iris.');
  if (
    !config.customHair ||
    typeof config.customHair !== 'object' ||
    !hasOnlyKeys(config.customHair, ['points']) ||
    !Array.isArray(config.customHair.points) ||
    config.customHair.points.length !== CUSTOM_HAIR_POINT_COUNT ||
    config.customHair.points.some(
      (radius) =>
        !Number.isFinite(radius) ||
        radius < CUSTOM_HAIR_MIN_RADIUS ||
        radius > CUSTOM_HAIR_MAX_RADIUS,
    )
  )
    errors.push('Invalid custom hair.');
  if (typeof config.irisSpin !== 'boolean') errors.push('Invalid iris spin.');
  if (!Number.isFinite(config.size) || config.size < 48 || config.size > 512)
    errors.push('Size must be between 48 and 512.');
  if (
    !Number.isFinite(config.outlineWidth) ||
    config.outlineWidth < 0 ||
    config.outlineWidth > 16
  )
    errors.push('Outline must be between 0 and 16.');
  if (!REACTIONS.includes(config.defaultState))
    errors.push('Choose a supported default state.');
  if (
    !hasOnlyKeys(config.export, ['folder', 'framework']) ||
    typeof config.export?.folder !== 'string' ||
    !config.export.folder.trim() ||
    config.export.folder.length > 240 ||
    /[\0<>:"|?*]/.test(config.export.folder) ||
    config.export.folder.split(/[\\/]/).some((p) => p === '..')
  )
    errors.push('Choose a safe export folder without parent traversal.');
  if (!['react', 'vue'].includes(config.export?.framework))
    errors.push('Choose React or Vue.js.');
  if (
    !hasOnlyKeys(config.accessibility, [
      'respectReducedMotion',
      'pauseOffscreen',
      'label',
    ]) ||
    typeof config.accessibility?.respectReducedMotion !== 'boolean' ||
    typeof config.accessibility?.pauseOffscreen !== 'boolean' ||
    typeof config.accessibility?.label !== 'string' ||
    !config.accessibility.label.trim() ||
    config.accessibility.label.length > 120 ||
    /[\0\r\n]/.test(config.accessibility.label)
  )
    errors.push('Invalid accessibility settings.');
  const reactionKeys = Object.keys(config.reactions || {});
  if (
    reactionKeys.length !== REACTIONS.length ||
    REACTIONS.some((state) => !reactionKeys.includes(state))
  )
    errors.push('Every supported reaction must be configured exactly once.');
  for (const state of REACTIONS) {
    const motion = config.reactions?.[state];
    if (!motion) continue;
    if (
      !hasOnlyKeys(motion, [
        'duration',
        'intensity',
        'easing',
        'playback',
        'movements',
      ]) ||
      !Number.isFinite(motion.duration) ||
      motion.duration < 200 ||
      motion.duration > 5000 ||
      !Number.isFinite(motion.intensity) ||
      motion.intensity < 0 ||
      motion.intensity > 100 ||
      !EASINGS.includes(motion.easing) ||
      !['once', 'loop'].includes(motion.playback) ||
      !Array.isArray(motion.movements) ||
      motion.movements.some(
        (movement, index, movements) =>
          !MOVEMENTS.includes(movement?.type) ||
          !hasOnlyKeys(movement, ['type', 'enabled']) ||
          typeof movement.enabled !== 'boolean' ||
          movements.findIndex((item) => item?.type === movement.type) !== index,
      )
    )
      errors.push(`Invalid ${state} reaction.`);
  }
  return errors;
}
export function animationPlan(motion, reduced = false) {
  if (reduced) return [];
  const value = normalizeMotion(motion);
  const enabled = value.movements.filter((m) => m.enabled);
  const strength = value.intensity / 100;
  const transforms = {
    bounce: `translateY(${-18 * strength}px)`,
    squash: `scale(${1 + 0.18 * strength}, ${1 - 0.16 * strength})`,
    tilt: `rotate(${10 * strength}deg)`,
    shake: `translateX(${9 * strength}px)`,
    blink: `scaleY(${1 - 0.94 * strength})`,
    'eye-movement': `translate(${7 * strength}px, ${-4 * strength}px)`,
    mouth: `scale(${1 + 0.4 * strength}, ${1 + 0.3 * strength})`,
  };
  return enabled.map((move, index) => ({
    type: move.type,
    target:
      move.type === 'blink' || move.type === 'eye-movement'
        ? 'eyes'
        : move.type === 'mouth'
          ? 'mouth'
          : move.type,
    keyframes: [
      { transform: 'none', offset: 0 },
      { transform: transforms[move.type], offset: 0.5 / enabled.length },
      { transform: 'none', offset: 1 / enabled.length },
      ...(enabled.length > 1 ? [{ transform: 'none', offset: 1 }] : []),
    ],
    options: {
      duration: value.duration,
      delay: (index * value.duration) / enabled.length,
      easing: value.easing,
      iterations: value.playback === 'loop' ? Infinity : 1,
      fill: 'none',
    },
  }));
}
