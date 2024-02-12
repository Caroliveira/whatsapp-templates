import { Box, Button, Divider, Typography, styled } from "@mui/material";

export const MessageBubble = styled(Box)({
  position: "relative",
  filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1))",
  padding: 8,
  backgroundColor: "white",
  borderRadius: 8,
  "&::before": {
    content: '""',
    position: "absolute",
    border: "6px solid",
    borderBottom: "0",
    borderColor: "white white transparent transparent",
    left: -6,
    top: 0,
  },
});

export const MessageTitle = styled(Typography)({
  fontSize: 12,
  borderRadius: 4,
  marginBottom: 4,
  padding: "4px 12px",
  width: "fit-content",
  backgroundColor: "#F5F5F5",
  textTransform: "none",
  color: "#41C352",
});

export const MessageDivider = styled(Divider)({
  borderColor: "#25D366",
  borderStyle: "dashed",
  margin: "8px 0",
});

export const MessageButton = styled(Button)({
  backgroundColor: "white",
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
  marginTop: 8,
  textTransform: "none",
});
