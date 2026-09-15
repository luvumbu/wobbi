import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  CUSTOM_HAIR_MAX_RADIUS,
  CUSTOM_HAIR_MIN_RADIUS,
  DEFAULT_CUSTOM_HAIR_POINTS,
  customHairAngle,
  customHairPointCoordinates,
  customHairToPath,
} from '../../packages/core/custom-shape.js';

const EDITOR_CENTER = 170;
const EDITOR_SIZE = 340;

export function CustomHairEditor({
  points,
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

  function radiusFromPointerEvent(event, pointIndex) {
    const svg = svgRef.current;
    const pointerPoint = svg.createSVGPoint();
    pointerPoint.x = event.clientX;
    pointerPoint.y = event.clientY;
    const userSpacePoint = pointerPoint.matrixTransform(
      svg.getScreenCTM().inverse(),
    );
    const angle = customHairAngle(pointIndex);
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    const radius =
      (userSpacePoint.x - EDITOR_CENTER) * directionX +
      (userSpacePoint.y - EDITOR_CENTER) * directionY;
    return Math.min(
      CUSTOM_HAIR_MAX_RADIUS,
      Math.max(CUSTOM_HAIR_MIN_RADIUS, radius),
    );
  }

  function updatePoint(pointIndex, radius, notify) {
    const nextPoints = points.map((value, index) =>
      index === pointIndex ? radius : value,
    );
    notify({ customHair: { points: nextPoints } });
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
        const step = event.shiftKey ? 12 : 4;
        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.min(CUSTOM_HAIR_MAX_RADIUS, points[pointIndex] + step),
            patch,
          );
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.max(CUSTOM_HAIR_MIN_RADIUS, points[pointIndex] - step),
            patch,
          );
        }
      },
    };
  }

  function applySavedShape(savedShape) {
    patch({ customHair: { points: [...savedShape.points] } });
    setShapeName('');
  }

  function startNewShape() {
    patch({ customHair: { points: [...DEFAULT_CUSTOM_HAIR_POINTS] } });
    setShapeName('');
  }

  function saveCurrentShape() {
    saveShape(shapeName, [...points]);
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

  const coordinates = customHairPointCoordinates(
    points,
    EDITOR_CENTER,
    EDITOR_CENTER,
  );
  const pathData = customHairToPath(points, EDITOR_CENTER, EDITOR_CENTER);

  return (
    <div className="shape-editor">
      <svg
        ref={svgRef}
        className="shape-editor-canvas"
        viewBox={`0 0 ${EDITOR_SIZE} ${EDITOR_SIZE}`}
        role="group"
        aria-label="Éditeur de cheveux personnalisés"
      >
        <path d={pathData} className="shape-editor-outline" />
        {coordinates.map((point, index) => (
          <circle
            key={index}
            className="shape-editor-handle"
            tabIndex={0}
            role="slider"
            aria-label={`Point ${index + 1} des cheveux`}
            aria-valuemin={CUSTOM_HAIR_MIN_RADIUS}
            aria-valuemax={CUSTOM_HAIR_MAX_RADIUS}
            aria-valuenow={Math.round(points[index])}
            cx={point.x}
            cy={point.y}
            r="9"
            {...dragHandlers(index)}
          />
        ))}
      </svg>
      <p className="shape-editor-hint">
        Faites glisser les points. Pas de limite de hauteur ni de largeur : ces
        cheveux sont dessinés par-dessus le corps.
      </p>
      <div className="shape-editor-save">
        <label className="shape-editor-save-field">
          <span>Nom de la forme</span>
          <input
            type="text"
            maxLength={40}
            placeholder="Mes cheveux"
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
        <h3>Mes cheveux</h3>
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
                  <svg
                    viewBox={`0 0 ${EDITOR_SIZE} ${EDITOR_SIZE}`}
                    aria-hidden="true"
                  >
                    <path
                      d={customHairToPath(
                        savedShape.points,
                        EDITOR_CENTER,
                        EDITOR_CENTER,
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
                  aria-label={`Utiliser les cheveux ${savedShape.name}`}
                  onClick={() => applySavedShape(savedShape)}
                >
                  <svg
                    viewBox={`0 0 ${EDITOR_SIZE} ${EDITOR_SIZE}`}
                    aria-hidden="true"
                  >
                    <path
                      d={customHairToPath(
                        savedShape.points,
                        EDITOR_CENTER,
                        EDITOR_CENTER,
                      )}
                      className="shape-editor-outline"
                    />
                  </svg>
                  <span>{savedShape.name}</span>
                </button>
                <button
                  type="button"
                  className="shape-editor-library-rename"
                  aria-label={`Renommer les cheveux ${savedShape.name}`}
                  onClick={() => startRename(savedShape)}
                >
                  <Pencil size={11} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="shape-editor-library-delete"
                  aria-label={`Supprimer les cheveux ${savedShape.name}`}
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
