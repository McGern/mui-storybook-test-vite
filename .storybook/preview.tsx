import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: {
//       light: lightTheme,
//       dark: darkTheme,
//     },
//     defaultTheme: "light",
//     Provider: ThemeProvider,
//     GlobalStyles: CssBaseline,
//   }),
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
