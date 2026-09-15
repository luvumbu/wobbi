import { describe, it, expect } from 'vitest';
import { createConfig } from '../../packages/core/config.js';
import {
  encodeShareHash,
  shareLinkFor,
  configFromShareHash,
} from '../../src/share.js';

describe('share link', () => {
  it('round-trips a config through a hash', () => {
    const config = createConfig({ name: 'Étoile', shape: 'cloud' });
    const hash = encodeShareHash(config);
    const restored = configFromShareHash(`#${hash}`);
    expect(restored).toMatchObject({ name: 'Étoile', shape: 'cloud' });
  });

  it('builds a full link from a fake location', () => {
    const config = createConfig();
    const link = shareLinkFor(config, {
      origin: 'https://wobbi.vercel.app',
      pathname: '/',
    });
    expect(link).toMatch(/^https:\/\/wobbi\.vercel\.app\/#w=/);
  });

  it('returns null when the hash is missing, malformed or invalid', () => {
    expect(configFromShareHash('')).toBeNull();
    expect(configFromShareHash('#w=not-base64!!')).toBeNull();
    expect(
      configFromShareHash('#w=' + btoa('{"shape":"not-a-shape"}')),
    ).toBeNull();
  });
});
