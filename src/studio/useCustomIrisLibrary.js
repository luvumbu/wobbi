import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customIrisShapes.v1';

export function useCustomIrisLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'irisshape');

  function saveShape(name, customIris) {
    return saveEntry(name, { customIris });
  }

  return { savedShapes, saveShape, deleteShape, renameShape };
}
