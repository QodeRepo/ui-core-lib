import { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { ReactNode } from 'react';
import { 
  colorTokens, 
  spacingTokens, 
  typographyTokens, 
  shadowTokens, 
  borderTokens,
  transitionTokens,
  breakpointTokens,
  zIndexTokens 
} from '../../tokens';

type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

type MyThemeProviderProps = {
  children: ReactNode;
};

const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: colorTokens.primary.main,
            light: colorTokens.primary.light,
            dark: colorTokens.primary.dark,
            contrastText: colorTokens.primary.contrastText,
          },
          secondary: {
            main: colorTokens.secondary.main,
            light: colorTokens.secondary.light,
            dark: colorTokens.secondary.dark,
            contrastText: colorTokens.secondary.contrastText,
          },
          success: {
            main: colorTokens.success.main,
            light: colorTokens.success.light,
            dark: colorTokens.success.dark,
            contrastText: colorTokens.success.contrastText,
          },
          error: {
            main: colorTokens.error.main,
            light: colorTokens.error.light,
            dark: colorTokens.error.dark,
            contrastText: colorTokens.error.contrastText,
          },
          warning: {
            main: colorTokens.warning.main,
            light: colorTokens.warning.light,
            dark: colorTokens.warning.dark,
            contrastText: colorTokens.warning.contrastText,
          },
          info: {
            main: colorTokens.info.main,
            light: colorTokens.info.light,
            dark: colorTokens.info.dark,
            contrastText: colorTokens.info.contrastText,
          },
          grey: colorTokens.grey,
          text: mode === 'light' ? colorTokens.text.light : colorTokens.text.dark,
          background: mode === 'light' ? colorTokens.background.light : colorTokens.background.dark,
          divider: mode === 'light' ? colorTokens.divider.light : colorTokens.divider.dark,
          action: mode === 'light' ? colorTokens.action.light : colorTokens.action.dark,
        },
        typography: {
          fontFamily: typographyTokens.fontFamily.primary,
          fontSize: typographyTokens.fontSize.base,
          fontWeightLight: typographyTokens.fontWeight.light,
          fontWeightRegular: typographyTokens.fontWeight.regular,
          fontWeightMedium: typographyTokens.fontWeight.medium,
          fontWeightBold: typographyTokens.fontWeight.bold,
          h1: {
            fontSize: typographyTokens.variants.h1.fontSize,
            fontWeight: typographyTokens.variants.h1.fontWeight,
            lineHeight: typographyTokens.variants.h1.lineHeight,
            letterSpacing: typographyTokens.variants.h1.letterSpacing,
          },
          h2: {
            fontSize: typographyTokens.variants.h2.fontSize,
            fontWeight: typographyTokens.variants.h2.fontWeight,
            lineHeight: typographyTokens.variants.h2.lineHeight,
            letterSpacing: typographyTokens.variants.h2.letterSpacing,
          },
          h3: {
            fontSize: typographyTokens.variants.h3.fontSize,
            fontWeight: typographyTokens.variants.h3.fontWeight,
            lineHeight: typographyTokens.variants.h3.lineHeight,
            letterSpacing: typographyTokens.variants.h3.letterSpacing,
          },
          h4: {
            fontSize: typographyTokens.variants.h4.fontSize,
            fontWeight: typographyTokens.variants.h4.fontWeight,
            lineHeight: typographyTokens.variants.h4.lineHeight,
            letterSpacing: typographyTokens.variants.h4.letterSpacing,
          },
          h5: {
            fontSize: typographyTokens.variants.h5.fontSize,
            fontWeight: typographyTokens.variants.h5.fontWeight,
            lineHeight: typographyTokens.variants.h5.lineHeight,
            letterSpacing: typographyTokens.variants.h5.letterSpacing,
          },
          h6: {
            fontSize: typographyTokens.variants.h6.fontSize,
            fontWeight: typographyTokens.variants.h6.fontWeight,
            lineHeight: typographyTokens.variants.h6.lineHeight,
            letterSpacing: typographyTokens.variants.h6.letterSpacing,
          },
          subtitle1: typographyTokens.variants.subtitle1,
          subtitle2: typographyTokens.variants.subtitle2,
          body1: typographyTokens.variants.body1,
          body2: typographyTokens.variants.body2,
          button: typographyTokens.variants.button,
          caption: typographyTokens.variants.caption,
          overline: typographyTokens.variants.overline,
        },
        spacing: spacingTokens.baseUnit,
        shape: {
          borderRadius: borderTokens.radius.md,
        },
        shadows: [
          shadowTokens.elevation[0] as 'none',
          shadowTokens.elevation[1],
          shadowTokens.elevation[2],
          shadowTokens.elevation[3],
          shadowTokens.elevation[4],
          shadowTokens.elevation[5],
          shadowTokens.elevation[6],
          shadowTokens.elevation[7],
          shadowTokens.elevation[8],
          shadowTokens.elevation[9],
          shadowTokens.elevation[10],
          shadowTokens.elevation[11],
          shadowTokens.elevation[12],
          shadowTokens.elevation[13],
          shadowTokens.elevation[14],
          shadowTokens.elevation[15],
          shadowTokens.elevation[16],
          shadowTokens.elevation[17],
          shadowTokens.elevation[18],
          shadowTokens.elevation[19],
          shadowTokens.elevation[20],
          shadowTokens.elevation[21],
          shadowTokens.elevation[22],
          shadowTokens.elevation[23],
          shadowTokens.elevation[24],
        ],
        transitions: {
          duration: {
            shortest: transitionTokens.duration.shortest,
            shorter: transitionTokens.duration.shorter,
            short: transitionTokens.duration.short,
            standard: transitionTokens.duration.standard,
            complex: transitionTokens.duration.complex,
            enteringScreen: transitionTokens.duration.enteringScreen,
            leavingScreen: transitionTokens.duration.leavingScreen,
          },
          easing: {
            easeInOut: transitionTokens.easing.easeInOut,
            easeOut: transitionTokens.easing.easeOut,
            easeIn: transitionTokens.easing.easeIn,
            sharp: transitionTokens.easing.sharp,
          },
        },
        breakpoints: {
          values: breakpointTokens.values,
        },
        zIndex: zIndexTokens,
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: borderTokens.component.button.radius,
                textTransform: 'none',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: borderTokens.component.card.radius,
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                borderRadius: borderTokens.component.dialog.radius,
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: borderTokens.component.input.radius,
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
