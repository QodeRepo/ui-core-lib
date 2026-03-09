// Design Tokens - Centralized token system
import { colorTokens } from './colors';
export { colorTokens } from './colors';
export type { ColorTokens } from './colors';

import { spacingTokens } from './spacing';
export { spacingTokens } from './spacing';
export type { SpacingTokens } from './spacing';

import { typographyTokens } from './typography';
export { typographyTokens } from './typography';
export type { TypographyTokens } from './typography';

import { borderTokens } from './borders';
export { borderTokens } from './borders';
export type { BorderTokens } from './borders';

import { shadowTokens } from './shadows';
export { shadowTokens } from './shadows';
export type { ShadowTokens } from './shadows';

import { transitionTokens } from './transitions';
export { transitionTokens } from './transitions';
export type { TransitionTokens } from './transitions';

import { breakpointTokens } from './breakpoints';
export { breakpointTokens } from './breakpoints';
export type { BreakpointTokens } from './breakpoints';

import { zIndexTokens } from './zIndex';
export { zIndexTokens } from './zIndex';
export type { ZIndexTokens } from './zIndex';

// Combined design tokens
export const designTokens = {
  colors: colorTokens,
  spacing: spacingTokens,
  typography: typographyTokens,
  borders: borderTokens,
  shadows: shadowTokens,
  transitions: transitionTokens,
  breakpoints: breakpointTokens,
  zIndex: zIndexTokens,
} as const;

export type DesignTokens = typeof designTokens;
