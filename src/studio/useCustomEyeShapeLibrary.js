import { migrateLegacyPointsArray } from '../../packages/core/custom-shape.js';
import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customEyeShapes.v1';

export function useCustomEyeShapeLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'eyeshape');

  function saveShape(name, customEyeShape) {
    return saveEntry(name, { customEyeShape });
  }

  return {
    savedShapes: savedShapes.map((entry) => ({
      ...entry,
      customEyeShape: {
        ...entry.customEyeShape,
        left: {
          points: migrateLegacyPointsArray(entry.customEyeShape.left.points),
        },
        right: {
          points: migrateLegacyPointsArray(entry.customEyeShape.right.points),
        },
      },
    })),
    saveShape,
    deleteShape,
    renameShape,
  };
}
