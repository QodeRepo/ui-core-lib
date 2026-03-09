import { useTheme } from '@mui/material/styles';
import { designTokens } from '../tokens';

/**
 * Custom hook to access design tokens
 * Provides access to both MUI theme and design tokens
 */
export const useDesignTokens = () => {
  const theme = useTheme();
  
  return {
    // Design tokens
    tokens: designTokens,
    
    // Quick access to common tokens
    colors: designTokens.colors,
    spacing: designTokens.spacing,
    typography: designTokens.typography,
    borders: designTokens.borders,
    shadows: designTokens.shadows,
    transitions: designTokens.transitions,
    breakpoints: designTokens.breakpoints,
    zIndex: designTokens.zIndex,
    
    // MUI theme (for accessing theme mode, etc.)
    theme,
  };
};

/**
 * Helper to get spacing value
 * @param multiplier - Multiplier of base spacing unit
 * @returns spacing value in pixels
 */
export const getSpacing = (multiplier: number): number => {
  return designTokens.spacing.baseUnit * multiplier;
};

/**
 * Helper to create transition string
 * @param property - CSS property to transition
 * @param duration - Duration key from tokens
 * @param easing - Easing key from tokens
 */
export const createTransition = (
  property: string,
  duration: keyof typeof designTokens.transitions.duration = 'standard',
  easing: keyof typeof designTokens.transitions.easing = 'easeInOut'
): string => {
  return `${property} ${designTokens.transitions.duration[duration]}ms ${designTokens.transitions.easing[easing]}`;
};
