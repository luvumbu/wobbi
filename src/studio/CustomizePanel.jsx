import { useId, useState } from 'react';
import { ChevronDown, Glasses } from 'lucide-react';
import {
  DEPTHS,
  EYES,
  IRIS,
  NOSES,
  BROWS,
  MOUTHS,
  SHAPES,
  accessoriesForShape,
  headsForShape,
  mouthsForNose,
} from '../../packages/core/config.js';
import { LASHED_EYES } from '../../packages/core/render-model.js';
import { ChoiceGrid } from './ChoiceGrid.jsx';
import { ColorPicker, Swatches } from './ColorPicker.jsx';
import { DisclosurePanel } from './Disclosure.jsx';
import { RandomizeButton } from './RandomizeButton.jsx';
import { SettingsPanel } from './SettingsPanel.jsx';
import { BrowShapeEditor } from './BrowShapeEditor.jsx';
import { CustomHairEditor } from './CustomHairEditor.jsx';
import { EyeShapeEditor } from './EyeShapeEditor.jsx';
import { IrisShapeEditor } from './IrisShapeEditor.jsx';
import { MouthShapeEditor } from './MouthShapeEditor.jsx';
import { NoseShapeEditor } from './NoseShapeEditor.jsx';
import { ShapeEditor } from './ShapeEditor.jsx';
import { SpinToggleButton } from './SpinToggleButton.jsx';
import { pickRandomValue } from './randomize.js';
import { useCustomBrowsLibrary } from './useCustomBrowsLibrary.js';
import { useCustomEyeShapeLibrary } from './useCustomEyeShapeLibrary.js';
import { useCustomHairLibrary } from './useCustomHairLibrary.js';
import { useCustomIrisLibrary } from './useCustomIrisLibrary.js';
import { useCustomMouthLibrary } from './useCustomMouthLibrary.js';
import { useCustomNoseLibrary } from './useCustomNoseLibrary.js';
import { useCustomShapeLibrary } from './useCustomShapeLibrary.js';
import {
  accessoryLabels,
  eyeLabels,
  irisLabels,
  noseLabels,
  browLabels,
  headGroups,
  headLabels,
  mouthLabels,
  shapeLabels,
  palette,
} from './catalog.js';

function InlineColorControl({
  colorKey,
  label,
  ariaLabel = label,
  hideLabel = false,
  value,
  patch,
  preview,
  commitPreview,
  target,
  setTarget,
}) {
  const randomizeColor = () =>
    patch({ [colorKey]: pickRandomValue(palette, Math.random) });
  return (
    <div className="inline-color-control" role="group" aria-label={ariaLabel}>
      <div className="inline-color-heading">
        {!hideLabel && <h3>{label}</h3>}
        <RandomizeButton label={ariaLabel} onClick={randomizeColor} />
      </div>
      {target === colorKey ? (
        <ColorPicker
          label={ariaLabel}
          value={value}
          onChange={(color) => patch({ [colorKey]: color })}
          onPreview={(color) => preview({ [colorKey]: color })}
          onCommit={commitPreview}
          onClose={() => setTarget(null)}
        />
      ) : (
        <Swatches
          label={ariaLabel}
          value={value}
          onChange={(color) => patch({ [colorKey]: color })}
          onCustom={() => setTarget(colorKey)}
        />
      )}
    </div>
  );
}

function AppearanceDisclosure({ title, children, className = '' }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  return (
    <section className={`appearance-disclosure ${className}`}>
      <button
        type="button"
        className="appearance-trigger"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>
      <DisclosurePanel open={open} id={contentId}>
        <div className="appearance-content">{children}</div>
      </DisclosurePanel>
    </section>
  );
}

