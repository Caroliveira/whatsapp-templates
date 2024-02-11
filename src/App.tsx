import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MessageExample from "./components/MessageExample";
import NavigationBar from "./components/NavigationBar";
import { drawerWidth } from "./components/MiniDrawer.styled";

const Dashboard = () => {
  return (
    <Box display="flex">
      <NavigationBar />
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Header />
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
      </Box>
    </Box>
  );
};

export default Dashboard;
