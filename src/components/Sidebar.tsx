import { useState } from "react";
import {
  Box,
  Button,
  DrawerProps,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MiniDrawer from "./MiniDrawer.styled";
import EditMessage from "./EditMessage";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isMiniDrawer = isMobile && !mobileOpen;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) setMobileOpen(!mobileOpen);
  };

  const mobileDrawerProps: DrawerProps = {
    onTransitionEnd: () => setIsClosing(false),
    onClose: handleDrawerClose,
    ModalProps: { keepMounted: true },
  };

  const drawerProps: DrawerProps = {
    variant: "permanent",
    open: isMobile ? mobileOpen : true,
    ...(isMobile ? mobileDrawerProps : {}),
  };

  return (
    <MiniDrawer {...drawerProps}>
      <Toolbar />
      <Box
        display="flex"
        alignItems={isMiniDrawer ? "center" : "flex-start"}
        justifyContent={"center"}
        padding={isMiniDrawer ? 0 : 6}
        height="100%"
      >
        {isMiniDrawer ? (
          <Button
            onClick={handleDrawerToggle}
            sx={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}
          >
            Edit Message
          </Button>
        ) : (
          <Box flex={1}>
            <EditMessage onClose={handleDrawerToggle} />
          </Box>
        )}
      </Box>
    </MiniDrawer>
  );
};
export default Sidebar;
