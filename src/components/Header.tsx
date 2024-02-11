import { Close } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      color="default"
      position="static"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography component="h1" variant="body1" flex={1}>
          Create a Campaign
        </Typography>
        <IconButton>
          <Close />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
