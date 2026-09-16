import { createConfig, validateConfig } from '../packages/core/config.js';
import { migrateLegacyCustomShapes } from './legacy-shapes.js';

const HASH_PARAM_NAME = 'w';

function encodePlainTextToBase64Url(plainText) {
  const utf8Bytes = new TextEncoder().encode(plainText);
  let binaryString = '';
  for (const byte of utf8Bytes) binaryString += String.fromCharCode(byte);
  return btoa(binaryString)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function decodeBase64UrlToPlainText(base64UrlText) {
  const standardBase64Text = base64UrlText
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const binaryString = atob(standardBase64Text);
  const utf8Bytes = Uint8Array.from(binaryString, (character) =>
    character.charCodeAt(0),
  );
  return new TextDecoder().decode(utf8Bytes);
}

export function encodeShareHash(config) {
  return `${HASH_PARAM_NAME}=${encodePlainTextToBase64Url(JSON.stringify(config))}`;
}

export function shareLinkFor(config, currentLocation = window.location) {
  return `${currentLocation.origin}${currentLocation.pathname}#${encodeShareHash(config)}`;
}

export function configFromShareHash(urlHash) {
  const encodedConfig = new URLSearchParams(
    String(urlHash || '').replace(/^#/, ''),
  ).get(HASH_PARAM_NAME);
  if (!encodedConfig) return null;
  try {
    const parsedConfig = migrateLegacyCustomShapes(
      JSON.parse(decodeBase64UrlToPlainText(encodedConfig)),
    );
    if (validateConfig(parsedConfig).length) return null;
    return createConfig(parsedConfig);
  } catch {
    return null;
  }
}
