import { useContext } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Crop75, DeleteOutline } from "@mui/icons-material";
import { MessageContext } from "../context/messageContext";
import TextFieldWithCounter from "./TextFieldWithCounter";
import CollapsibleCard from "./CollapsibleCard";

const buttonCharacterLimit = 25;

const EditMessageButtons = () => {
  const { message, setMessage } = useContext(MessageContext);
  const { buttons } = message;

  const updateButton = (value: string, index: number) => {
    setMessage({
      buttons: buttons.map((btn, i) => (i === index ? value : btn)),
    });
  };

  const removeButton = (index: number) => {
    setMessage({ buttons: buttons.filter((_, i) => i !== index) });
  };

  return (
    <CollapsibleCard
      Icon={Crop75}
      title="Buttons"
      info="This is the Buttons"
      component="buttons"
    >
      {buttons.map((button, i) => (
        <Box key={`editMessageBtn${i}`}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Button {i + 1}</Typography>
            <IconButton
              onClick={() => removeButton(i)}
              aria-label={`Remove Button ${i + 1}`}
            >
              <DeleteOutline />
            </IconButton>
          </Box>
          <TextFieldWithCounter
            value={button}
            onChange={(evt) => updateButton(evt.target.value, i)}
            placeholder="Enter text"
            limit={buttonCharacterLimit}
            sx={{ mb: 4 }}
            aria-label={`Button ${i + 1} Text`}
          />
        </Box>
      ))}
      {buttons.length < 3 && (
        <Button onClick={() => setMessage({ buttons: [...buttons, ""] })}>
          Add button
        </Button>
      )}
    </CollapsibleCard>
  );
};
export default EditMessageButtons;
