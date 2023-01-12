import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato, sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#2196f3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1769aa",
      contrastText: "#ff007d",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
