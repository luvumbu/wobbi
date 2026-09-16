import { useNamedShapeLibrary } from './useNamedShapeLibrary.js';

const STORAGE_KEY = 'wobbi.customBrowShapes.v1';

export function useCustomBrowsLibrary() {
  const {
    savedShapes,
    saveShape: saveEntry,
    deleteShape,
    renameShape,
  } = useNamedShapeLibrary(STORAGE_KEY, 'browshape');

  function saveShape(name, customBrows) {
    return saveEntry(name, { customBrows });
  }

  return { savedShapes, saveShape, deleteShape, renameShape };
}
