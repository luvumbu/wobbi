import { describe, it, expect } from 'vitest';
import {
  createConfig,
  validateConfig,
  normalizeSlug,
  resolveState,
  REACTIONS,
  normalizeMotion,
  animationPlan,
  ACCESSORIES,
  accessoriesForShape,
  DEPTHS,
  EYES,
  IRIS,
  NOSES,
  BROWS,
  headsForShape,
  mouthsForNose,
  MOUTHS,
  SHAPES,
} from '../../packages/core/config.js';
describe('mascot domain', () => {
  it('creates independent complete defaults', () => {
    const a = createConfig();
    const b = createConfig();
    expect(a).toMatchObject({
      slug: 'wobbi',
      name: 'Wobbi',
      componentName: 'Wobbi',
      shape: 'wobbi',
      mouthColor: '#111218',
      lashColor: '#111218',
      depth: 'soft',
      size: 256,
      defaultState: 'idle',
    });
    expect(a.accessibility.respectReducedMotion).toBe(true);
    expect(a).not.toHaveProperty('hands');
    expect(createConfig({ hands: true })).not.toHaveProperty('hands');
    a.reactions.happy.duration = 1300;
    expect(b.reactions.happy.duration).toBe(800);
  });
  it('normalizes human names and rejects unusable configurations', () => {
    expect(normalizeSlug('  Héllo Buddy! ')).toBe('hello-buddy');
    expect(
      validateConfig({ ...createConfig(), componentName: '1-bad' }),
    ).toContain(
      'Component name must be a valid PascalCase JavaScript identifier.',
    );
    expect(
      validateConfig({
        ...createConfig(),
        color: 'url(evil)',
        mouthColor: 'not-a-colour',
        size: 0,
        shape: 'human',
      }).length,
    ).toBeGreaterThanOrEqual(3);
    expect(validateConfig(createConfig())).toEqual([]);
    const previousProject = createConfig();
    delete previousProject.lashColor;
    expect(validateConfig(previousProject)).toEqual([]);
    expect(createConfig(previousProject).lashColor).toBe('#111218');
    expect(
      validateConfig({
        ...createConfig(),
        export: { ...createConfig().export, framework: 'next' },
      }),
    ).toContain('Choose React or Vue.js.');
    expect(
      validateConfig(createConfig({ export: { framework: 'vue' } })),
    ).toEqual([]);
  });
  it('provides ten authored reactions with safe fallback', () => {
    expect(REACTIONS).toEqual([
      'idle',
      'happy',
      'thinking',
      'surprised',
      'sad',
      'error',
      'success',
      'loading',
      'sleeping',
      'singing',
    ]);
    expect(resolveState('bogus')).toBe('idle');
    expect(resolveState('special')).toBe('idle');
    expect(resolveState('happy')).toBe('happy');
  });
  it('keeps only approved silhouettes and rejects incompatible details', () => {
    expect(SHAPES).not.toContain('bean');
    expect(SHAPES).not.toContain('blob');
    expect(SHAPES).not.toContain('flame');
    expect(SHAPES).not.toContain('triangle');
    expect(SHAPES).toContain('oval');
    expect(SHAPES).toContain('egg');
    expect(headsForShape('drop')).not.toContain('ears');
    expect(headsForShape('oval')).toEqual(
      expect.arrayContaining(['curl', 'bunny-ears']),
    );
    expect(headsForShape('egg')).toEqual(
      expect.arrayContaining(['curl', 'bunny-ears']),
    );
    expect(headsForShape('wobbi')).toEqual([
      'none',
      'tuft',
      'curl',
      'spiky',
      'bun',
      'fringe',
      'blaze',
      'mane',
      'wild-mane',
      'custom-hair',
      'round-ears',
      'horns',
      'halo',
    ]);
    expect(headsForShape('rounded-square')).toEqual([
      'none',
      'tuft',
      'curl',
      'spiky',
      'bun',
      'fringe',
      'blaze',
      'mane',
      'wild-mane',
      'custom-hair',
      'horns',
      'halo',
    ]);
    expect(accessoriesForShape('cloud')).not.toContain('hat');
    expect(ACCESSORIES).toContain('sunglasses');
    expect(ACCESSORIES).not.toEqual(expect.arrayContaining(['hat', 'cap']));
    expect(validateConfig(createConfig({ shape: 'triangle' }))).toContain(
      'Choose a supported shape.',
    );
    expect(validateConfig(createConfig({ shape: 'flame' }))).toContain(
      'Choose a supported shape.',
    );
  });
  it('offers a broader but validated expression system', () => {
    expect(EYES).toHaveLength(14);
    expect(EYES).toEqual(expect.arrayContaining(['round', 'side-eye', 'wink']));
    expect(IRIS).toHaveLength(13);
    expect(IRIS).toEqual(
      expect.arrayContaining(['dot', 'glossy', 'money', 'heart', 'star']),
    );
    expect(EYES).not.toContain('stars');
    expect(NOSES).toEqual([
      'none',
      'dot',
      'round',
      'button',
      'hook',
      'nostrils',
      'pointy',
      'muzzle',
      'moustache',
      'beak',
      'custom',
    ]);
    expect(BROWS).toEqual([
      'none',
      'soft',
      'straight',
      'arched',
      'worried',
      'custom',
    ]);
    expect(MOUTHS).toHaveLength(9);
    expect(MOUTHS).toEqual(expect.arrayContaining(['grin', 'pout', 'fangs']));
    expect(MOUTHS).not.toContain('moustache');
    expect(validateConfig(createConfig({ mouth: 'moustache' }))).toContain(
      'Choose a supported mouth.',
    );
    expect(
      validateConfig(createConfig({ nose: 'beak', mouth: 'grin' })),
    ).toContain('A muzzle or beak cannot be combined with a mouth.');
    expect(
      validateConfig(createConfig({ nose: 'muzzle', mouth: 'smile' })),
    ).toContain('A muzzle or beak cannot be combined with a mouth.');
    expect(mouthsForNose('muzzle')).toEqual(['none']);
    expect(mouthsForNose('beak')).toEqual(['none']);
    expect(mouthsForNose('round')).toBe(MOUTHS);
    expect(MOUTHS).not.toContain('kiss');
    expect(validateConfig(createConfig({ mouth: 'kiss' }))).toContain(
      'Choose a supported mouth.',
    );
    expect(DEPTHS).toEqual(['flat', 'soft', 'deep']);
    expect(validateConfig({ ...createConfig(), depth: 'plastic' })).toContain(
      'Choose supported depth.',
    );
  });
  it('accepts variable-length free {x,y} points and rejects malformed ones', () => {
    const base = createConfig();
    const withShapePoints = (points) => ({
      ...base,
      customShape: { points },
    });
    const point = (x, y) => ({ x, y });
    expect(
      validateConfig(withShapePoints([point(1, 2), point(3, 4), point(5, 6)])),
    ).toEqual([]);
    expect(
      validateConfig(
        withShapePoints(Array.from({ length: 24 }, (_, i) => point(i, i))),
      ),
    ).toEqual([]);
    expect(
      validateConfig(withShapePoints([point(1, 2), point(3, 4)])),
    ).toContain('Invalid custom shape.');
    expect(
      validateConfig(
        withShapePoints(Array.from({ length: 25 }, (_, i) => point(i, i))),
      ),
    ).toContain('Invalid custom shape.');
    expect(validateConfig(withShapePoints([1, 2, 3]))).toContain(
      'Invalid custom shape.',
    );
    expect(
      validateConfig(
        withShapePoints([point(NaN, 2), point(3, 4), point(5, 6)]),
      ),
    ).toContain('Invalid custom shape.');
    expect(
      validateConfig(
        withShapePoints([point(Infinity, 2), point(3, 4), point(5, 6)]),
      ),
    ).toContain('Invalid custom shape.');
    expect(
      validateConfig(
        withShapePoints([{ x: 1, y: 2, z: 3 }, point(3, 4), point(5, 6)]),
      ),
    ).toContain('Invalid custom shape.');
  });
  it('validates the free-point nose, brows and mouth the same way', () => {
    const base = createConfig();
    const point = (x, y) => ({ x, y });
    const triangle = [point(0, -8), point(8, 8), point(-8, 8)];
    expect(
      validateConfig({ ...base, customNose: { points: triangle } }),
    ).toEqual([]);
    expect(
      validateConfig({ ...base, customNose: { points: [1, 2, 3] } }),
    ).toContain('Invalid custom nose.');
    expect(
      validateConfig({ ...base, customMouth: { points: triangle } }),
    ).toEqual([]);
    expect(validateConfig({ ...base, customMouth: { points: [] } })).toContain(
      'Invalid custom mouth.',
    );
    expect(
      validateConfig({
        ...base,
        customBrows: {
          symmetric: true,
          left: { points: triangle },
          right: { points: triangle },
        },
      }),
    ).toEqual([]);
    expect(
      validateConfig({
        ...base,
        customBrows: {
          symmetric: true,
          left: { points: [1, 2, 3] },
          right: { points: triangle },
        },
      }),
    ).toContain('Invalid custom brows.');
  });
  it('clamps timing and strength and preserves ordered enabled moves', () => {
    const motion = normalizeMotion({
      duration: 5,
      intensity: 999,
      easing: 'bad',
      playback: 'bad',
      movements: [
        { type: 'tilt', enabled: true },
        { type: 'shake', enabled: false },
        { type: 'bounce', enabled: true },
      ],
    });
    expect(motion).toMatchObject({
      duration: 200,
      intensity: 100,
      easing: 'ease-out',
      playback: 'loop',
    });
    const plan = animationPlan(motion);
    expect(plan.map((x) => x.type)).toEqual(['tilt', 'bounce']);
    expect(plan[1].options.delay).toBe(100);
    expect(animationPlan(motion, true)).toEqual([]);
    expect(normalizeMotion({ duration: 999999, intensity: -2 })).toMatchObject({
      duration: 5000,
      intensity: 0,
    });
  });
});
