import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customHairShapes.v1';

export function useCustomHairLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'hairshape');

  function saveShape(name, points) {
    return saveEntry(name, { points });
  }

  return { savedShapes, saveShape, deleteShape, renameShape };
}
