import { Box, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MessageExample from "./components/MessageExample";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ height: "100vh" }}>
        <Toolbar />
        <Box component="main">
          <MessageExample />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;
