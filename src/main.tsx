import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { blueGrey } from "@mui/material/colors";
import { MessageContextProvider } from "./context/messageContext.tsx";
import App from "./App.tsx";

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
      <MessageContextProvider>
        <App />
      </MessageContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
