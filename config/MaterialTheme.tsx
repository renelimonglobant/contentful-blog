import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
import * as React from 'react';
import { PaletteMode } from '@mui/material';
//import { PaletteType } from ''
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// <'light' | 'dark'>
//   const colorMode = React.useContext(ColorModeContext);
const mode: PaletteMode = "light"
export const MaterialTheme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: purple[900],
            // darker: "#053e85",
          },
          other: {
            main: "#d53e25",
            darker: orange[100],
          },
          secondary: {
            main: "#33CCFF",
            contrastText: "#f1d",
          },
        }
      : {
          primary: {
            main: purple[500],
            // darker: "#053e85",
          },
          other: {
            main: "#d53e25",
            darker: orange[700],
          },
          secondary: {
            main: "#11ddff",
            contrastText: "#2fd",
          },
        }),
  },
});