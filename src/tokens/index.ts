import { colors } from './colors/index.js';
import { typography } from './typography/index.js';
import { spacing } from './spacing/index.js';
import { border } from './border/index.js';
import { shadows } from './shadows/index.js';

export const tokens = {
  colors,
  typography,
  spacing,
  border,
  shadows,
};

export { colors, typography, spacing, border, shadows };

export type { ColorToken } from './colors/index.js';
export type { TypographyToken } from './typography/index.js';
export type { SpacingToken } from './spacing/index.js';
export type { BorderToken } from './border/index.js';
export type { ShadowToken } from './shadows/index.js';

export default tokens;
