import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tabs: {
      activeText: string;
      indicator: string;
    };
    input: {
      background: string;
      placeholder: string;
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
  }
}