// Color Tokens - Design System Color Palette (aligned to QAISS / MD3 spec)
//
// Architecture: Internal MD3-aligned palette → exported MUI-compatible structure.
// Each hex value is defined ONCE in the internal palette. The exported object
// references those constants so changes propagate automatically.

// ─── Internal Palette (single source of truth) ──────────────────────────────

const surface = {
  default:          "#121317",  // MD3: surface
  containerLowest:  "#0d0e12",  // MD3: surface_container_lowest
  containerLow:     "#1a1b20",  // MD3: surface_container_low
  container:        "#1f1f24",  // MD3: surface_container
  containerHigh:    "#292a2e",  // MD3: surface_container_high
  containerHighest: "#343439",  // MD3: surface_container_highest
  bright:           "#38393d",  // MD3: surface_bright
  dim:              "#121317",  // MD3: surface_dim
} as const;

const onSurface = {
  default: "#e3e2e7",  // MD3: on_surface
  variant: "#c7c5d0",  // MD3: on_surface_variant
} as const;

const _outline = {
  default: "#918f9a",  // MD3: outline
  variant: "#46464f",  // MD3: outline_variant
} as const;

const brand = {
  primary:            "#e1dfff",  // MD3: primary
  primaryContainer:   "#c0c1ff",  // MD3: primary_container
  primaryFixed:       "#e1e0ff",  // MD3: primary_fixed
  onPrimary:          "#292b5e",  // MD3: on_primary
  onPrimaryContainer: "#2724b8",  // QAISS: on_primary (button text)

  secondary:            "#c4c6d5",  // MD3: secondary
  secondaryContainer:   "#434653",  // MD3: secondary_container
  secondaryFixed:       "#e0e1f1",  // MD3: secondary_fixed
  onSecondary:          "#2d303c",  // MD3: on_secondary
  onSecondaryFixed:     "#181b26",  // MD3: on_secondary_fixed
} as const;

const form = {
  muted: "#6b7280",
} as const;

const badge = {
  hero: {
    background: "rgba(225, 223, 255, 0.1)",
    border: "rgba(225, 223, 255, 0.2)",
    icon: brand.primary,
  },
  critical: {
    background: "rgba(255, 180, 171, 0.1)",
    border: "rgba(255, 180, 171, 0.2)",
    text: "#ffb4ab",
  },
  targetList: {
    background: "rgba(192, 193, 255, 0.2)",
    text: brand.primaryContainer,
  },
  stepLabel: brand.primary,
  subtleText: onSurface.variant,
} as const;

const header = {
  apiTargets: "rgba(34, 37, 49, 0.6)",
  apiTargetsSubtitle: "#a8aab9",
} as const;

const status = {
  secure:             "#4ade80",  // QAISS: status-secure
  secureLight:        "#86efac",
  secureDark:         "#15803d",
  secureContrastText: "#052e16",

  critical:             "#ef4444",  // QAISS: status-critical
  criticalLight:        "#ffb4ab",  // MD3: error
  criticalDark:         "#93000a",  // MD3: error_container

  warning:              "#facc15",  // QAISS: status-warning
  warningLight:         "#fde047",
  warningDark:          "#a16207",
  warningContrastText:  "#422006",
  warningSurface:       "#fefce8",
  warningSurfaceAlt:    "#fef9c3",

  info:              "#22d3ee",  // QAISS: status-info
  infoLight:         "#67e8f9",
  infoDark:          "#0e7490",
  infoContrastText:  "#083344",
  infoSurface:       "#cffafe",
} as const;

const white = "#ffffff";
const black = "#000000";

// ─── Exported Token Object ──────────────────────────────────────────────────

export const colorTokens = {
  // ─── Palette ───

  primary: {
    main: brand.primary,
    light: brand.primaryContainer,
    dark: brand.onPrimary,
    contrastText: brand.onPrimary,
  },

  secondary: {
    main: brand.secondary,
    light: brand.secondaryFixed,
    dark: brand.onSecondary,
    contrastText: brand.onSecondaryFixed,
  },

  indigo: {
    100: brand.primaryFixed,
    200: brand.primaryContainer,
    300: "#9fa3ff",
    400: "#7c82ff",
    500: "#5a60ff",
    main: "#5a60ff",
  },

  grey: {
    100: onSurface.default,
    300: onSurface.variant,
    500: _outline.default,
    600: _outline.variant,
    700: surface.bright,
    800: surface.containerHighest,
    900: surface.container,
  },

  common: { black, white },

  // ─── Semantic (status) ───

  success: {
    main: status.secure,
    light: status.secureLight,
    dark: status.secureDark,
    contrastText: status.secureContrastText,
  },

  error: {
    main: status.critical,
    light: status.criticalLight,
    dark: status.criticalDark,
    contrastText: white,
  },

  warning: {
    50: status.warningSurface,
    100: status.warningSurfaceAlt,
    main: status.warning,
    light: status.warningLight,
    dark: status.warningDark,
    contrastText: status.warningContrastText,
  },

  info: {
    100: status.infoSurface,
    main: status.info,
    light: status.infoLight,
    dark: status.infoDark,
    contrastText: status.infoContrastText,
  },

  // ─── Surface (MD3) ───

  outline: {
    default: _outline.default,
    variant: _outline.variant,
  },

  background: {
    light: {
      default: white,
      paper: white,
      paperElevated: "#f5f5f5",
      section: "#f9fafb",
      surface: white,
      muted: "#f5f5f5",
    },
    dark: {
      default: surface.default,
      paper: surface.container,
      paperElevated: surface.containerLowest,
      section: surface.containerLow,
      surface: surface.containerHigh,
      muted: surface.dim,
    },
  },

  text: {
    light: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    dark: {
      primary: onSurface.default,
      secondary: onSurface.variant,
      disabled: _outline.default,
    },
  },

  divider: {
    light: "rgba(0, 0, 0, 0.12)",
    dark: "rgba(70, 70, 79, 0.35)",
  },

  action: {
    light: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      focus: "rgba(0, 0, 0, 0.12)",
    },
    dark: {
      hover: surface.bright,
      selected: "rgba(192, 193, 255, 0.1)",
      disabled: "rgba(255, 255, 255, 0.3)",
      focus: "rgba(255, 255, 255, 0.12)",
    },
  },

  // ─── Component ───

  tabs: {
    light: {
      activeText: "rgba(0, 0, 0, 0.87)",
      indicator: brand.primaryContainer,
    },
    dark: {
      activeText: onSurface.default,
      indicator: brand.primaryContainer,
    },
  },

  input: {
    light: {
      primary: {
        background: white,
        text: _outline.variant,
        placeholder: _outline.variant,
      },
      secondary: {
        background: white,
        text: "rgba(0, 0, 0, 0.8)",
        placeholder: "rgba(0, 0, 0, 0.45)",
      },
    },
    dark: {
      primary: {
        background: surface.containerHighest,
        text: white,
        placeholder: form.muted,
      },
      secondary: {
        background: white,
        text: _outline.variant,
        placeholder: _outline.variant,
      },
    },
  },

  button: {
    light: {
      primary: {
        background: brand.primaryFixed,
        text: brand.onPrimaryContainer,
      },
      secondary: {
        background: brand.secondaryFixed,
        text: brand.secondaryContainer,
      },
    },
    dark: {
      primary: {
        background: brand.primaryContainer,
        text: brand.onPrimaryContainer,
      },
      secondary: {
        background: surface.containerHighest,
        text: onSurface.default,
      },
    },
  },

  badge,
  header,
} as const;

export type ColorTokens = typeof colorTokens;
