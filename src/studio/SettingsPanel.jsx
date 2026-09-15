import { useState } from 'react';
import { REACTIONS, EASINGS, MOVEMENTS } from '../../packages/core/config.js';
import { reactionLabels } from './catalog.js';

const easingLabels = {
  'ease-out': 'Doux',
  'ease-in-out': 'Progressif',
  linear: 'Linéaire',
  'cubic-bezier(0.34,1.56,0.64,1)': 'Élastique',
};

const movementLabels = {
  bounce: 'Rebond',
  squash: 'Écrasement',
  tilt: 'Inclinaison',
  shake: 'Tremblement',
  blink: 'Clignement des yeux',
  'eye-movement': 'Mouvement des yeux',
  mouth: 'Bouche',
};

export function SettingsPanel({ config, patch }) {
  const [activeReactionState, setActiveReactionState] = useState('idle');
  const activeReactionMotion = config.reactions[activeReactionState];

  function patchAccessibility(accessibilityChanges) {
    patch({
      accessibility: { ...config.accessibility, ...accessibilityChanges },
    });
  }

  function patchActiveReactionMotion(motionChanges) {
    patch({
      reactions: {
        ...config.reactions,
        [activeReactionState]: { ...activeReactionMotion, ...motionChanges },
      },
    });
  }

  function isMovementEnabled(movementType) {
    return (
      activeReactionMotion.movements.find(
        (movement) => movement.type === movementType,
      )?.enabled ?? false
    );
  }

  function toggleMovement(movementType) {
    const movementAlreadyListed = activeReactionMotion.movements.some(
      (movement) => movement.type === movementType,
    );
    patchActiveReactionMotion({
      movements: movementAlreadyListed
        ? activeReactionMotion.movements.map((movement) =>
            movement.type === movementType
              ? { ...movement, enabled: !movement.enabled }
              : movement,
          )
        : [
            ...activeReactionMotion.movements,
            { type: movementType, enabled: true },
          ],
    });
  }

  return (
    <div className="settings-panel">
      <section className="choice-section">
        <h2>Comportement</h2>
        <label className="settings-field">
          <span>État par défaut</span>
          <select
            value={config.defaultState}
            onChange={(event) => patch({ defaultState: event.target.value })}
          >
            {REACTIONS.map((reactionState) => (
              <option key={reactionState} value={reactionState}>
                {reactionLabels[reactionState]}
              </option>
            ))}
          </select>
        </label>
        <label className="thickness-control">
          <span>Taille de référence</span>
          <output>{config.size} px</output>
          <input
            type="range"
            min="48"
            max="512"
            step="8"
            value={config.size}
            aria-label="Taille de référence"
            onChange={(event) => patch({ size: Number(event.target.value) })}
          />
        </label>
      </section>

      <section className="choice-section">
        <h2>Accessibilité</h2>
        <label className="settings-toggle">
          <span>Respecter la réduction des animations du système</span>
          <input
            type="checkbox"
            checked={config.accessibility.respectReducedMotion}
            onChange={(event) =>
              patchAccessibility({
                respectReducedMotion: event.target.checked,
              })
            }
          />
        </label>
        <label className="settings-toggle">
          <span>Mettre en pause quand la mascotte n’est pas visible</span>
          <input
            type="checkbox"
            checked={config.accessibility.pauseOffscreen}
            onChange={(event) =>
              patchAccessibility({ pauseOffscreen: event.target.checked })
            }
          />
        </label>
        <label className="settings-field">
          <span>Description pour lecteurs d’écran</span>
          <input
            type="text"
            maxLength={120}
            value={config.accessibility.label}
            onChange={(event) =>
              patchAccessibility({ label: event.target.value })
            }
          />
        </label>
      </section>

      <section className="choice-section">
        <h2>Animation des réactions</h2>
        <div
          className="reaction-select"
          role="group"
          aria-label="Réaction à régler"
        >
          {REACTIONS.map((reactionState) => (
            <button
              type="button"
              key={reactionState}
              aria-pressed={activeReactionState === reactionState}
              onClick={() => setActiveReactionState(reactionState)}
            >
              {reactionLabels[reactionState]}
            </button>
          ))}
        </div>

        <label className="thickness-control">
          <span>Durée</span>
          <output>{activeReactionMotion.duration} ms</output>
          <input
            type="range"
            min="200"
            max="5000"
            step="50"
            value={activeReactionMotion.duration}
            aria-label="Durée de l’animation"
            onChange={(event) =>
              patchActiveReactionMotion({
                duration: Number(event.target.value),
              })
            }
          />
        </label>

        <label className="thickness-control">
          <span>Intensité</span>
          <output>{activeReactionMotion.intensity}%</output>
          <input
            type="range"
            min="0"
            max="100"
            value={activeReactionMotion.intensity}
            aria-label="Intensité de l’animation"
            onChange={(event) =>
              patchActiveReactionMotion({
                intensity: Number(event.target.value),
              })
            }
          />
        </label>

        <label className="settings-field">
          <span>Rythme</span>
          <select
            value={activeReactionMotion.easing}
            onChange={(event) =>
              patchActiveReactionMotion({ easing: event.target.value })
            }
          >
            {EASINGS.map((easing) => (
              <option key={easing} value={easing}>
                {easingLabels[easing] || easing}
              </option>
            ))}
          </select>
        </label>

        <div className="depth-control">
          <h3>Lecture</h3>
          <div>
            {['loop', 'once'].map((playbackMode) => (
              <button
                type="button"
                key={playbackMode}
                aria-pressed={activeReactionMotion.playback === playbackMode}
                onClick={() =>
                  patchActiveReactionMotion({ playback: playbackMode })
                }
              >
                {playbackMode === 'loop' ? 'En boucle' : 'Une fois'}
              </button>
            ))}
          </div>
        </div>

        <fieldset className="settings-movements">
          <legend>Mouvements activés</legend>
          {MOVEMENTS.map((movementType) => (
            <label key={movementType} className="settings-toggle">
              <span>{movementLabels[movementType]}</span>
              <input
                type="checkbox"
                checked={isMovementEnabled(movementType)}
                onChange={() => toggleMovement(movementType)}
              />
            </label>
          ))}
        </fieldset>
      </section>
    </div>
  );
}
