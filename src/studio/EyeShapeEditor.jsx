import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  CUSTOM_EYE_MAX_RADIUS,
  CUSTOM_EYE_MIN_RADIUS,
  DEFAULT_CUSTOM_EYE_POINTS,
  customEyeAngle,
  customEyePointCoordinates,
  customEyeToPath,
} from '../../packages/core/custom-shape.js';

const EDITOR_CENTER = 34;
const EDITOR_SIZE = 68;

const PAIR_LEFT_CENTER_X = 32;
const PAIR_RIGHT_CENTER_X = 68;
const PAIR_CENTER_Y = 25;

function defaultCustomEyeShape() {
  return {
    symmetric: true,
    left: { points: [...DEFAULT_CUSTOM_EYE_POINTS] },
    right: { points: [...DEFAULT_CUSTOM_EYE_POINTS] },
  };
}

function eyePairPathData(customEyeShape) {
  const leftPath = customEyeToPath(
    customEyeShape.left.points,
    PAIR_LEFT_CENTER_X,
    PAIR_CENTER_Y,
  );
  const rightPoints = customEyeShape.symmetric
    ? customEyeShape.left.points
    : customEyeShape.right.points;
  const rightPath = customEyeToPath(
    rightPoints,
    PAIR_RIGHT_CENTER_X,
    PAIR_CENTER_Y,
    customEyeShape.symmetric,
  );
  return `${leftPath} ${rightPath}`;
}

