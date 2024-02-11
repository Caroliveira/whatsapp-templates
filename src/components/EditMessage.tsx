import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Crop75, Photo, TextFields } from "@mui/icons-material";
import CollapsibleCard from "./CollapsibleCard";
import VisuallyHiddenInput from "./VisuallyHiddenInput.styled";
import { useState } from "react";

type EditMessageProps = {
  onClose: () => void;
};

const bodyCharacterLimit = 1024;
const footerCharacterLimit = 60;

const EditMessage = ({ onClose }: EditMessageProps) => {
  const [bodyMessage, setBodyMessage] = useState("");
  const [footerMessage, setFooterMessage] = useState("");

  const renderCharacterCount = (value: string, limit: number) => (
    <InputAdornment position="end">
      <span
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          fontSize: "14px",
          lineHeight: "21px",
        }}
      >
        {`${value.length}/${limit}`}
      </span>
    </InputAdornment>
  );

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

      <Box component="form">
        <CollapsibleCard Icon={Photo} title="Header" info="This is the Header">
          <FormControl fullWidth>
            <Select
              value="Image"
              fullWidth
              displayEmpty
              onChange={() => null}
              inputProps={{ "aria-label": "Headder media" }}
            >
              <MenuItem value="Image">Image</MenuItem>
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="Document">Document</MenuItem>
            </Select>
            <FormHelperText sx={{ m: "10px 0" }}>
              Image size recommendation: 800 x 418 pixel.
            </FormHelperText>
          </FormControl>
          <Button component="label" variant="outlined">
            Upload Image
            <VisuallyHiddenInput type="file" />
          </Button>
        </CollapsibleCard>

        <CollapsibleCard
          Icon={TextFields}
          title="Body message"
          info="This is the Body message"
          required
        >
          <TextField
            multiline
            fullWidth
            rows={8}
            value={bodyMessage}
            onChange={(evt) => setBodyMessage(evt.target.value)}
            sx={{ position: "relative" }}
            placeholder="👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? "
            InputProps={{
              inputProps: {
                maxLength: bodyCharacterLimit,
                style: { marginBottom: 16 },
              },
              endAdornment: renderCharacterCount(
                bodyMessage,
                bodyCharacterLimit
              ),
            }}
          />
          <Button>Add variable</Button>
        </CollapsibleCard>

        <CollapsibleCard
          Icon={TextFields}
          title="Footer text"
          info="This is the Footer text"
        >
          <TextField
            multiline
            fullWidth
            rows={2}
            value={footerMessage}
            onChange={(evt) => setFooterMessage(evt.target.value)}
            sx={{ position: "relative" }}
            placeholder="Reply 'STOP' to opt out"
            InputProps={{
              inputProps: {
                maxLength: footerCharacterLimit,
                style: { marginBottom: 16 },
              },
              endAdornment: renderCharacterCount(
                footerMessage,
                footerCharacterLimit
              ),
            }}
          />
        </CollapsibleCard>

        <CollapsibleCard
          Icon={Crop75}
          title="Buttons"
          info="This is the Buttons"
        >
          Test
        </CollapsibleCard>

        <Button fullWidth variant="contained">
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
