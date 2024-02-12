import { Box, Button, IconButton, Typography } from "@mui/material";
import { Close, TextFields } from "@mui/icons-material";
import CollapsibleCard from "./CollapsibleCard";
import TextFieldWithCounter from "./TextFieldWithCounter";
import { useContext } from "react";
import { MessageContext } from "../context/messageContext";
import generateTemplate from "../utils/generateTemplate";
import sendMessageApi from "../services/messageApi";
import EditMessageHeader from "./EditMessageHeader";
import EditMessageButtons from "./EditMessageButtons";

const bodyCharacterLimit = 1024;
const footerCharacterLimit = 60;

type EditMessageProps = { onClose: () => void };

const EditMessage = ({ onClose }: EditMessageProps) => {
  const { message, setMessage, hasComponent } = useContext(MessageContext);

  const handleSave = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const template = generateTemplate(message, hasComponent);
    await sendMessageApi(template);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" flex={1}>
        <Typography variant="h6" component="h2">
          Edit Message
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Typography variant="body1" mt={6} mb={4} sx={{ fontWeight: 500 }}>
        Content
      </Typography>

      <Box component="form" onSubmit={handleSave}>
        <EditMessageHeader />

        <CollapsibleCard
          Icon={TextFields}
          title="Body message"
          info="This is the Body message"
          required
        >
          <TextFieldWithCounter
            rows={8}
            multiline
            required
            value={message.body}
            onChange={(evt) => setMessage({ body: evt.target.value })}
            placeholder="Enter text"
            limit={bodyCharacterLimit}
          />
          <Button sx={{ mt: 1 }}>Add variable</Button>
        </CollapsibleCard>

        <CollapsibleCard
          Icon={TextFields}
          title="Footer text"
          info="This is the Footer text"
          component="footer"
        >
          <TextFieldWithCounter
            value={message.footer || ""}
            onChange={(evt) => setMessage({ footer: evt.target.value })}
            placeholder="Enter text"
            limit={footerCharacterLimit}
          />
        </CollapsibleCard>

        <EditMessageButtons />

        <Button fullWidth variant="contained" type="submit">
          Save
        </Button>
        <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 6 }}>
          Delete
        </Button>
      </Box>
    </>
  );
};
export default EditMessage;
