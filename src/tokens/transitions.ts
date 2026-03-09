// Transition Tokens - Design System Animation Timings
export const transitionTokens = {
  // Duration (in milliseconds)
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  
  // Easing Functions
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  
  // Common Transitions
  create: {
    all: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export type TransitionTokens = typeof transitionTokens;