export function EyeShapeEditor({
  customEyeShape,
  patch,
  preview,
  commitPreview,
  savedShapes,
  saveShape,
  deleteShape,
  renameShape,
}) {
  const svgRefs = useRef({ left: null, right: null });
  const [activeSide, setActiveSide] = useState('left');
  const [shapeName, setShapeName] = useState('');
  const [renamingId, setRenamingId] = useState(null);
  const [renameDraft, setRenameDraft] = useState('');
  const editingSide = customEyeShape.symmetric ? 'left' : activeSide;
  const editingPoints = customEyeShape[editingSide].points;

  function radiusFromPointerEvent(event, pointIndex) {
    const svg = svgRefs.current[editingSide];
    const pointerPoint = svg.createSVGPoint();
    pointerPoint.x = event.clientX;
    pointerPoint.y = event.clientY;
    const userSpacePoint = pointerPoint.matrixTransform(
      svg.getScreenCTM().inverse(),
    );
    const angle = customEyeAngle(pointIndex);
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    const radius =
      (userSpacePoint.x - EDITOR_CENTER) * directionX +
      (userSpacePoint.y - EDITOR_CENTER) * directionY;
    return Math.min(
      CUSTOM_EYE_MAX_RADIUS,
      Math.max(CUSTOM_EYE_MIN_RADIUS, radius),
    );
  }

  function updatePoint(pointIndex, radius, notify) {
    const nextPoints = editingPoints.map((value, index) =>
      index === pointIndex ? radius : value,
    );
    notify({
      customEyeShape: {
        ...customEyeShape,
        [editingSide]: { points: nextPoints },
      },
    });
  }

  function dragHandlers(pointIndex) {
    return {
      onPointerDown: (event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePoint(
          pointIndex,
          radiusFromPointerEvent(event, pointIndex),
          preview,
        );
      },
      onPointerMove: (event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        updatePoint(
          pointIndex,
          radiusFromPointerEvent(event, pointIndex),
          preview,
        );
      },
      onPointerUp: (event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        event.currentTarget.releasePointerCapture(event.pointerId);
        commitPreview();
      },
      onKeyDown: (event) => {
        const step = event.shiftKey ? 4 : 1.5;
        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.min(CUSTOM_EYE_MAX_RADIUS, editingPoints[pointIndex] + step),
            patch,
          );
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.max(CUSTOM_EYE_MIN_RADIUS, editingPoints[pointIndex] - step),
            patch,
          );
        }
      },
    };
  }

  function applySavedShape(savedShape) {
    patch({
      customEyeShape: {
        symmetric: savedShape.customEyeShape.symmetric,
        left: { points: [...savedShape.customEyeShape.left.points] },
        right: { points: [...savedShape.customEyeShape.right.points] },
      },
    });
    setShapeName('');
  }

  function startNewShape() {
    patch({ customEyeShape: defaultCustomEyeShape() });
    setShapeName('');
  }

  function saveCurrentShape() {
    saveShape(shapeName, {
      symmetric: customEyeShape.symmetric,
      left: { points: [...customEyeShape.left.points] },
      right: { points: [...customEyeShape.right.points] },
    });
    setShapeName('');
  }

  function startRename(savedShape) {
    setRenamingId(savedShape.id);
    setRenameDraft(savedShape.name);
  }

  function confirmRename() {
    if (renamingId) renameShape(renamingId, renameDraft);
    setRenamingId(null);
    setRenameDraft('');
  }

  const coordinates = customEyePointCoordinates(
    editingPoints,
    EDITOR_CENTER,
    EDITOR_CENTER,
  );
  const pathData = customEyeToPath(editingPoints, EDITOR_CENTER, EDITOR_CENTER);

  return (
    <div className="eye-shape-editor">
      <div className="depth-control">
        <h3>Symétrie</h3>
        <div>
          <button
            type="button"
            aria-pressed={customEyeShape.symmetric}
            onClick={() =>
              patch({
                customEyeShape: { ...customEyeShape, symmetric: true },
              })
            }
          >
            Symétrique
          </button>
          <button
            type="button"
            aria-pressed={!customEyeShape.symmetric}
            onClick={() =>
              patch({
                customEyeShape: { ...customEyeShape, symmetric: false },
              })
            }
          >
            Asymétrique
          </button>
        </div>
      </div>

      {!customEyeShape.symmetric && (
        <div
          className="reaction-select"
          role="group"
          aria-label="Œil à modifier"
        >
          <button
            type="button"
            aria-pressed={activeSide === 'left'}
            onClick={() => setActiveSide('left')}
          >
            Œil gauche
          </button>
          <button
            type="button"
            aria-pressed={activeSide === 'right'}
            onClick={() => setActiveSide('right')}
          >
            Œil droit
          </button>
        </div>
      )}

      <svg
        ref={(element) => {
          svgRefs.current[editingSide] = element;
        }}
        className="shape-editor-canvas eye-shape-editor-canvas"
        viewBox={`0 0 ${EDITOR_SIZE} ${EDITOR_SIZE}`}
        role="group"
        aria-label={
          customEyeShape.symmetric
            ? 'Éditeur de forme d’œil (symétrique)'
            : `Éditeur de forme de l’œil ${activeSide === 'left' ? 'gauche' : 'droit'}`
        }
      >
        <path d={pathData} className="shape-editor-outline" />
        {coordinates.map((point, index) => (
          <circle
            key={index}
            className="shape-editor-handle eye-shape-editor-handle"
            tabIndex={0}
            role="slider"
            aria-label={`Point ${index + 1} de la forme d’œil`}
            aria-valuemin={CUSTOM_EYE_MIN_RADIUS}
            aria-valuemax={CUSTOM_EYE_MAX_RADIUS}
            aria-valuenow={Math.round(editingPoints[index])}
            cx={point.x}
            cy={point.y}
            r="4"
            {...dragHandlers(index)}
          />
        ))}
      </svg>
      <p className="shape-editor-hint">
        {customEyeShape.symmetric
          ? 'Les deux yeux partagent cette forme, en miroir.'
          : 'Chaque œil a sa propre forme.'}
      </p>

      <div className="shape-editor-save">
        <label className="shape-editor-save-field">
          <span>Nom de la forme</span>
          <input
            type="text"
            maxLength={40}
            placeholder="Ma forme d’yeux"
            value={shapeName}
            onChange={(event) => setShapeName(event.target.value)}
          />
        </label>
        <button
          type="button"
          className="primary"
          onClick={saveCurrentShape}
          disabled={!shapeName.trim()}
        >
          Enregistrer cette forme
        </button>
      </div>

      <div className="shape-editor-library">
        <h3>Mes formes d’yeux</h3>
        <div className="shape-editor-library-grid">
          <button
            type="button"
            className="shape-editor-library-thumb shape-editor-library-new"
            onClick={startNewShape}
          >
            <Plus size={22} aria-hidden="true" />
            <span>Nouvelle forme</span>
          </button>
          {savedShapes.map((savedShape) =>
            renamingId === savedShape.id ? (
              <div className="shape-editor-library-item" key={savedShape.id}>
                <div className="shape-editor-library-thumb shape-editor-library-renaming">
                  <svg viewBox="0 0 100 50" aria-hidden="true">
                    <path
                      d={eyePairPathData(savedShape.customEyeShape)}
                      className="shape-editor-outline"
                    />
                  </svg>
                  <input
                    type="text"
                    autoFocus
                    maxLength={40}
                    aria-label={`Nouveau nom pour ${savedShape.name}`}
                    value={renameDraft}
                    onChange={(event) => setRenameDraft(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        confirmRename();
                      } else if (event.key === 'Escape') {
                        event.preventDefault();
                        setRenamingId(null);
                      }
                    }}
                    onBlur={confirmRename}
                  />
                </div>
              </div>
            ) : (
              <div className="shape-editor-library-item" key={savedShape.id}>
                <button
                  type="button"
                  className="shape-editor-library-thumb"
                  aria-label={`Utiliser la forme d’yeux ${savedShape.name}`}
                  onClick={() => applySavedShape(savedShape)}
                >
                  <svg viewBox="0 0 100 50" aria-hidden="true">
                    <path
                      d={eyePairPathData(savedShape.customEyeShape)}
                      className="shape-editor-outline"
                    />
                  </svg>
                  <span>{savedShape.name}</span>
                </button>
                <button
                  type="button"
                  className="shape-editor-library-rename"
                  aria-label={`Renommer la forme d’yeux ${savedShape.name}`}
                  onClick={() => startRename(savedShape)}
                >
                  <Pencil size={11} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="shape-editor-library-delete"
                  aria-label={`Supprimer la forme d’yeux ${savedShape.name}`}
                  onClick={() => deleteShape(savedShape.id)}
                >
                  <X size={13} aria-hidden="true" />
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
