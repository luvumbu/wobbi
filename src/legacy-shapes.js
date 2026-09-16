import { migrateLegacyPointsArray } from '../packages/core/custom-shape.js';

// A whole saved/shared character config carries 5 independent point arrays
// (body, each eye, iris, hair) that may still be in the pre-freeform
// radius-at-fixed-angle format. Converts any of them found in place before
// validateConfig() runs, since the old format fails today's {x,y} checks.
export function migrateLegacyCustomShapes(config) {
  if (!config || typeof config !== 'object') return config;
  const next = { ...config };
  if (next.customShape?.points)
    next.customShape = {
      ...next.customShape,
      points: migrateLegacyPointsArray(next.customShape.points),
    };
  if (next.customEyeShape)
    next.customEyeShape = {
      ...next.customEyeShape,
      left: next.customEyeShape.left && {
        ...next.customEyeShape.left,
        points: migrateLegacyPointsArray(next.customEyeShape.left.points),
      },
      right: next.customEyeShape.right && {
        ...next.customEyeShape.right,
        points: migrateLegacyPointsArray(next.customEyeShape.right.points),
      },
    };
  if (next.customIris?.points)
    next.customIris = {
      ...next.customIris,
      points: migrateLegacyPointsArray(next.customIris.points),
    };
  if (next.customHair?.points)
    next.customHair = {
      ...next.customHair,
      points: migrateLegacyPointsArray(next.customHair.points),
    };
  return next;
}
