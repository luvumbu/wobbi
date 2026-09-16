import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customMouthShapes.v1';

export function useCustomMouthLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'mouthshape');

  function saveShape(name, points) {
    return saveEntry(name, { points });
  }

  return { savedShapes, saveShape, deleteShape, renameShape };
}
