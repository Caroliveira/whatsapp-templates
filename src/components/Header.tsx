import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import connectlyLogo from "/connectly.svg";

const Header = () => {
  return (
    <AppBar color="default">
      <Toolbar>
        <Box
          component="img"
          sx={{ marginRight: "36px" }}
          src={connectlyLogo}
          alt="Connectly logo"
        />
        <Typography component="h1" variant="body1">
          Create a Campaign
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
