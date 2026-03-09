// Spacing Tokens - Design System Spacing Scale
export const spacingTokens = {
  // Base spacing unit (in pixels)
  baseUnit: 8,
  
  // Spacing scale (multipliers of base unit)
  scale: {
    0: 0,      // 0px
    0.5: 0.5,  // 4px
    1: 1,      // 8px
    1.5: 1.5,  // 12px
    2: 2,      // 16px
    2.5: 2.5,  // 20px
    3: 3,      // 24px
    3.5: 3.5,  // 28px
    4: 4,      // 32px
    5: 5,      // 40px
    6: 6,      // 48px
    7: 7,      // 56px
    8: 8,      // 64px
    9: 9,      // 72px
    10: 10,    // 80px
    12: 12,    // 96px
    16: 16,    // 128px
    20: 20,    // 160px
    24: 24,    // 192px
    32: 32,    // 256px
  },
  
  // Named spacing tokens for common use cases
  named: {
    xxs: 4,    // 0.5 * base
    xs: 8,     // 1 * base
    sm: 16,    // 2 * base
    md: 24,    // 3 * base
    lg: 32,    // 4 * base
    xl: 40,    // 5 * base
    xxl: 48,   // 6 * base
    xxxl: 64,  // 8 * base
  },
  
  // Component-specific spacing
  component: {
    padding: {
      button: {
        small: '4px 10px',
        medium: '6px 16px',
        large: '8px 22px',
      },
      input: {
        small: '4px 8px',
        medium: '8px 12px',
        large: '12px 16px',
      },
      card: {
        default: 16,
        dense: 8,
        comfortable: 24,
      },
      dialog: {
        default: 24,
        dense: 16,
      },
    },
    margin: {
      section: 32,
      subsection: 24,
      element: 16,
    },
    gap: {
      tight: 4,
      normal: 8,
      relaxed: 16,
      loose: 24,
    },
  },
};

export type SpacingTokens = typeof spacingTokens;
