import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
import * as React from "react";
import { PaletteMode } from "@mui/material";
// import MontserratRegular from "../assets/Montserrat/static/Montserrat-Regular.ttf";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

declare module "@mui/material/styles" {
  interface Theme {
    global: {
      mainBlue: string;
      secondaryBlue: string;
      terciaryBlue: string;
      forthyBlue: string;
      lightGray: string;
    };
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    global?: {
      mainBlue?: string;
      secondaryBlue?: string;
      terciaryBlue?: string;
      forthyBlue?: string;
      lightGray?: string;
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    paragraph: React.CSSProperties;
    blueTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    paragraph?: React.CSSProperties;
    blueTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    paragraph: true;
    blueTitle: true;
  }
}

const mode: PaletteMode = "light";
export const MaterialTheme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    // fontFamily: ["Montserrat", "Poppins", "sans-serif"].join(","),
    h1: { fontFamily: "Montserrat, sans-serif" },
    h2: { fontFamily: "Montserrat, sans-serif" },
    h3: { fontFamily: "Montserrat, sans-serif" },
    h4: { fontFamily: "Montserrat, sans-serif" },
    h5: { fontFamily: "Montserrat, sans-serif" },
    h6: { fontFamily: "Montserrat, sans-serif" },
    subtitle1: { fontFamily: "Montserrat, sans-serif" },
    subtitle2: { fontFamily: "Montserrat, sans-serif" },
    body1: { fontFamily: "Montserrat, sans-serif" },
    body2: { fontFamily: "Poppins, sans-serif" },
    button: { fontFamily: "Montserrat, sans-serif" },
    caption: { fontFamily: "Montserrat, sans-serif" },
    overline: { fontFamily: "Montserrat, sans-serif" },
    paragraph: {
      fontFamily: "Poppins, sans-serif",
    },
    blueTitle: {
      color: "#03045E",
      fontSize: "1.5rem",
      lineHeight: "1.334",
      margin: 0,
      fontFamily: "Montserrat,sans-serif",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), local('Montserrat-Regular'), url('/fonts/Montserrat/static/Montserrat-Regular.ttf') format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), local('Poppins-Regular'), url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Redressed';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Redressed'), local('Redressed-Regular'), url('/fonts/Redressed/Redressed-Regular.ttf') format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  global: {
    mainBlue: "#03045E",
    secondaryBlue: "#00B4D8",
    terciaryBlue: "#90E0EF",
    forthyBlue: "#CAF0F8",
    lightGray: "#EEE",
  },
  status: {
    danger: orange[500],
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#03045E",
            contrastText: "#0DD",
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
          neutral: {
            main: "#64748B",
            contrastText: "#fff",
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
