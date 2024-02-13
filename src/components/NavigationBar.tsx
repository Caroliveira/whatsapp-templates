import { Box, Divider, IconButton, Toolbar } from "@mui/material";
import { Campaign, Settings } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import connectlyLogo from "/connectly.svg";

const NavigationBar = () => {
  return (
    <Box
      component="aside"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      color="white"
      sx={{ backgroundColor: grey["900"] }}
    >
      <Box
        component="nav"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Toolbar>
          <Box
            component="img"
            src={connectlyLogo}
            alt="Connectly logo"
            width={26}
          />
        </Toolbar>
        <Divider sx={{ borderColor: grey["700"], width: "100%" }} />
        <IconButton color="inherit" aria-label="create campaign" sx={{ py: 4 }}>
          <Campaign />
        </IconButton>
      </Box>
      <Box>
        <IconButton color="inherit" aria-label="settings">
          <Settings />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavigationBar;
