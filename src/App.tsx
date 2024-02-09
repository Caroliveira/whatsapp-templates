import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MessageExample from "./components/MessageExample";
import NavigationBar from "./components/NavigationBar";

const Dashboard = () => {
  return (
    <Box display="flex">
      <NavigationBar />
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Header />
        <Box component="main" flexGrow={1}>
          <MessageExample />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;
