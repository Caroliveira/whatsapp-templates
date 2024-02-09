import { Box, styled } from "@mui/material";

const MessageBubble = styled(Box)({
  position: "relative",
  filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1))",
  padding: 6,
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

export default MessageBubble;
