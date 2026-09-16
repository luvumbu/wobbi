import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customNoseShapes.v1';

export function useCustomNoseLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'noseshape');

  function saveShape(name, points) {
    return saveEntry(name, { points });
  }

  return { savedShapes, saveShape, deleteShape, renameShape };
}
