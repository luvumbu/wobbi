import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  CUSTOM_SHAPE_CENTER,
  CUSTOM_SHAPE_MAX_RADIUS,
  CUSTOM_SHAPE_MIN_RADIUS,
  DEFAULT_CUSTOM_SHAPE_POINTS,
  customShapeAngle,
  customShapePointCoordinates,
  customShapeToPath,
} from '../../packages/core/custom-shape.js';

const EYE_MARKERS = [
  { x: 102, y: 123 },
  { x: 160, y: 123 },
];

export function ShapeEditor({
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
    const angle = customShapeAngle(pointIndex);
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    const radius =
      (userSpacePoint.x - CUSTOM_SHAPE_CENTER) * directionX +
      (userSpacePoint.y - CUSTOM_SHAPE_CENTER) * directionY;
    return Math.min(
      CUSTOM_SHAPE_MAX_RADIUS,
      Math.max(CUSTOM_SHAPE_MIN_RADIUS, radius),
    );
  }

  function updatePoint(pointIndex, radius, notify) {
    const nextPoints = points.map((value, index) =>
      index === pointIndex ? radius : value,
    );
    notify({ customShape: { points: nextPoints } });
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
        const step = event.shiftKey ? 10 : 4;
        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.min(CUSTOM_SHAPE_MAX_RADIUS, points[pointIndex] + step),
            patch,
          );
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
          event.preventDefault();
          updatePoint(
            pointIndex,
            Math.max(CUSTOM_SHAPE_MIN_RADIUS, points[pointIndex] - step),
            patch,
          );
        }
      },
    };
  }

  function applySavedShape(savedShape) {
    patch({ customShape: { points: [...savedShape.points] } });
    setShapeName('');
  }

  function startNewShape() {
    patch({ customShape: { points: [...DEFAULT_CUSTOM_SHAPE_POINTS] } });
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

  const coordinates = customShapePointCoordinates(points);
  const pathData = customShapeToPath(points);

  return (
    <div className="shape-editor">
      <svg
        ref={svgRef}
        className="shape-editor-canvas"
        viewBox="0 0 256 256"
        role="group"
        aria-label="Éditeur de forme personnalisée"
      >
        <path d={pathData} className="shape-editor-outline" />
        {EYE_MARKERS.map((marker, index) => (
          <circle
            key={index}
            className="shape-editor-eye-marker"
            cx={marker.x}
            cy={marker.y}
            r="4"
          />
        ))}
        {coordinates.map((point, index) => (
          <circle
            key={index}
            className="shape-editor-handle"
            tabIndex={0}
            role="slider"
            aria-label={`Point ${index + 1} de la forme`}
            aria-valuemin={CUSTOM_SHAPE_MIN_RADIUS}
            aria-valuemax={CUSTOM_SHAPE_MAX_RADIUS}
            aria-valuenow={Math.round(points[index])}
            cx={point.x}
            cy={point.y}
            r="9"
            {...dragHandlers(index)}
          />
        ))}
      </svg>
      <p className="shape-editor-hint">
        Faites glisser les points. Les repères blancs marquent les yeux : évitez
        de trop resserrer la forme à cet endroit.
      </p>
      <div className="shape-editor-save">
        <label className="shape-editor-save-field">
          <span>Nom de la forme</span>
          <input
            type="text"
            maxLength={40}
            placeholder="Ma forme"
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
        <h3>Mes formes</h3>
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
                  <svg viewBox="0 0 256 256" aria-hidden="true">
                    <path
                      d={customShapeToPath(savedShape.points)}
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
                  aria-label={`Utiliser la forme ${savedShape.name}`}
                  onClick={() => applySavedShape(savedShape)}
                >
                  <svg viewBox="0 0 256 256" aria-hidden="true">
                    <path
                      d={customShapeToPath(savedShape.points)}
                      className="shape-editor-outline"
                    />
                  </svg>
                  <span>{savedShape.name}</span>
                </button>
                <button
                  type="button"
                  className="shape-editor-library-rename"
                  aria-label={`Renommer la forme ${savedShape.name}`}
                  onClick={() => startRename(savedShape)}
                >
                  <Pencil size={11} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="shape-editor-library-delete"
                  aria-label={`Supprimer la forme ${savedShape.name}`}
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
