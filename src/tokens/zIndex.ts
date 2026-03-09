// Z-Index Tokens - Design System Stacking Order
export const zIndexTokens = {
  // Base z-index values
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
  
  // Custom z-index layers
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modalForeground: 1050,
  popover: 1060,
  overlay: 1070,
  max: 9999,
};

export type ZIndexTokens = typeof zIndexTokens;
