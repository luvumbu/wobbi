import { describe, it, expect } from 'vitest';
import { createConfig, validateConfig } from '../../packages/core/config.js';
import { randomizeConfig } from '../../src/studio/randomize.js';

describe('randomizeConfig', () => {
  it('always produces a valid, self-consistent config', () => {
    let seed = 1;
    const rng = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < 200; i += 1) {
      const config = createConfig(randomizeConfig(rng));
      expect(validateConfig(config)).toEqual([]);
    }
  });

  it('varies its output across calls', () => {
    const outputs = new Set(
      Array.from({ length: 20 }, () => JSON.stringify(randomizeConfig())),
    );
    expect(outputs.size).toBeGreaterThan(1);
  });
});
