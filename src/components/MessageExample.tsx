import { useContext } from "react";
import { Message } from "@mui/icons-material";
import { grey, indigo } from "@mui/material/colors";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { MessageContext } from "../context/messageContext";
import MessageMediaPreview from "./MessageMediaPreview";
import {
  MessageBubble,
  MessageButton,
  MessageDivider,
  MessageTitle,
} from "./MessageExample.styled";

const MessageExample = () => {
  const { message, hasComponent } = useContext(MessageContext);

  return (
    <Paper sx={{ width: 304, borderRadius: 2, p: 3 }}>
      <Box display="flex" alignItems="center" sx={{ pb: 3 }}>
        <Avatar
          sx={{ backgroundColor: indigo["300"], mr: 2 }}
          aria-hidden="true"
        >
          <Message sx={{ color: "white" }} />
        </Avatar>
        <Typography variant="h6" component="h2">
          Message Example
        </Typography>
      </Box>
      <Box p={3} borderRadius={2} sx={{ backgroundColor: grey["100"] }}>
        <MessageBubble>
          {hasComponent.header && <MessageMediaPreview />}
          <MessageTitle>Body message</MessageTitle>
          <Typography variant="body2">{message.body}</Typography>
          {hasComponent.footer && (
            <>
              <MessageDivider />
              <MessageTitle>Footer</MessageTitle>
              <Typography variant="body2" color="gray">
                {message.footer}
              </Typography>
            </>
          )}
        </MessageBubble>
        {hasComponent.buttons &&
          message.buttons.map((btn, i) => (
            <MessageButton key={`messageExampleBtn${i}`} fullWidth>
              {btn}
            </MessageButton>
          ))}
      </Box>
    </Paper>
  );
};

export default MessageExample;
