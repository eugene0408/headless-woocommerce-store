import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { LoadingCircular } from "./components";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

import App from "./App.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C0CA33",
    },
    secondary: {
      main: "#C2185B",
    },
  },
  colorSchemes: {
    light: true,
    dark: true,
    cssVariables: {
      colorSchemeSelector: "class",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingCircular />} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme} defaultMode={"system"}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
