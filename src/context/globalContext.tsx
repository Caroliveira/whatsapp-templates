import { createContext, ReactNode, useState } from "react";
import { AlertColor } from "@mui/material";

type SnackbarType = {
  open: boolean;
  message?: string;
  severity?: AlertColor;
};

type GlobalContextType = {
  setSnackbar: (snackbar: SnackbarType) => void;
  snackbar: SnackbarType;
};

type GlobalContextProviderProps = { children: ReactNode };

const defaultGlobalContext: GlobalContextType = {
  setSnackbar: () => null,
  snackbar: { open: false },
};

export const GlobalContext = createContext(defaultGlobalContext);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [snackbar, setSnackbar] = useState(defaultGlobalContext.snackbar);

  return (
    <GlobalContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
    </GlobalContext.Provider>
  );
};
