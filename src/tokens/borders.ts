// Border Tokens - Design System Border Styles
export const borderTokens = {
  // Border Widths
  width: {
    none: 0,
    thin: 1,
    medium: 2,
    thick: 3,
    extraThick: 4,
  },
  
  // Border Radius
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
    circle: '50%',
  },
  
  // Border Styles
  style: {
    none: 'none',
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
  
  // Component-specific borders
  component: {
    button: {
      radius: 4,
      width: 1,
    },
    input: {
      radius: 4,
      width: 1,
      focusWidth: 2,
    },
    card: {
      radius: 8,
      width: 1,
    },
    dialog: {
      radius: 8,
      width: 0,
    },
    chip: {
      radius: 16,
      width: 1,
    },
  },
};

export type BorderTokens = typeof borderTokens;
