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

  return { savedShapes, saveShape, deleteShape, renameShape };
}
