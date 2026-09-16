import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  DEFAULT_CUSTOM_IRIS_POINTS,
  customIrisPointCoordinates,
  customIrisToPath,
  insertPointOnSegment,
  removePointAt,
  scalePoints,
} from '../../packages/core/custom-shape.js';

const EDITOR_CENTER = 40;
const EDITOR_SIZE = 80;
// Pixel radius the editor canvas uses to represent a ratio of 1.0 while
// dragging; the actual render always rescales points to whatever globe
// hosts the iris, so this is purely an editing convenience.
const EDITOR_SCALE = 34;
const MIN_POINTS = 3;

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
  const scaleBaseRef = useRef(null);
  const [scaleValue, setScaleValue] = useState(100);
  const [shapeName, setShapeName] = useState('');
  const [renamingId, setRenamingId] = useState(null);
  const [renameDraft, setRenameDraft] = useState('');
  const points = customIris.points;

  function localPointFromClient(clientX, clientY) {
    const svg = svgRef.current;
    const pointerPoint = svg.createSVGPoint();
    pointerPoint.x = clientX;
    pointerPoint.y = clientY;
    const userSpacePoint = pointerPoint.matrixTransform(
      svg.getScreenCTM().inverse(),
    );
    return {
      x: (userSpacePoint.x - EDITOR_CENTER) / EDITOR_SCALE,
      y: (userSpacePoint.y - EDITOR_CENTER) / EDITOR_SCALE,
    };
  }

  function updatePoint(pointIndex, point, notify) {
    const nextPoints = points.map((value, index) =>
      index === pointIndex ? point : value,
    );
    notify({ customIris: { points: nextPoints } });
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
        const step = event.shiftKey ? 0.12 : 0.04;
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
    patch({ customIris: { points: insertPointOnSegment(points, clicked) } });
  }

  function handleRemovePoint(pointIndex) {
    if (points.length <= MIN_POINTS) return;
    patch({ customIris: { points: removePointAt(points, pointIndex) } });
  }

  function handleScaleInput(event) {
    const value = Number(event.target.value);
    setScaleValue(value);
    scaleBaseRef.current ??= points;
    preview({
      customIris: { points: scalePoints(scaleBaseRef.current, value / 100) },
    });
  }
  function handleScaleCommit() {
    if (!scaleBaseRef.current) return;
    scaleBaseRef.current = null;
    setScaleValue(100);
    commitPreview();
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
        <path
          d={pathData}
          className="shape-editor-outline-hit"
          onDoubleClick={handleAddPoint}
        />
        <path d={pathData} className="shape-editor-outline" />
        {coordinates.map((point, index) => (
          <g key={index} className="shape-editor-point">
            <circle
              className="shape-editor-handle eye-shape-editor-handle"
              tabIndex={0}
              role="button"
              aria-roledescription="point déplaçable"
              aria-label={`Point ${index + 1} de la forme d’iris — glisser ou flèches pour déplacer`}
              cx={point.x}
              cy={point.y}
              r="4"
              {...dragHandlers(index)}
            />
            {points.length > MIN_POINTS && (
              <g
                className="shape-editor-point-remove shape-editor-point-remove-small"
                transform={`translate(${point.x + 6} ${point.y - 6})`}
                onClick={() => handleRemovePoint(index)}
              >
                <circle
                  className="shape-editor-point-remove-hit"
                  r="4.5"
                  role="button"
                  aria-label={`Supprimer le point ${index + 1}`}
                />
                <path
                  className="shape-editor-point-remove-mark"
                  d="M-2 -2 L2 2 M2 -2 L-2 2"
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
          aria-label="Échelle uniforme de la forme d’iris"
          onInput={handleScaleInput}
          onPointerUp={handleScaleCommit}
          onKeyUp={handleScaleCommit}
          onChange={() => {}}
        />
      </label>
      <p className="shape-editor-hint">
        Faites glisser les points librement, sans limite. Double-cliquez sur le
        contour pour ajouter un point, survolez un point pour le supprimer. La
        forme se redimensionne toujours avec le globe de l’œil choisi.
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
