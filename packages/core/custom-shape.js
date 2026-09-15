function radialPointCoordinates(radii, pointCount, centerX, centerY, mirrorX) {
  return radii.map((radius, index) => {
    const angle = (index / pointCount) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * radius * (mirrorX ? -1 : 1),
      y: centerY + Math.sin(angle) * radius,
    };
  });
}

// Closed Catmull-Rom spline converted to cubic beziers (standard 1/6 tension),
// so the outline stays smooth and blobby instead of a jagged polygon.
function radialPointsToPath(points) {
  const count = points.length;
  let d = `M${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} `;
  for (let index = 0; index < count; index += 1) {
    const previous = points[(index - 1 + count) % count];
    const current = points[index];
    const next = points[(index + 1) % count];
    const afterNext = points[(index + 2) % count];
    const controlX1 = current.x + (next.x - previous.x) / 6;
    const controlY1 = current.y + (next.y - previous.y) / 6;
    const controlX2 = next.x - (afterNext.x - current.x) / 6;
    const controlY2 = next.y - (afterNext.y - current.y) / 6;
    d += `C${controlX1.toFixed(2)} ${controlY1.toFixed(2)} ${controlX2.toFixed(2)} ${controlY2.toFixed(2)} ${next.x.toFixed(2)} ${next.y.toFixed(2)} `;
  }
  return `${d.trim()}Z`;
}

// --- Custom body shape -------------------------------------------------

export const CUSTOM_SHAPE_POINT_COUNT = 10;
export const CUSTOM_SHAPE_MIN_RADIUS = 70;
export const CUSTOM_SHAPE_MAX_RADIUS = 115;
export const CUSTOM_SHAPE_DEFAULT_RADIUS = 88;
export const CUSTOM_SHAPE_CENTER = 128;

export const DEFAULT_CUSTOM_SHAPE_POINTS = Array.from(
  { length: CUSTOM_SHAPE_POINT_COUNT },
  () => CUSTOM_SHAPE_DEFAULT_RADIUS,
);

export function customShapeAngle(pointIndex) {
  return (pointIndex / CUSTOM_SHAPE_POINT_COUNT) * Math.PI * 2 - Math.PI / 2;
}

export function customShapePointCoordinates(radii) {
  return radialPointCoordinates(
    radii,
    CUSTOM_SHAPE_POINT_COUNT,
    CUSTOM_SHAPE_CENTER,
    CUSTOM_SHAPE_CENTER,
    false,
  );
}

export function customShapeToPath(radii) {
  return radialPointsToPath(customShapePointCoordinates(radii));
}

// --- Custom eye globe shape ---------------------------------------------
// Same radial-blob technique as the body shape, but sized for a single eye
// and centred wherever that eye sits (each eye can even mirror the other).

export const CUSTOM_EYE_POINT_COUNT = 8;
export const CUSTOM_EYE_MIN_RADIUS = 8;
export const CUSTOM_EYE_MAX_RADIUS = 30;
export const CUSTOM_EYE_DEFAULT_RADIUS = 20;

export const DEFAULT_CUSTOM_EYE_POINTS = Array.from(
  { length: CUSTOM_EYE_POINT_COUNT },
  () => CUSTOM_EYE_DEFAULT_RADIUS,
);

export function customEyeAngle(pointIndex) {
  return (pointIndex / CUSTOM_EYE_POINT_COUNT) * Math.PI * 2 - Math.PI / 2;
}

export function customEyePointCoordinates(
  radii,
  centerX,
  centerY,
  mirrorX = false,
) {
  return radialPointCoordinates(
    radii,
    CUSTOM_EYE_POINT_COUNT,
    centerX,
    centerY,
    mirrorX,
  );
}

export function customEyeToPath(radii, centerX, centerY, mirrorX = false) {
  return radialPointsToPath(
    customEyePointCoordinates(radii, centerX, centerY, mirrorX),
  );
}

// Approximate half-width/half-height from the shape's own points (index
// 0/4 sit north/south, 2/6 sit east/west for the 8-point layout), used to
// keep the iris safely inside whatever custom globe the user draws.
export function customEyeExtent(radii) {
  return {
    width: (radii[2] + radii[6]) / 2,
    height: (radii[0] + radii[4]) / 2,
  };
}