function ThicknessControl({ label, ariaLabel = label, value, max, onChange }) {
  return (
    <label className="thickness-control">
      <span>{label}</span>
      <output>{value} px</output>
      <input
        aria-label={ariaLabel}
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

export function CustomizePanel({
  config,
  patch,
  preview,
  commitPreview,
  details,
  setDetails,
}) {
  const [target, setTarget] = useState(null);
  const [tab, setTab] = useState('design');
  const [openColorField, setOpenColorField] = useState(null);
  const { savedShapes, saveShape, deleteShape, renameShape } =
    useCustomShapeLibrary();
  const {
    savedShapes: savedEyeShapes,
    saveShape: saveEyeShape,
    deleteShape: deleteEyeShape,
    renameShape: renameEyeShape,
  } = useCustomEyeShapeLibrary();
  const {
    savedShapes: savedIrisShapes,
    saveShape: saveIrisShape,
    deleteShape: deleteIrisShape,
    renameShape: renameIrisShape,
  } = useCustomIrisLibrary();
  const {
    savedShapes: savedHairShapes,
    saveShape: saveHairShape,
    deleteShape: deleteHairShape,
    renameShape: renameHairShape,
  } = useCustomHairLibrary();
  const {
    savedShapes: savedNoseShapes,
    saveShape: saveNoseShape,
    deleteShape: deleteNoseShape,
    renameShape: renameNoseShape,
  } = useCustomNoseLibrary();
  const {
    savedShapes: savedBrowShapes,
    saveShape: saveBrowShape,
    deleteShape: deleteBrowShape,
    renameShape: renameBrowShape,
  } = useCustomBrowsLibrary();
  const {
    savedShapes: savedMouthShapes,
    saveShape: saveMouthShape,
    deleteShape: deleteMouthShape,
    renameShape: renameMouthShape,
  } = useCustomMouthLibrary();
  const hasLashes = LASHED_EYES.includes(config.eyes);
  const irisExtraTiles = savedIrisShapes.map((savedShape) => ({
    key: savedShape.id,
    label: savedShape.name,
    pressed:
      config.iris === 'custom' &&
      JSON.stringify(config.customIris.points) ===
        JSON.stringify(savedShape.customIris.points),
    onClick: () =>
      patch({
        iris: 'custom',
        customIris: { points: [...savedShape.customIris.points] },
      }),
    previewConfig: {
      ...config,
      iris: 'custom',
      customIris: savedShape.customIris,
    },
  }));
  const eyeExtraTiles = savedEyeShapes.map((savedShape) => ({
    key: savedShape.id,
    label: savedShape.name,
    pressed:
      config.eyes === 'custom' &&
      JSON.stringify(config.customEyeShape) ===
        JSON.stringify(savedShape.customEyeShape),
    onClick: () =>
      patch({
        eyes: 'custom',
        customEyeShape: {
          symmetric: savedShape.customEyeShape.symmetric,
          left: { points: [...savedShape.customEyeShape.left.points] },
          right: { points: [...savedShape.customEyeShape.right.points] },
        },
      }),
    previewConfig: {
      ...config,
      eyes: 'custom',
      customEyeShape: savedShape.customEyeShape,
    },
  }));
  const shapeExtraTiles = savedShapes.map((savedShape) => ({
    key: savedShape.id,
    label: savedShape.name,
    pressed:
      config.shape === 'custom' &&
      JSON.stringify(config.customShape.points) ===
        JSON.stringify(savedShape.points),
    onClick: () =>
      patch({
        shape: 'custom',
        customShape: { points: [...savedShape.points] },
        head: headsForShape('custom').includes(config.head)
          ? config.head
          : 'none',
        accessory: accessoriesForShape('custom').includes(config.accessory)
          ? config.accessory
          : 'none',
      }),
    previewConfig: {
      ...config,
      shape: 'custom',
      customShape: { points: savedShape.points },
      head: 'none',
      accessory: 'none',
      mouth: 'none',
    },
  }));
  const hairExtraTiles = savedHairShapes.map((savedShape) => ({
    key: savedShape.id,
    label: savedShape.name,
    pressed:
      config.head === 'custom-hair' &&
      JSON.stringify(config.customHair.points) ===
        JSON.stringify(savedShape.points),
    onClick: () =>
      patch({
        head: 'custom-hair',
        customHair: { points: [...savedShape.points] },
      }),
    previewConfig: {
      ...config,
      head: 'custom-hair',
      customHair: { points: savedShape.points },
    },
  }));
  function quickColorButton(field, colorKey, label) {
    return (
      <button
        type="button"
        className="header-color-swatch"
        aria-label={label}
        aria-expanded={openColorField === field}
        title={label}
        style={{ background: config[colorKey] }}
        onClick={() =>
          setOpenColorField((current) => (current === field ? null : field))
        }
      />
    );
  }
  function quickColorPanel(field, colorKey, label) {
    return (
      openColorField === field && (
        <InlineColorControl
          colorKey={colorKey}
          label={label}
          ariaLabel={`${label} (accès rapide)`}
          value={config[colorKey]}
          patch={patch}
          preview={preview}
          commitPreview={commitPreview}
          target={target}
          setTarget={setTarget}
        />
      )
    );
  }
  const availableHeads = headsForShape(config.shape);
  const availableAccessories = accessoriesForShape(config.shape);
  const labels = {
    color: 'Corps',
    eyeColor: 'Yeux',
    pupilColor: 'Pupilles',
    lashColor: 'Cils',
    mouthColor: 'Bouche',
    noseColor: 'Nez',
    browColor: 'Sourcils',
    outlineColor: 'Contour du corps',
    eyeOutlineColor: 'Contour des yeux',
    accessoryColor: 'Accessoire',
    accentColor: 'Accent',
    background: 'Fond',
  };
  const changeColor = (key, value) =>
    patch(
      key === 'background'
        ? { background: { ...config.background, color: value } }
        : { [key]: value },
    );
  const previewColor = (key, value) =>
    preview(
      key === 'background'
        ? { background: { ...config.background, color: value } }
        : { [key]: value },
    );
  const detailColorKeys = [
    ...(config.accessory !== 'none' || config.head === 'horns'
      ? ['accessoryColor']
      : []),
    'accentColor',
    'background',
  ];

  return (
    <aside className="customizer" aria-label="Personnalisation">
      <h1>
        À vous de jouer<span className="violet-dot">.</span>
      </h1>
      <p className="intro">Quelques choix, votre personnage.</p>
      <label className="mascot-name-field">
        <span>Nom</span>
        <input
          aria-label="Nom de la mascotte"
          maxLength={40}
          value={config.name}
          onChange={(event) => patch({ name: event.target.value })}
        />
      </label>

      <div
        className="customizer-tabs"
        role="tablist"
        aria-label="Sections du studio"
      >
        <button
          type="button"
          role="tab"
          id="customizer-tab-design"
          aria-selected={tab === 'design'}
          aria-controls="customizer-panel-design"
          onClick={() => setTab('design')}
        >
          Personnalisation
        </button>
        <button
          type="button"
          role="tab"
          id="customizer-tab-settings"
          aria-selected={tab === 'settings'}
          aria-controls="customizer-panel-settings"
          onClick={() => setTab('settings')}
        >
          Paramètres
        </button>
      </div>

      {tab === 'settings' ? (
        <div
          id="customizer-panel-settings"
          role="tabpanel"
          aria-labelledby="customizer-tab-settings"
        >
          <SettingsPanel config={config} patch={patch} />
        </div>
      ) : (
        <div
          id="customizer-panel-design"
          role="tabpanel"
          aria-labelledby="customizer-tab-design"
        >
          <ChoiceGrid
            title="Forme"
            field="shape"
            values={SHAPES}
            labels={shapeLabels}
            config={config}
            columns={3}
            collapsedCount={3}
            itemLabel="formes"
            onChange={(shape) =>
              patch({
                shape,
                head: headsForShape(shape).includes(config.head)
                  ? config.head
                  : 'none',
                accessory: accessoriesForShape(shape).includes(config.accessory)
                  ? config.accessory
                  : 'none',
              })
            }
            extraHeaderButton={quickColorButton(
              'shape',
              'color',
              'Couleur du corps',
            )}
            headerPanel={quickColorPanel('shape', 'color', 'Couleur du corps')}
            extraTiles={shapeExtraTiles}
          >
            {config.shape === 'custom' && (
              <ShapeEditor
                points={config.customShape.points}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                savedShapes={savedShapes}
                saveShape={saveShape}
                deleteShape={deleteShape}
                renameShape={renameShape}
              />
            )}
          </ChoiceGrid>

          <AppearanceDisclosure
            title="Apparence du corps"
            className="body-settings"
          >
            <InlineColorControl
              colorKey="color"
              label="Teinte"
              ariaLabel="Couleur du corps"
              value={config.color}
              patch={patch}
              preview={preview}
              commitPreview={commitPreview}
              target={target}
              setTarget={setTarget}
            />
            <div
              className="depth-control"
              role="group"
              aria-label="Volume du corps"
            >
              <div className="inline-color-heading">
                <h3>Volume</h3>
                <RandomizeButton
                  label="Volume"
                  onClick={() =>
                    patch({ depth: pickRandomValue(DEPTHS, Math.random) })
                  }
                />
              </div>
              <div>
                {DEPTHS.map((depth) => (
                  <button
                    type="button"
                    key={depth}
                    aria-pressed={config.depth === depth}
                    onClick={() => patch({ depth })}
                  >
                    {{ flat: 'Plat', soft: 'Doux', deep: 'Profond' }[depth]}
                  </button>
                ))}
              </div>
            </div>
            <InlineColorControl
              colorKey="outlineColor"
              label="Contour"
              ariaLabel="Couleur du contour"
              value={config.outlineColor}
              patch={patch}
              preview={preview}
              commitPreview={commitPreview}
              target={target}
              setTarget={setTarget}
            />
            <ThicknessControl
              label="Épaisseur"
              ariaLabel="Épaisseur du contour du corps"
              value={config.outlineWidth}
              max={16}
              onChange={(outlineWidth) => patch({ outlineWidth })}
            />
          </AppearanceDisclosure>

          <ChoiceGrid
            title="Yeux"
            field="eyes"
            values={EYES}
            labels={eyeLabels}
            config={config}
            kind="eyes"
            columns={3}
            collapsedCount={3}
            itemLabel="regards"
            onChange={(eyes) => patch({ eyes })}
            extraHeaderButton={quickColorButton(
              'eyes',
              'eyeColor',
              'Couleur des yeux',
            )}
            headerPanel={quickColorPanel(
              'eyes',
              'eyeColor',
              'Couleur des yeux',
            )}
            extraTiles={eyeExtraTiles}
          >
            {config.eyes === 'custom' && (
              <EyeShapeEditor
                customEyeShape={config.customEyeShape}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                savedShapes={savedEyeShapes}
                saveShape={saveEyeShape}
                deleteShape={deleteEyeShape}
                renameShape={renameEyeShape}
              />
            )}
            <AppearanceDisclosure title="Apparence des yeux">
              <InlineColorControl
                colorKey="eyeColor"
                label="Teinte"
                ariaLabel="Couleur de l’œil"
                value={config.eyeColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              {hasLashes && (
                <InlineColorControl
                  colorKey="lashColor"
                  label="Cils"
                  ariaLabel="Couleur des cils"
                  value={config.lashColor}
                  patch={patch}
                  preview={preview}
                  commitPreview={commitPreview}
                  target={target}
                  setTarget={setTarget}
                />
              )}
              <InlineColorControl
                colorKey="eyeOutlineColor"
                label="Contour"
                ariaLabel="Couleur du contour des yeux"
                value={config.eyeOutlineColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <ThicknessControl
                label="Épaisseur"
                ariaLabel="Épaisseur du contour des yeux"
                value={config.eyeOutlineWidth}
                max={6}
                onChange={(eyeOutlineWidth) => patch({ eyeOutlineWidth })}
              />
            </AppearanceDisclosure>
          </ChoiceGrid>

          <ChoiceGrid
            title="Iris"
            field="iris"
            values={IRIS}
            labels={irisLabels}
            config={config}
            kind="iris"
            columns={3}
            collapsedCount={5}
            itemLabel="iris"
            onChange={(iris) => patch({ iris })}
            extraHeaderButton={
              <>
                {quickColorButton('iris', 'pupilColor', 'Couleur de l’iris')}
                <SpinToggleButton
                  pressed={config.irisSpin}
                  onClick={() => patch({ irisSpin: !config.irisSpin })}
                  label="Rotation de l’iris"
                />
              </>
            }
            headerPanel={quickColorPanel(
              'iris',
              'pupilColor',
              'Couleur de l’iris',
            )}
            extraTiles={irisExtraTiles}
          >
            {config.iris === 'custom' && (
              <IrisShapeEditor
                customIris={config.customIris}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                savedShapes={savedIrisShapes}
                saveShape={saveIrisShape}
                deleteShape={deleteIrisShape}
                renameShape={renameIrisShape}
              />
            )}
            <AppearanceDisclosure title="Apparence de l’iris">
              <InlineColorControl
                colorKey="pupilColor"
                label="Teinte"
                ariaLabel="Couleur de l’iris"
                value={config.pupilColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
            </AppearanceDisclosure>
          </ChoiceGrid>

          <ChoiceGrid
            title="Nez, museau ou bec"
            field="nose"
            values={NOSES}
            labels={noseLabels}
            config={config}
            kind="nose"
            columns={3}
            collapsedCount={3}
            itemLabel="nez"
            onChange={(nose) =>
              patch(
                mouthsForNose(nose).includes(config.mouth)
                  ? { nose }
                  : { nose, mouth: 'none' },
              )
            }
            extraHeaderButton={
              config.nose !== 'none' &&
              quickColorButton('nose', 'noseColor', 'Couleur du nez')
            }
            headerPanel={quickColorPanel('nose', 'noseColor', 'Couleur du nez')}
          >
            {config.nose === 'custom' && (
              <NoseShapeEditor
                points={config.customNose.points}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                savedShapes={savedNoseShapes}
                saveShape={saveNoseShape}
                deleteShape={deleteNoseShape}
                renameShape={renameNoseShape}
              />
            )}
            <AppearanceDisclosure title="Apparence du nez">
              <InlineColorControl
                colorKey="noseColor"
                label="Teinte"
                ariaLabel="Couleur du nez"
                hideLabel
                value={config.noseColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <InlineColorControl
                colorKey="noseOutlineColor"
                label="Contour"
                ariaLabel="Couleur du contour du nez"
                value={config.noseOutlineColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <ThicknessControl
                label="Épaisseur"
                ariaLabel="Épaisseur du contour du nez"
                value={config.noseOutlineWidth}
                max={6}
                onChange={(noseOutlineWidth) => patch({ noseOutlineWidth })}
              />
            </AppearanceDisclosure>
          </ChoiceGrid>

          <ChoiceGrid
            title="Sourcils"
            field="brows"
            values={BROWS}
            labels={browLabels}
            config={config}
            kind="brows"
            columns={3}
            collapsedCount={3}
            itemLabel="sourcils"
            onChange={(brows) => patch({ brows })}
            extraHeaderButton={
              config.brows !== 'none' &&
              quickColorButton('brows', 'browColor', 'Couleur des sourcils')
            }
            headerPanel={quickColorPanel(
              'brows',
              'browColor',
              'Couleur des sourcils',
            )}
          >
            {config.brows === 'custom' && (
              <BrowShapeEditor
                customBrows={config.customBrows}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                savedShapes={savedBrowShapes}
                saveShape={saveBrowShape}
                deleteShape={deleteBrowShape}
                renameShape={renameBrowShape}
              />
            )}
            <AppearanceDisclosure title="Apparence des sourcils">
              <InlineColorControl
                colorKey="browColor"
                label="Teinte"
                ariaLabel="Couleur des sourcils"
                hideLabel
                value={config.browColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <InlineColorControl
                colorKey="browOutlineColor"
                label="Contour"
                ariaLabel="Couleur du contour des sourcils"
                value={config.browOutlineColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <ThicknessControl
                label="Épaisseur"
                ariaLabel="Épaisseur du contour des sourcils"
                value={config.browOutlineWidth}
                max={6}
                onChange={(browOutlineWidth) => patch({ browOutlineWidth })}
              />
            </AppearanceDisclosure>
          </ChoiceGrid>

          <ChoiceGrid
            title="Bouche"
            field="mouth"
            values={MOUTHS}
            labels={mouthLabels}
            config={config}
            kind="mouth"
            columns={3}
            collapsedCount={3}
            itemLabel="bouches"
            disabledValues={MOUTHS.filter(
              (mouth) => !mouthsForNose(config.nose).includes(mouth),
            )}
            onChange={(mouth) => patch({ mouth })}
            extraHeaderButton={
              config.mouth !== 'none' &&
              quickColorButton('mouth', 'mouthColor', 'Couleur de la bouche')
            }
            headerPanel={quickColorPanel(
              'mouth',
              'mouthColor',
              'Couleur de la bouche',
            )}
          >
            {config.mouth === 'custom' && (
              <MouthShapeEditor
                points={config.customMouth.points}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                savedShapes={savedMouthShapes}
                saveShape={saveMouthShape}
                deleteShape={deleteMouthShape}
                renameShape={renameMouthShape}
              />
            )}
            <AppearanceDisclosure title="Apparence de la bouche">
              <InlineColorControl
                colorKey="mouthColor"
                label="Teinte"
                ariaLabel="Couleur de la bouche"
                hideLabel
                value={config.mouthColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <InlineColorControl
                colorKey="mouthOutlineColor"
                label="Contour"
                ariaLabel="Couleur du contour de la bouche"
                value={config.mouthOutlineColor}
                patch={patch}
                preview={preview}
                commitPreview={commitPreview}
                target={target}
                setTarget={setTarget}
              />
              <ThicknessControl
                label="Épaisseur"
                ariaLabel="Épaisseur du contour de la bouche"
                value={config.mouthOutlineWidth}
                max={6}
                onChange={(mouthOutlineWidth) => patch({ mouthOutlineWidth })}
              />
            </AppearanceDisclosure>
          </ChoiceGrid>

          <button
            type="button"
            className="details-button"
            aria-expanded={details}
            aria-controls="character-details"
            onClick={() => {
              setDetails(!details);
              setTarget(null);
            }}
          >
            <Glasses size={23} />
            <span>Accessoires & détails</span>
            <ChevronDown className="details-chevron" size={15} />
          </button>

          <DisclosurePanel
            open={details}
            id="character-details"
            className="details-motion"
          >
            <div className="details-disclosure">
              {headGroups.map((group) => {
                const groupValues = availableHeads.filter(
                  (value) => value === 'none' || group.values.includes(value),
                );
                if (groupValues.length <= 1) return null;
                const isHairGroup = group.title === 'Cheveux';
                return (
                  <ChoiceGrid
                    key={group.title}
                    title={group.title}
                    field="head"
                    values={groupValues}
                    labels={headLabels}
                    config={config}
                    columns={3}
                    collapsedCount={3}
                    itemLabel={group.itemLabel}
                    onChange={(head) => patch({ head })}
                    extraTiles={isHairGroup ? hairExtraTiles : undefined}
                    extraHeaderButton={
                      isHairGroup &&
                      config.head !== 'none' &&
                      quickColorButton(
                        'head',
                        'headColor',
                        'Couleur des cheveux',
                      )
                    }
                    headerPanel={
                      isHairGroup &&
                      quickColorPanel(
                        'head',
                        'headColor',
                        'Couleur des cheveux',
                      )
                    }
                  >
                    {isHairGroup && config.head === 'custom-hair' && (
                      <CustomHairEditor
                        points={config.customHair.points}
                        patch={patch}
                        preview={preview}
                        commitPreview={commitPreview}
                        savedShapes={savedHairShapes}
                        saveShape={saveHairShape}
                        deleteShape={deleteHairShape}
                        renameShape={renameHairShape}
                      />
                    )}
                  </ChoiceGrid>
                );
              })}
              {config.head !== 'none' && (
                <AppearanceDisclosure title="Apparence de la tête">
                  <InlineColorControl
                    colorKey="headColor"
                    label="Teinte"
                    ariaLabel="Couleur de la tête"
                    value={config.headColor}
                    patch={patch}
                    preview={preview}
                    commitPreview={commitPreview}
                    target={target}
                    setTarget={setTarget}
                  />
                  <InlineColorControl
                    colorKey="headOutlineColor"
                    label="Contour"
                    ariaLabel="Couleur du contour de la tête"
                    value={config.headOutlineColor}
                    patch={patch}
                    preview={preview}
                    commitPreview={commitPreview}
                    target={target}
                    setTarget={setTarget}
                  />
                  <ThicknessControl
                    label="Épaisseur"
                    ariaLabel="Épaisseur du contour de la tête"
                    value={config.headOutlineWidth}
                    max={6}
                    onChange={(headOutlineWidth) => patch({ headOutlineWidth })}
                  />
                </AppearanceDisclosure>
              )}
              <ChoiceGrid
                title="Accessoires"
                field="accessory"
                values={availableAccessories}
                labels={accessoryLabels}
                config={config}
                columns={3}
                collapsedCount={3}
                itemLabel="accessoires"
                onChange={(accessory) => patch({ accessory })}
                extraHeaderButton={
                  config.accessory !== 'none' &&
                  quickColorButton(
                    'accessory',
                    'accessoryColor',
                    'Couleur de l’accessoire',
                  )
                }
                headerPanel={quickColorPanel(
                  'accessory',
                  'accessoryColor',
                  'Couleur de l’accessoire',
                )}
              >
                {config.accessory !== 'none' && (
                  <AppearanceDisclosure title="Contour de l’accessoire">
                    <InlineColorControl
                      colorKey="accessoryOutlineColor"
                      label="Contour"
                      ariaLabel="Couleur du contour de l’accessoire"
                      hideLabel
                      value={config.accessoryOutlineColor}
                      patch={patch}
                      preview={preview}
                      commitPreview={commitPreview}
                      target={target}
                      setTarget={setTarget}
                    />
                    <ThicknessControl
                      label="Épaisseur"
                      ariaLabel="Épaisseur du contour de l’accessoire"
                      value={config.accessoryOutlineWidth}
                      max={6}
                      onChange={(accessoryOutlineWidth) =>
                        patch({ accessoryOutlineWidth })
                      }
                    />
                  </AppearanceDisclosure>
                )}
              </ChoiceGrid>

              <section className="choice-section detail-colors">
                <div className="choice-section-heading">
                  <h2>Couleurs des détails</h2>
                  <RandomizeButton
                    label="Couleurs des détails"
                    onClick={() =>
                      detailColorKeys.forEach((key) =>
                        changeColor(key, pickRandomValue(palette, Math.random)),
                      )
                    }
                  />
                </div>
                <div className="color-targets">
                  {detailColorKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      className="color-target"
                      aria-pressed={target === key}
                      onClick={() => setTarget(target === key ? null : key)}
                    >
                      <span
                        style={{
                          background:
                            key === 'background'
                              ? config.background.color
                              : config[key],
                        }}
                      >
                        {key === 'pupilColor' ? (
                          '◉'
                        ) : key === 'accessoryColor' ? (
                          <Glasses size={22} />
                        ) : (
                          ''
                        )}
                      </span>
                      {labels[key]}
                    </button>
                  ))}
                </div>
                {target && detailColorKeys.includes(target) && (
                  <ColorPicker
                    key={target}
                    label={labels[target]}
                    value={
                      target === 'background'
                        ? config.background.color
                        : config[target]
                    }
                    onChange={(value) => changeColor(target, value)}
                    onPreview={(value) => previewColor(target, value)}
                    onCommit={commitPreview}
                    onClose={() => setTarget(null)}
                  />
                )}
              </section>

              <label className="detail-row">
                Fond transparent dans l’aperçu
                <input
                  type="checkbox"
                  checked={config.background.type === 'transparent'}
                  onChange={(event) =>
                    patch({
                      background: {
                        ...config.background,
                        type: event.target.checked ? 'transparent' : 'solid',
                      },
                    })
                  }
                />
              </label>
            </div>
          </DisclosurePanel>
        </div>
      )}
    </aside>
  );
}
