import { useAtom } from "jotai";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { Message } from "@mui/icons-material";
import { grey, indigo } from "@mui/material/colors";
import MessageBubble from "./MessageBubble.styled";
import {
  bodyMessageAtom,
  buttonsAtom,
  footerMessageAtom,
} from "../atoms/messageAtoms";

const MessageExample = () => {
  const [bodyMessage] = useAtom(bodyMessageAtom);
  const [footerMessage] = useAtom(footerMessageAtom);
  const [buttons] = useAtom(buttonsAtom);

  return (
    <Paper sx={{ width: 304, borderRadius: 2, p: 3 }}>
      <Box display="flex" alignItems="center" sx={{ pb: 3 }}>
        <Avatar sx={{ backgroundColor: indigo["300"], mr: 2 }}>
          <Message sx={{ color: "white" }} />
        </Avatar>
        <Typography variant="h6" component="h2">
          Message Example
        </Typography>
      </Box>
      <Box p={3} borderRadius={2} sx={{ backgroundColor: grey["100"] }}>
        <MessageBubble>
          <Typography variant="body1">{bodyMessage}</Typography>
          <Typography variant="body1">{footerMessage}</Typography>
        </MessageBubble>
        {buttons.map((btn) => (
          <Button fullWidth>{btn}</Button>
        ))}
      </Box>
    </Paper>
  );
};

export default MessageExample;
