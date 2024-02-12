import { useAtom } from "jotai";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Message } from "@mui/icons-material";
import { grey, indigo } from "@mui/material/colors";
import {
  MessageBubble,
  MessageButton,
  MessageDivider,
  MessageTitle,
} from "./MessageExample.styled";
import {
  bodyMessageAtom,
  buttonsAtom,
  footerMessageAtom,
} from "../atoms/messageAtoms";
import MessageMediaPreview from "./MessageMediaPreview";

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
          <MessageMediaPreview />
          <MessageTitle>Body message</MessageTitle>
          <Typography variant="body2">{bodyMessage}</Typography>
          {footerMessage && (
            <>
              <MessageDivider />
              <MessageTitle>Footer</MessageTitle>
              <Typography variant="body2" color="gray">
                {footerMessage}
              </Typography>
            </>
          )}
        </MessageBubble>
        {buttons.map((btn, i) => (
          <MessageButton key={`messageExampleBtn${i}`} fullWidth>
            {btn}
          </MessageButton>
        ))}
      </Box>
    </Paper>
  );
};

export default MessageExample;
