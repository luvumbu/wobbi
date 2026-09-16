// Closed Catmull-Rom spline converted to cubic beziers (standard 1/6 tension),
// so the outline stays smooth and blobby instead of a jagged polygon. Works
// for any ordered loop of points — the array order IS the loop traversal
// order (consecutive entries are consecutive perimeter neighbours).
function pointsToPath(points) {
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

// The pre-freeform editors stored one radius per point, at a fixed angle
// implied by its index. Used only to compute pixel-identical defaults and
// to migrate shapes saved in that old format into free {x,y} points.
function legacyPolarOffset(index, count, radius) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
}

// Detects the old bare-number-per-point format and converts it to today's
// {x,y} offsets, reproducing the exact silhouette it used to render (same
// angle formula the renderer used to project it). Already-migrated (or
// freshly drawn) arrays are returned unchanged.
export function migrateLegacyPointsArray(points) {
  if (!Array.isArray(points) || points.length === 0) return points;
  if (typeof points[0] !== 'number') return points;
  return points.map((radius, index) =>
    legacyPolarOffset(index, points.length, radius),
  );
}

// Scales every point away from/toward the shape's own local origin (0,0) —
// used by each editor's uniform-scale slider.
export function scalePoints(points, factor) {
  return points.map((p) => ({ x: p.x * factor, y: p.y * factor }));
}

// Nearest point-to-segment distance, used to find where to splice a new
// point in when the user double-clicks the outline. Approximate against the
// closed polygon rather than the true Catmull-Rom curve — cheap, and close
// enough since the curve hugs the polygon closely for typical blob shapes.
function distanceToSegment(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared
    ? Math.max(
        0,
        Math.min(
          1,
          ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSquared,
        ),
      )
    : 0;
  const closestX = a.x + t * dx;
  const closestY = a.y + t * dy;
  return Math.hypot(point.x - closestX, point.y - closestY);
}

// Inserts `point` into `points` at the position between its two nearest
// perimeter neighbours, keeping the loop's traversal order intact.
export function insertPointOnSegment(points, point) {
  const count = points.length;
  let bestIndex = 0;
  let bestDistance = Infinity;
  for (let index = 0; index < count; index += 1) {
    const distance = distanceToSegment(
      point,
      points[index],
      points[(index + 1) % count],
    );
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  }
  const next = [...points];
  next.splice(bestIndex + 1, 0, point);
  return next;
}

// Removes the point at `index`, refusing to go below a closed loop's
// minimum of 3 points.
export function removePointAt(points, index) {
  if (points.length <= 3) return points;
  return points.filter((_, i) => i !== index);
}

// --- Custom body shape -------------------------------------------------

export const CUSTOM_SHAPE_POINT_COUNT = 10;
export const CUSTOM_SHAPE_CENTER = 128;

export const DEFAULT_CUSTOM_SHAPE_POINTS = Array.from(
  { length: CUSTOM_SHAPE_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_SHAPE_POINT_COUNT, 88),
);

export function customShapePointCoordinates(points) {
  return points.map((p) => ({
    x: CUSTOM_SHAPE_CENTER + p.x,
    y: CUSTOM_SHAPE_CENTER + p.y,
  }));
}

export function customShapeToPath(points) {
  return pointsToPath(customShapePointCoordinates(points));
}

// --- Custom eye globe shape ---------------------------------------------
// Same free-point technique as the body shape, but sized for a single eye
// and centred wherever that eye sits (each eye can even mirror the other).
// Points are stored as offsets from the eye's own local centre, so the same
// data plugs into either eye slot unchanged.

export const CUSTOM_EYE_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_EYE_POINTS = Array.from(
  { length: CUSTOM_EYE_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_EYE_POINT_COUNT, 20),
);

export function customEyePointCoordinates(
  points,
  centerX,
  centerY,
  mirrorX = false,
) {
  return points.map((p) => ({
    x: centerX + p.x * (mirrorX ? -1 : 1),
    y: centerY + p.y,
  }));
}

export function customEyeToPath(points, centerX, centerY, mirrorX = false) {
  return pointsToPath(
    customEyePointCoordinates(points, centerX, centerY, mirrorX),
  );
}

