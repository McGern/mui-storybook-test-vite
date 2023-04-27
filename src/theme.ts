// src/themes.js

import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink, brown, grey } from "@mui/material/colors";

// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: cyan["A200"],
//     },
//     secondary: {
//       main: pink["A400"],
//     },
//   },
// });

export const theme = createTheme({
  palette: {
    primary: {
      main: pink["300"],
    },
    secondary: {
      main: blueGrey["A200"],
    },
    error: {
      main: "#f00",
    },
    success: {
      main: "#0f0",
    },
    warning: {
      main: "#0ff",
    },
    info: {
      main: "#00f",
    },
    text: {
      primary: brown["500"],
      secondary: "#000",
      disabled: grey["800"],
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    button: {
      fontSize: "1rem",
      "&:disabled": {
        color: "white",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          borderRadius: "100px",
          minWidth: "150px",
          padding: "11px 16px",
        },
        outlined: {
          borderRadius: "100px",
          minWidth: "150px",
          padding: "10px 16px",
        },
        text: {
          textAlign: "left",
        },
        sizeSmall: {
          minWidth: "90px",
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#00f",
            boxShadow: "none",
          },
        },
        outlinedPrimary: {
          boxShadow: "none",
          "&:hover": {
            color: "#00f",
            borderColor: "#00f",
            boxShadow: "none",
            backgroundColor: "#fff",
          },
          "&.Mui-disabled": {
            color: "#aaa",
            borderColor: "#aaa",
            backgroundColor: "#fff",
          },
        },
        containedSecondary: {
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#00f",
            boxShadow: "none",
          },
        },
        outlinedSecondary: {
          color: "#ff",
          boxShadow: "none",
          "&:hover": {
            color: "#00f",
            borderColor: "#00f",
            boxShadow: "none",
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});
