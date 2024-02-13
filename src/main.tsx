import React from "react";
import { pdfjs } from "react-pdf";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { blueGrey } from "@mui/material/colors";
import { GlobalContextProvider } from "./context/globalContext";
import App from "./App.tsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: { main: "#007DFF" },
    background: { default: blueGrey["50"] },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
