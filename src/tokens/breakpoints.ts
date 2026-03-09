// Breakpoint Tokens - Design System Responsive Breakpoints
export const breakpointTokens = {
  // Breakpoint values (in pixels)
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  
  // Container max widths
  container: {
    xs: 444,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  
  // Media query helpers
  up: {
    xs: '@media (min-width:0px)',
    sm: '@media (min-width:600px)',
    md: '@media (min-width:900px)',
    lg: '@media (min-width:1200px)',
    xl: '@media (min-width:1536px)',
  },
  
  down: {
    xs: '@media (max-width:599.95px)',
    sm: '@media (max-width:899.95px)',
    md: '@media (max-width:1199.95px)',
    lg: '@media (max-width:1535.95px)',
    xl: '@media (max-width:9999px)',
  },
  
  between: {
    'xs-sm': '@media (min-width:0px) and (max-width:899.95px)',
    'sm-md': '@media (min-width:600px) and (max-width:1199.95px)',
    'md-lg': '@media (min-width:900px) and (max-width:1535.95px)',
    'lg-xl': '@media (min-width:1200px)',
  },
};

export type BreakpointTokens = typeof breakpointTokens;
