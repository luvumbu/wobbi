import configSource from '../core/config.js?raw';
import customShapeSource from '../core/custom-shape.js?raw';
import renderModelSource from '../core/render-model.js?raw';
import renderEffectsSource from '../core/render-effects.js?raw';
import renderSource from '../core/render.js?raw';
import motionSource from '../core/motion.js?raw';
import svgAttributesSource from '../core/svg-attributes.js?raw';
import {
  generateSource,
  generateVanilla,
  generateVueSource,
} from './generate.js';
const sources = {
  config: configSource,
  customShape: customShapeSource,
  renderModel: renderModelSource,
  renderEffects: renderEffectsSource,
  render: renderSource,
  motion: motionSource,
  svgAttributes: svgAttributesSource,
};
export const generateVanillaFiles = (config) =>
  generateVanilla(config, sources);
export const generateFiles = (config) => generateSource(config, sources);
export const generateVueFiles = (config) => generateVueSource(config, sources);
