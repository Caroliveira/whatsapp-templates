import { blueGrey } from "@mui/material/colors";
import { Box, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ backgroundColor: blueGrey["50"], height: "100vh" }}>
        <Toolbar />
        <Box component="main">{/* Content here */}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;
