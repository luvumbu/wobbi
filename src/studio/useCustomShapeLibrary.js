import { migrateLegacyPointsArray } from '../../packages/core/custom-shape.js';
import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customShapes.v1';

export function useCustomShapeLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'shape');

  function saveShape(name, points) {
    return saveEntry(name, { points });
  }

  return {
    savedShapes: savedShapes.map((entry) => ({
      ...entry,
      points: migrateLegacyPointsArray(entry.points),
    })),
    saveShape,
    deleteShape,
    renameShape,
  };
}
