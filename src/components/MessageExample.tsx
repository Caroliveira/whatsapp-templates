import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Message } from "@mui/icons-material";
import { grey, indigo } from "@mui/material/colors";
import {
  MessageBubble,
  MessageButton,
  MessageDivider,
  MessageTitle,
} from "./MessageExample.styled";
import MessageMediaPreview from "./MessageMediaPreview";
import { useContext } from "react";
import { MessageContext } from "../context/messageContext";

const MessageExample = () => {
  const { message } = useContext(MessageContext);

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
          <MessageMediaPreview />
          <MessageTitle>Body message</MessageTitle>
          <Typography variant="body2">{message.body}</Typography>
          {message.footer && (
            <>
              <MessageDivider />
              <MessageTitle>Footer</MessageTitle>
              <Typography variant="body2" color="gray">
                {message.footer}
              </Typography>
            </>
          )}
        </MessageBubble>
        {message.buttons.map((btn, i) => (
          <MessageButton key={`messageExampleBtn${i}`} fullWidth>
            {btn}
          </MessageButton>
        ))}
      </Box>
    </Paper>
  );
};

export default MessageExample;
