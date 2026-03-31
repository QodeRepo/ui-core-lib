import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tabs: {
      activeText: string;
      indicator: string;
    };
    input: {
      background: string;
      placeholder: string;
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
      background?: string;
      placeholder?: string;
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