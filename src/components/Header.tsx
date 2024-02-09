import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Typography component="h1" variant="body1">
          Create a Campaign
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