// Half-width/half-height bounding box of the shape's own points (centre-
// relative), used to keep the iris safely inside whatever custom globe the
// user draws. Points no longer sit at guaranteed compass positions once
// they can be freely dragged/added/removed, so this is a bounding-box
// approximation rather than reading fixed N/E/S/W indices.
export function customEyeExtent(points) {
  return {
    width: Math.max(...points.map((p) => Math.abs(p.x))),
    height: Math.max(...points.map((p) => Math.abs(p.y))),
  };
}

// --- Custom iris shape ---------------------------------------------------
// The iris/pupil mark sits inside a globe whose own size varies wildly (a
// tiny "dots" globe vs. a large "classic" one), so its points are stored as
// ratios of the globe's own half-extent (x and y each independently) rather
// than absolute pixels. At render time they are scaled by whatever globe
// currently hosts them.

export const CUSTOM_IRIS_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_IRIS_POINTS = Array.from(
  { length: CUSTOM_IRIS_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_IRIS_POINT_COUNT, 0.62),
);

export function customIrisPointCoordinates(points, centerX, centerY, scale) {
  return points.map((p) => ({
    x: centerX + p.x * scale,
    y: centerY + p.y * scale,
  }));
}

export function customIrisToPath(points, centerX, centerY, scale) {
  return pointsToPath(
    customIrisPointCoordinates(points, centerX, centerY, scale),
  );
}

// --- Custom hair shape ----------------------------------------------------
// Same free-point technique as the body shape, but with a much wider usual
// range and, unlike the preset hairstyles, drawn on top of the body so the
// user has total freedom over height and width with no risk of it being
// clipped by the body silhouette.

export const CUSTOM_HAIR_POINT_COUNT = 10;

export const DEFAULT_CUSTOM_HAIR_POINTS = Array.from(
  { length: CUSTOM_HAIR_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_HAIR_POINT_COUNT, 40),
);

export function customHairPointCoordinates(points, centerX, centerY) {
  return points.map((p) => ({
    x: centerX + p.x,
    y: centerY + p.y,
  }));
}

export function customHairToPath(points, centerX, centerY) {
  return pointsToPath(customHairPointCoordinates(points, centerX, centerY));
}

// --- Custom nose shape -----------------------------------------------------
// A single free-point blob centred on the nose's own anchor point, same
// technique as the body shape.

export const CUSTOM_NOSE_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_NOSE_POINTS = Array.from(
  { length: CUSTOM_NOSE_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_NOSE_POINT_COUNT, 8),
);

export function customNosePointCoordinates(points, centerX, centerY) {
  return points.map((p) => ({
    x: centerX + p.x,
    y: centerY + p.y,
  }));
}

export function customNoseToPath(points, centerX, centerY) {
  return pointsToPath(customNosePointCoordinates(points, centerX, centerY));
}

// --- Custom brow shape ------------------------------------------------------
// Same free-point technique as the eye globe: a small blob per side, stored
// relative to its own local centre so it can be re-centred (and mirrored)
// over either eyebrow at render time.

export const CUSTOM_BROW_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_BROW_POINTS = Array.from(
  { length: CUSTOM_BROW_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_BROW_POINT_COUNT, 14),
);

export function customBrowPointCoordinates(
  points,
  centerX,
  centerY,
  mirrorX = false,
) {
  return points.map((p) => ({
    x: centerX + p.x * (mirrorX ? -1 : 1),
    y: centerY + p.y,
  }));
}

export function customBrowToPath(points, centerX, centerY, mirrorX = false) {
  return pointsToPath(
    customBrowPointCoordinates(points, centerX, centerY, mirrorX),
  );
}

// --- Custom mouth shape ------------------------------------------------------
// A single free-point blob centred on the mouth's own anchor point, same
// technique as the body shape.

export const CUSTOM_MOUTH_POINT_COUNT = 8;

export const DEFAULT_CUSTOM_MOUTH_POINTS = Array.from(
  { length: CUSTOM_MOUTH_POINT_COUNT },
  (_, index) => legacyPolarOffset(index, CUSTOM_MOUTH_POINT_COUNT, 10),
);

export function customMouthPointCoordinates(points, centerX, centerY) {
  return points.map((p) => ({
    x: centerX + p.x,
    y: centerY + p.y,
  }));
}

export function customMouthToPath(points, centerX, centerY) {
  return pointsToPath(customMouthPointCoordinates(points, centerX, centerY));
}
