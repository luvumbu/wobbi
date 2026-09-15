import { useState } from 'react';

function readEntries(storageKey) {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function generateEntryId(idPrefix) {
  return `${idPrefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// Shared "named, saved, renameable, deletable" gallery used by both the
// custom body shape library and the custom eye shape library, so a bug fixed
// or improved here benefits both instead of two near-identical copies.
export function useNamedShapeLibrary(storageKey, idPrefix) {
  const [savedShapes, setSavedShapes] = useState(() => readEntries(storageKey));

  function persist(nextSavedShapes) {
    setSavedShapes(nextSavedShapes);
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextSavedShapes));
    } catch {
      // Local storage may be unavailable; the library just stays in memory
      // for the rest of this session.
    }
  }

  function saveShape(name, payload) {
    const trimmedName = name.trim().slice(0, 40) || 'Forme sans nom';
    const entry = {
      id: generateEntryId(idPrefix),
      name: trimmedName,
      ...payload,
    };
    persist([...savedShapes, entry]);
    return entry;
  }

  function deleteShape(id) {
    persist(savedShapes.filter((shape) => shape.id !== id));
  }

  function renameShape(id, name) {
    const trimmedName = name.trim().slice(0, 40) || 'Forme sans nom';
    persist(
      savedShapes.map((shape) =>
        shape.id === id ? { ...shape, name: trimmedName } : shape,
      ),
    );
  }

  return { savedShapes, saveShape, deleteShape, renameShape };
}
