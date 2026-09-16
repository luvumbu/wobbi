import { useRef, useState } from 'react';
import { Pencil, Plus, X } from 'lucide-react';
import {
  DEFAULT_CUSTOM_EYE_POINTS,
  customEyePointCoordinates,
  customEyeToPath,
  insertPointOnSegment,
  removePointAt,
  scalePoints,
} from '../../packages/core/custom-shape.js';

const EDITOR_CENTER = 34;
const EDITOR_SIZE = 68;
const MIN_POINTS = 3;

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
  const scaleBaseRef = useRef(null);
  const [scaleValue, setScaleValue] = useState(100);
  const [activeSide, setActiveSide] = useState('left');
  const [shapeName, setShapeName] = useState('');
  const [renamingId, setRenamingId] = useState(null);
  const [renameDraft, setRenameDraft] = useState('');
  const editingSide = customEyeShape.symmetric ? 'left' : activeSide;
  const editingPoints = customEyeShape[editingSide].points;

  function localPointFromClient(clientX, clientY) {
    const svg = svgRefs.current[editingSide];
    const pointerPoint = svg.createSVGPoint();
    pointerPoint.x = clientX;
    pointerPoint.y = clientY;
    const userSpacePoint = pointerPoint.matrixTransform(
      svg.getScreenCTM().inverse(),
    );
    return {
      x: userSpacePoint.x - EDITOR_CENTER,
      y: userSpacePoint.y - EDITOR_CENTER,
    };
  }

  function updatePoint(pointIndex, point, notify) {
    const nextPoints = editingPoints.map((value, index) =>
      index === pointIndex ? point : value,
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
        const step = event.shiftKey ? 4 : 1.5;
        const current = editingPoints[pointIndex];
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
    patch({
      customEyeShape: {
        ...customEyeShape,
        [editingSide]: { points: insertPointOnSegment(editingPoints, clicked) },
      },
    });
  }

  function handleRemovePoint(pointIndex) {
    if (editingPoints.length <= MIN_POINTS) return;
    patch({
      customEyeShape: {
        ...customEyeShape,
        [editingSide]: { points: removePointAt(editingPoints, pointIndex) },
      },
    });
  }

  function handleScaleInput(event) {
    const value = Number(event.target.value);
    setScaleValue(value);
    scaleBaseRef.current ??= editingPoints;
    preview({
      customEyeShape: {
        ...customEyeShape,
        [editingSide]: {
          points: scalePoints(scaleBaseRef.current, value / 100),
        },
      },
    });
  }
  function handleScaleCommit() {
    if (!scaleBaseRef.current) return;
    scaleBaseRef.current = null;
    setScaleValue(100);
    commitPreview();
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
              aria-label={`Point ${index + 1} de la forme d’œil — glisser ou flèches pour déplacer`}
              cx={point.x}
              cy={point.y}
              r="4"
              {...dragHandlers(index)}
            />
            {editingPoints.length > MIN_POINTS && (
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
          aria-label="Échelle uniforme de la forme d’œil"
          onInput={handleScaleInput}
          onPointerUp={handleScaleCommit}
          onKeyUp={handleScaleCommit}
          onChange={() => {}}
        />
      </label>
      <p className="shape-editor-hint">
        {customEyeShape.symmetric
          ? 'Les deux yeux partagent cette forme, en miroir.'
          : 'Chaque œil a sa propre forme.'}{' '}
        Double-cliquez sur le contour pour ajouter un point, survolez un point
        pour le supprimer.
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
