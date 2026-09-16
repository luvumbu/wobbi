import { describe, it, expect } from 'vitest';
import {
  CUSTOM_SHAPE_CENTER,
  DEFAULT_CUSTOM_SHAPE_POINTS,
  customShapePointCoordinates,
  customShapeToPath,
  insertPointOnSegment,
  migrateLegacyPointsArray,
  removePointAt,
  scalePoints,
} from '../../packages/core/custom-shape.js';

describe('custom-shape free points', () => {
  it('migrates legacy radius-per-index arrays into {x,y} offsets', () => {
    const legacy = [10, 10, 10, 10];
    const migrated = migrateLegacyPointsArray(legacy);
    expect(migrated).toHaveLength(4);
    migrated.forEach((point) => {
      expect(typeof point).toBe('object');
      expect(Math.hypot(point.x, point.y)).toBeCloseTo(10, 5);
    });
    // First point of a 4-point legacy shape sits at angle -90°: straight up.
    expect(migrated[0].x).toBeCloseTo(0, 5);
    expect(migrated[0].y).toBeCloseTo(-10, 5);
  });

  it('leaves already-migrated {x,y} arrays untouched', () => {
    const points = [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ];
    expect(migrateLegacyPointsArray(points)).toBe(points);
  });

  it('produces default shapes matching the old default silhouette', () => {
    expect(DEFAULT_CUSTOM_SHAPE_POINTS).toHaveLength(10);
    const coords = customShapePointCoordinates(DEFAULT_CUSTOM_SHAPE_POINTS);
    coords.forEach((point) => {
      const radius = Math.hypot(
        point.x - CUSTOM_SHAPE_CENTER,
        point.y - CUSTOM_SHAPE_CENTER,
      );
      expect(radius).toBeCloseTo(88, 5);
    });
  });

  it('scales every point from the shape-local origin', () => {
    const points = [
      { x: 10, y: 0 },
      { x: 0, y: 20 },
    ];
    const scaled = scalePoints(points, 1.5);
    expect(scaled).toEqual([
      { x: 15, y: 0 },
      { x: 0, y: 30 },
    ]);
  });

  it('inserts a new point between its two nearest perimeter neighbours', () => {
    const square = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ];
    const withMidpoint = insertPointOnSegment(square, { x: 5, y: 0 });
    expect(withMidpoint).toHaveLength(5);
    expect(withMidpoint[1]).toEqual({ x: 5, y: 0 });
  });

  it('removes a point but refuses to go below the 3-point floor', () => {
    const square = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ];
    expect(removePointAt(square, 0)).toHaveLength(3);
    const triangle = removePointAt(square, 0);
    expect(removePointAt(triangle, 0)).toBe(triangle);
  });

  it('renders a closed loop path for any point count', () => {
    const triangle = [
      { x: 0, y: -10 },
      { x: 10, y: 10 },
      { x: -10, y: 10 },
    ];
    const path = customShapeToPath(triangle);
    expect(path.startsWith('M')).toBe(true);
    expect(path.endsWith('Z')).toBe(true);
  });
});
