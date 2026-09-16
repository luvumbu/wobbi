import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  CUSTOM_SHAPE_CENTER,
  DEFAULT_CUSTOM_SHAPE_POINTS,
  customShapePointCoordinates,
  customShapeToPath,
  insertPointOnSegment,
  removePointAt,
  scalePoints,
} from '../../packages/core/custom-shape.js';

const EYE_MARKERS = [
  { x: 102, y: 123 },
  { x: 160, y: 123 },
];
const MIN_POINTS = 3;

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
  const scaleBaseRef = useRef(null);
  const [scaleValue, setScaleValue] = useState(100);
  const [shapeName, setShapeName] = useState('');
  const [renamingId, setRenamingId] = useState(null);
  const [renameDraft, setRenameDraft] = useState('');

  function localPointFromClient(clientX, clientY) {
    const svg = svgRef.current;
    const pointerPoint = svg.createSVGPoint();
    pointerPoint.x = clientX;
    pointerPoint.y = clientY;
    const userSpacePoint = pointerPoint.matrixTransform(
      svg.getScreenCTM().inverse(),
    );
    return {
      x: userSpacePoint.x - CUSTOM_SHAPE_CENTER,
      y: userSpacePoint.y - CUSTOM_SHAPE_CENTER,
    };
  }

  function updatePoint(pointIndex, point, notify) {
    const nextPoints = points.map((value, index) =>
      index === pointIndex ? point : value,
    );
    notify({ customShape: { points: nextPoints } });
  }

  function dragHandlers(pointIndex) {
    return {
      onPointerDown: (event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePoint(
          pointIndex,
          localPointFromClient(event.clientX, event.clientY),
          preview,
        );
      },
      onPointerMove: (event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        updatePoint(
          pointIndex,
          localPointFromClient(event.clientX, event.clientY),
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
        const current = points[pointIndex];
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          updatePoint(pointIndex, { x: current.x + step, y: current.y }, patch);
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          updatePoint(pointIndex, { x: current.x - step, y: current.y }, patch);
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          updatePoint(pointIndex, { x: current.x, y: current.y + step }, patch);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          updatePoint(pointIndex, { x: current.x, y: current.y - step }, patch);
        }
      },
    };
  }

  function handleAddPoint(event) {
    const clicked = localPointFromClient(event.clientX, event.clientY);
    patch({ customShape: { points: insertPointOnSegment(points, clicked) } });
  }

  function handleRemovePoint(pointIndex) {
    if (points.length <= MIN_POINTS) return;
    patch({ customShape: { points: removePointAt(points, pointIndex) } });
  }

  // Pointer capture mirrors the point-drag handlers above (proven reliable,
  // unlike React's onChange which — for range inputs — actually fires on
  // every tick rather than only on release). onKeyUp covers keyboard-only
  // adjustment, which never fires a pointer event at all.
  function handleScaleInput(event) {
    const value = Number(event.target.value);
    setScaleValue(value);
    scaleBaseRef.current ??= points;
    preview({
      customShape: { points: scalePoints(scaleBaseRef.current, value / 100) },
    });
  }
  function handleScaleCommit() {
    if (!scaleBaseRef.current) return;
    scaleBaseRef.current = null;
    setScaleValue(100);
    commitPreview();
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
        <path
          d={pathData}
          className="shape-editor-outline-hit"
          onDoubleClick={handleAddPoint}
        />
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
          <g key={index} className="shape-editor-point">
            <circle
              className="shape-editor-handle"
              tabIndex={0}
              role="button"
              aria-roledescription="point déplaçable"
              aria-label={`Point ${index + 1} de la forme — glisser ou flèches pour déplacer`}
              cx={point.x}
              cy={point.y}
              r="9"
              {...dragHandlers(index)}
            />
            {points.length > MIN_POINTS && (
              <g
                className="shape-editor-point-remove"
                transform={`translate(${point.x + 11} ${point.y - 11})`}
                onClick={() => handleRemovePoint(index)}
              >
                <circle
                  className="shape-editor-point-remove-hit"
                  r="7"
                  role="button"
                  aria-label={`Supprimer le point ${index + 1}`}
                />
                <path
                  className="shape-editor-point-remove-mark"
                  d="M-3 -3 L3 3 M3 -3 L-3 3"
                />
              </g>
            )}
          </g>
        ))}
      </svg>
      <label className="thickness-control shape-editor-scale">
        <span>Échelle</span>
        <output>{scaleValue}%</output>
        <input
          type="range"
          min="50"
          max="200"
          value={scaleValue}
          aria-label="Échelle uniforme de la forme"
          onInput={handleScaleInput}
          onPointerUp={handleScaleCommit}
          onKeyUp={handleScaleCommit}
          onChange={() => {}}
        />
      </label>
      <p className="shape-editor-hint">
        Faites glisser les points librement. Double-cliquez sur le contour pour
        ajouter un point, survolez un point pour le supprimer. Les repères
        blancs marquent les yeux : évitez de trop resserrer la forme à cet
        endroit.
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
