import { createTheme } from "@mui/material";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#01e281",
        },
        background: {
          topline: "#122d40",
          paper: "#f4f4f4",
        },
        text: {
          topline: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#01e281",
        },
        secondary: {
          main: "#C2185B",
        },
        background: {
          default: "#263238",
          paper: "#37474F",
          topline: "#122d40",
        },
        text: {
          topline: "#ffffff",
        },
      },
    },
  },
});
