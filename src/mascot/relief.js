// Shared between Stage.jsx (the relief sliders) and the lazy-loaded
// Mascot3D.jsx, kept in a separate module with no three.js import so
// referencing these constants never pulls three.js into the main bundle.
export const RELIEF_PARTS = [
  'body',
  'eyes',
  'nose',
  'mouth',
  'brows',
  'head',
  'accessory',
];

export const DEFAULT_RELIEF = {
  base: 60,
  body: 1,
  eyes: 1,
  nose: 1,
  mouth: 1,
  brows: 1,
  head: 1,
  accessory: 1,
};
