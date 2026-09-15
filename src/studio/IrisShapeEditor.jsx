import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  CUSTOM_IRIS_MAX_RATIO,
  CUSTOM_IRIS_MIN_RATIO,
  DEFAULT_CUSTOM_IRIS_POINTS,
  customIrisAngle,
  customIrisPointCoordinates,
  customIrisToPath,
} from '../../packages/core/custom-shape.js';

const EDITOR_CENTER = 40;
const EDITOR_SIZE = 80;
// Pixel radius the editor canvas uses to represent a ratio of 1.0 while
// dragging; the actual render always rescales points to whatever globe
// hosts the iris, so this is purely an editing convenience.
const EDITOR_SCALE = 34;

function defaultCustomIris() {
  return { points: [...DEFAULT_CUSTOM_IRIS_POINTS] };
}

export function IrisShapeEditor({
  customIris,
  patch,
  preview,
  commitPreview,
  savedShapes,
  saveShape,
  deleteShape,
  renameShape,
}) {
  const svgRef = useRef(null);
  const [shapeName, setShapeName] = useState('');
  const [renamingId, setRenamingId] = useState(null);
  const [renameDraft, setRenameDraft] = useState('');
  const points = customIris.points;

  function ratioFromPointerEvent(event, pointIndex) {
    const svg = svgRef.current;
    const pointerPoint = svg.createSVGPoint();
    pointerPoint.x = event.clientX;
    pointerPoint.y = event.clientY;
    const userSpacePoint = pointerPoint.matrixTransform(
      svg.getScreenCTM().inverse(),
    );
    const angle = customIrisAngle(pointIndex);
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    const radius =
      (userSpacePoint.x - EDITOR_CENTER) * directionX +
      (userSpacePoint.y - EDITOR_CENTER) * directionY;
    const ratio = radius / EDITOR_SCALE;
    return Math.min(
      CUSTOM_IRIS_MAX_RATIO,
      Math.max(CUSTOM_IRIS_MIN_RATIO, ratio),
    );
  }

  function updatePoint(pointIndex, ratio, notify) {
    const nextPoints = points.map((value, index) =>
      index === pointIndex ? ratio : value,
    );
    notify({ customIris: { points: nextPoints } });
  }

  function dragHandlers(pointIndex) {
    return {
      onPointerDown: (event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePoint(
          pointIndex,
          ratioFromPointerEvent(event, pointIndex),
          preview,
        );
      },
      onPointerMove: (event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        updatePoint(
          pointIndex,
          ratioFromPointerEvent(event, pointIndex),
          preview,
        );
      },
      onPointerUp: (event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        event.currentTarget.releasePointerCapture(event.pointerId);
        commitPreview();
      },
      onKeyDown: (event) => {
        const step = event.shiftKey ? 0.12 : 0.04;
        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.min(CUSTOM_IRIS_MAX_RATIO, points[pointIndex] + step),
            patch,
          );
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.max(CUSTOM_IRIS_MIN_RATIO, points[pointIndex] - step),
            patch,
          );
        }
      },
    };
  }

  function applySavedShape(savedShape) {
    patch({ customIris: { points: [...savedShape.customIris.points] } });
    setShapeName('');
  }

  function startNewShape() {
    patch({ customIris: defaultCustomIris() });
    setShapeName('');
  }

  function saveCurrentShape() {
    saveShape(shapeName, { points: [...points] });
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

  const coordinates = customIrisPointCoordinates(
    points,
    EDITOR_CENTER,
    EDITOR_CENTER,
    EDITOR_SCALE,
  );
  const pathData = customIrisToPath(
    points,
    EDITOR_CENTER,
    EDITOR_CENTER,
    EDITOR_SCALE,
  );

  return (
    <div className="eye-shape-editor">
      <svg
        ref={svgRef}
        className="shape-editor-canvas eye-shape-editor-canvas"
        viewBox={`0 0 ${EDITOR_SIZE} ${EDITOR_SIZE}`}
        role="group"
        aria-label="Éditeur de forme d’iris"
      >
        <path d={pathData} className="shape-editor-outline" />
        {coordinates.map((point, index) => (
          <circle
            key={index}
            className="shape-editor-handle eye-shape-editor-handle"
            tabIndex={0}
            role="slider"
            aria-label={`Point ${index + 1} de la forme d’iris`}
            aria-valuemin={CUSTOM_IRIS_MIN_RATIO}
            aria-valuemax={CUSTOM_IRIS_MAX_RATIO}
            aria-valuenow={Number(points[index].toFixed(2))}
            cx={point.x}
            cy={point.y}
            r="4"
            {...dragHandlers(index)}
          />
        ))}
      </svg>
      <p className="shape-editor-hint">
        Faites glisser les points. La forme s’adapte toujours à la taille du
        globe de l’œil choisi, elle ne peut pas en sortir.
      </p>

      <div className="shape-editor-save">
        <label className="shape-editor-save-field">
          <span>Nom de la forme</span>
          <input
            type="text"
            maxLength={40}
            placeholder="Mon iris"
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
        <h3>Mes formes d’iris</h3>
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
                  <svg viewBox="0 0 80 80" aria-hidden="true">
                    <path
                      d={customIrisToPath(
                        savedShape.customIris.points,
                        40,
                        40,
                        34,
                      )}
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
                  aria-label={`Utiliser la forme d’iris ${savedShape.name}`}
                  onClick={() => applySavedShape(savedShape)}
                >
                  <svg viewBox="0 0 80 80" aria-hidden="true">
                    <path
                      d={customIrisToPath(
                        savedShape.customIris.points,
                        40,
                        40,
                        34,
                      )}
                      className="shape-editor-outline"
                    />
                  </svg>
                  <span>{savedShape.name}</span>
                </button>
                <button
                  type="button"
                  className="shape-editor-library-rename"
                  aria-label={`Renommer la forme d’iris ${savedShape.name}`}
                  onClick={() => startRename(savedShape)}
                >
                  <Pencil size={11} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="shape-editor-library-delete"
                  aria-label={`Supprimer la forme d’iris ${savedShape.name}`}
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
