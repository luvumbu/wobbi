import {
  SHAPES,
  EYES,
  NOSES,
  BROWS,
  DEPTHS,
  headsForShape,
  accessoriesForShape,
  mouthsForNose,
} from '../../packages/core/config.js';
import { palette } from './catalog.js';

export function pickRandomValue(possibleValues, randomGenerator) {
  return possibleValues[Math.floor(randomGenerator() * possibleValues.length)];
}

export function randomizeConfig(randomGenerator = Math.random) {
  const randomShape = pickRandomValue(SHAPES, randomGenerator);
  const randomNose = pickRandomValue(NOSES, randomGenerator);
  const pickRandomPaletteColor = () =>
    pickRandomValue(palette, randomGenerator);
  return {
    shape: randomShape,
    eyes: pickRandomValue(EYES, randomGenerator),
    nose: randomNose,
    brows: pickRandomValue(BROWS, randomGenerator),
    mouth: pickRandomValue(mouthsForNose(randomNose), randomGenerator),
    depth: pickRandomValue(DEPTHS, randomGenerator),
    head: pickRandomValue(headsForShape(randomShape), randomGenerator),
    accessory: pickRandomValue(
      accessoriesForShape(randomShape),
      randomGenerator,
    ),
    color: pickRandomPaletteColor(),
    eyeColor: pickRandomPaletteColor(),
    outlineColor: pickRandomPaletteColor(),
    accessoryColor: pickRandomPaletteColor(),
    accentColor: pickRandomPaletteColor(),
  };
}
