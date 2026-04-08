// Typography Tokens - Design System Typography Scale
export const typographyTokens = {
  // Font Families (role-based: primary for body/UI, secondary for headings, mono for code)
  fontFamily: {
    primary: '"Inter", "Helvetica", "Arial", sans-serif',
    secondary: '"Inter", "Helvetica", "Arial", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  // Font Weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  // Font Sizes (in pixels, 4px grid)
  fontSize: {
    xs: 8,
    sm: 12,
    base: 16,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '5xl': 48,
  },

  // Line Heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing (in em units)
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Typography Variants (MUI-compatible)
  variants: {
    h1: {
      fontSize: 96,
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: '-0.015625em',
    },
    h2: {
      fontSize: 60,
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase' as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase' as const,
    },
  },
};

export type TypographyTokens = typeof typographyTokens;
