import { CSSObject, Drawer, Theme, styled } from "@mui/material";

export const drawerWidth = 360;
const miniDrawerWidth = 50;
const xsMiniDrawerWidth = 42;

const openedMixin = (theme: Theme): CSSObject => ({
  left: xsMiniDrawerWidth,
  width: `calc(100% - ${xsMiniDrawerWidth}px)`,
  boxSizing: "border-box",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    left: miniDrawerWidth,
  },
  "&::-webkit-scrollbar": {
    width: 6,
    borderRadius: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  boxSizing: "border-box",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  left: xsMiniDrawerWidth,
  width: xsMiniDrawerWidth,
  [theme.breakpoints.up("sm")]: {
    width: miniDrawerWidth,
    left: miniDrawerWidth,
  },
});

const MiniDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  padding: 24,
  ...(open
    ? { ...openedMixin(theme), "& .MuiDrawer-paper": openedMixin(theme) }
    : { ...closedMixin(theme), "& .MuiDrawer-paper": closedMixin(theme) }),
}));

export default MiniDrawer;
