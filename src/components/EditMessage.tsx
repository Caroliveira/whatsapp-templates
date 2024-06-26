import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Close, TextFields } from "@mui/icons-material";
import { MessageContext } from "../context/messageContext";
import useHandleResponse from "../hooks/useHandleResponse";
import generateTemplate from "../utils/generateTemplate";
import sendMessageApi from "../services/messageApi";
import TextFieldWithCounter from "./TextFieldWithCounter";
import EditMessageButtons from "./EditMessageButtons";
import EditMessageHeader from "./EditMessageHeader";
import CollapsibleCard from "./CollapsibleCard";

const bodyCharacterLimit = 1024;
const footerCharacterLimit = 60;

type EditMessageProps = { onClose: () => void };

const EditMessage = ({ onClose }: EditMessageProps) => {
  const { message, setMessage, hasComponent } = useContext(MessageContext);
  const [emptyBody, setEmptyBody] = useState(false);
  const { handleResponse } = useHandleResponse();

  const updateBody = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({ body: evt.target.value });
    setEmptyBody(false);
  };

  const handleSave = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const template = generateTemplate(message, hasComponent);
    if ("emptyBody" in template) setEmptyBody(true);
    else {
      const response = await sendMessageApi(template);
      handleResponse(response);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" flex={1}>
        <Typography variant="h6" component="h2">
          Edit Message
        </Typography>
        <IconButton onClick={onClose} aria-label="Close edit message">
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
            value={message.body}
            onChange={updateBody}
            placeholder="Enter text"
            limit={bodyCharacterLimit}
            error={emptyBody}
            helperText={emptyBody ? "Please fill out this field" : ""}
            aria-label="Body message"
          />
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
            aria-label="Footer text"
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
