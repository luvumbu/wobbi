import { lazy, Suspense, useState } from 'react';
import { Pause, Play, ChevronDown, Box } from 'lucide-react';
import { Mascot } from '../mascot/Mascot.jsx';
import { DEFAULT_RELIEF, RELIEF_PARTS } from '../mascot/relief.js';
import { reactionLabels } from './catalog.js';
import { DisclosurePanel } from './Disclosure.jsx';

// three.js is large and only needed once someone opens the 3D view, so it
// is code-split out of the main bundle instead of loaded up front.
const Mascot3D = lazy(() =>
  import('../mascot/Mascot3D.jsx').then((mod) => ({ default: mod.Mascot3D })),
);
const RELIEF_PART_LABELS = {
  body: 'Corps',
  eyes: 'Yeux',
  nose: 'Nez',
  mouth: 'Bouche',
  brows: 'Sourcils',
  head: 'Cheveux',
  accessory: 'Accessoires',
};
function Relief3DPanel({ relief, setRelief }) {
  return (
    <div className="relief-3d-panel">
      <label className="relief-3d-row relief-3d-base">
        <span>Volume global</span>
        <input
          type="range"
          min="20"
          max="140"
          value={relief.base}
          onChange={(event) =>
            setRelief((current) => ({
              ...current,
              base: Number(event.target.value),
            }))
          }
        />
      </label>
      {RELIEF_PARTS.map((part) => (
        <label className="relief-3d-row" key={part}>
          <span>{RELIEF_PART_LABELS[part]}</span>
          <input
            type="range"
            min="0.3"
            max="2.2"
            step="0.1"
            value={relief[part]}
            onChange={(event) =>
              setRelief((current) => ({
                ...current,
                [part]: Number(event.target.value),
              }))
            }
          />
        </label>
      ))}
    </div>
  );
}
export function Stage({
  config,
  reaction,
  reactTo,
  playing,
  setPlaying,
  replay,
}) {
  const [more, setMore] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [view3d, setView3d] = useState(false);
  const [relief, setRelief] = useState(DEFAULT_RELIEF);
  const primaryStates = [
    'idle',
    'happy',
    'thinking',
    'surprised',
    'sleeping',
    'loading',
  ];
  const extraStates = ['singing', 'sad', 'success', 'error'];
  const renderReaction = (state) => (
    <button
      key={state}
      className="reaction-tile"
      aria-label={'Réaction : ' + reactionLabels[state]}
      aria-pressed={reaction === state}
      onPointerEnter={() => setHovered(state)}
      onPointerLeave={() => setHovered(null)}
      onFocus={() => setHovered(state)}
      onBlur={() => setHovered(null)}
      onClick={() => reactTo(state)}
    >
      <Mascot
        config={config}
        state={state}
        size={80}
        playing={hovered === state && playing}
      />
      <span>{reactionLabels[state]}</span>
    </button>
  );
  return (
    <main className="stage">
      <section
        className={
          'mascot-stage ' +
          (config.background.type === 'transparent' ? 'checkerboard' : '')
        }
        style={{
          backgroundColor:
            config.background.type === 'transparent'
              ? undefined
              : config.background.color,
        }}
        aria-label="Aperçu de votre mascotte"
        data-gaze-zone
      >
        <button
          className="icon-button pause-button"
          aria-label={playing ? 'Mettre en pause' : 'Animer la mascotte'}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          className="icon-button view-3d-button"
          aria-label={view3d ? 'Revenir à la vue 2D' : 'Voir la mascotte en 3D'}
          aria-pressed={view3d}
          title="Vue 3D"
          onClick={() => setView3d((value) => !value)}
        >
          <Box size={18} />
        </button>
        <div className="mascot-center">
          {view3d ? (
            <Suspense fallback={<div className="mascot-3d-loading" />}>
              <Mascot3D
                config={config}
                state={reaction}
                size={380}
                relief={relief}
              />
            </Suspense>
          ) : (
            <button
              className="mascot-hit"
              aria-label="Faire réagir la mascotte"
              onClick={() => reactTo('happy')}
            >
              <Mascot
                config={config}
                state={reaction}
                size={380}
                playing={playing}
                replay={replay}
                interactive
              />
            </button>
          )}
        </div>
      </section>
      {view3d && <Relief3DPanel relief={relief} setRelief={setRelief} />}
      <section className="reactions">
        <div className="reaction-heading">
          <h2>Faites-le réagir</h2>
          <button
            className="text-button"
            aria-expanded={more}
            onClick={() => setMore(!more)}
          >
            {more ? 'Moins' : 'Tout voir'}{' '}
            <ChevronDown className="reaction-chevron" size={13} />
          </button>
        </div>
        <div className="reaction-grid">{primaryStates.map(renderReaction)}</div>
        <DisclosurePanel open={more} className="reaction-more">
          <div className="reaction-grid reaction-grid-extra">
            {extraStates.map(renderReaction)}
          </div>
        </DisclosurePanel>
      </section>
    </main>
  );
}
