declare module "@mui/material/styles" {
  interface TypeBackground {
    paperElevated: string;
    section: string;
    surface: string;
    muted: string;
  }

  interface Palette {
    tabs: {
      activeText: string;
      indicator: string;
    };
    input: {
      primary: {
        background: string;
        placeholder: string;
        text: string;
      };
      secondary: {
        background: string;
        text: string;
        placeholder: string;
      };
    };
    button: {
      primary: {
        background: string;
        text: string;
      };
      secondary: {
        background: string;
        text: string;
      };
    };
    indigo: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      main: string;
    };
  }

  interface PaletteOptions {
    tabs?: {
      activeText?: string;
      indicator?: string;
    };
    input?: {
      primary?: {
        background?: string;
        placeholder?: string;
        text?: string;
      };
      secondary?: {
        background?: string;
        text?: string;
        placeholder?: string;
      };
    };
    button?: {
      primary?: {
        background?: string;
        text?: string;
      };
      secondary?: {
        background?: string;
        text?: string;
      };
    };
    indigo?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      main?: string;
    };
  }
}

export {};