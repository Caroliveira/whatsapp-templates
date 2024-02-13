import { useContext } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
import { MessageContextProvider } from "./context/messageContext";
import { GlobalContext } from "./context/globalContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MessageExample from "./components/MessageExample";
import NavigationBar from "./components/NavigationBar";
import { drawerWidth } from "./components/MiniDrawer.styled";

const Dashboard = () => {
  const { snackbar, setSnackbar } = useContext(GlobalContext);

  return (
    <Box display="flex" overflow="hidden">
      <NavigationBar />
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Header />
        <MessageContextProvider>
          <Box component="main" flexGrow={1} display="flex">
            <Sidebar />
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 3,
                height: "100%",
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <MessageExample />
            </Box>
          </Box>
        </MessageContextProvider>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() => setSnackbar({ open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;
