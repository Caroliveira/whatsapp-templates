import { useAtom } from "jotai";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import {
  Close,
  Crop75,
  DeleteOutline,
  Photo,
  TextFields,
} from "@mui/icons-material";
import CollapsibleCard from "./CollapsibleCard";
import VisuallyHiddenInput from "./VisuallyHiddenInput.styled";
import TextFieldWithCounter from "./TextFieldWithCounter";
import {
  bodyMessageAtom,
  buttonsAtom,
  footerMessageAtom,
  headerMediaAtom,
  headerTypeAtom,
  sendMessageAtom,
} from "../atoms/messageAtoms";
import { ComponentParameterEnum } from "../types/enums";

type EditMessageProps = {
  onClose: () => void;
};

const bodyCharacterLimit = 1024;
const footerCharacterLimit = 60;
const buttonCharacterLimit = 25;

const mediaOptions: {
  [key in ComponentParameterEnum]?: { name: string; accept: string };
} = {
  [ComponentParameterEnum.Image]: { name: "Image", accept: "image/*" },
  [ComponentParameterEnum.Video]: { name: "Video", accept: "video/*" },
  [ComponentParameterEnum.Document]: { name: "Document", accept: ".pdf" },
};

const EditMessage = ({ onClose }: EditMessageProps) => {
  const [headerType, setHeaderType] = useAtom(headerTypeAtom);
  const [headerMedia, setHeaderMedia] = useAtom(headerMediaAtom);
  const [bodyMessage, setBodyMessage] = useAtom(bodyMessageAtom);
  const [footerMessage, setFooterMessage] = useAtom(footerMessageAtom);
  const [buttons, setButtons] = useAtom(buttonsAtom);
  const [, sendMessage] = useAtom(sendMessageAtom);

  const updateHeaderType = (evt: SelectChangeEvent<ComponentParameterEnum>) => {
    setHeaderType(evt.target.value as ComponentParameterEnum);
  };

  const updateButton = (value: string, index: number) => {
    setButtons((prev) => prev.map((btn, i) => (i === index ? value : btn)));
  };

  const removeButton = (index: number) => {
    setButtons(buttons.filter((_, i) => i !== index));
  };

  const handleSave = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendMessage();
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
        <CollapsibleCard Icon={Photo} title="Header" info="This is the Header">
          <FormControl fullWidth>
            <Select
              value={headerType}
              fullWidth
              displayEmpty
              onChange={updateHeaderType}
              inputProps={{ "aria-label": "Headder media" }}
            >
              {Object.entries(mediaOptions).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ m: "10px 0" }}>
              Image size recommendation: 800 x 418 pixel.
            </FormHelperText>
          </FormControl>
          <Box display="flex" alignItems="center">
            <Button component="label" variant="outlined">
              Upload Image
              <VisuallyHiddenInput
                type="file"
                accept={mediaOptions[headerType]?.accept}
                onChange={(evt) => setHeaderMedia(evt.target.files?.[0])}
              />
            </Button>
            <Typography
              ml={2}
              flex={1}
              textOverflow="ellipsis"
              overflow={"hidden"}
              maxWidth={100}
            >
              {headerMedia?.name}
            </Typography>
            {headerMedia && (
              <IconButton
                size="small"
                onClick={() => setHeaderMedia(undefined)}
              >
                <DeleteOutline />
              </IconButton>
            )}
          </Box>
        </CollapsibleCard>

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
            value={bodyMessage}
            onChange={(evt) => setBodyMessage(evt.target.value)}
            placeholder="Enter text"
            limit={bodyCharacterLimit}
          />
          <Button sx={{ mt: 1 }}>Add variable</Button>
        </CollapsibleCard>

        <CollapsibleCard
          Icon={TextFields}
          title="Footer text"
          info="This is the Footer text"
        >
          <TextFieldWithCounter
            value={footerMessage}
            onChange={(evt) => setFooterMessage(evt.target.value)}
            placeholder="Enter text"
            limit={footerCharacterLimit}
          />
        </CollapsibleCard>

        <CollapsibleCard
          Icon={Crop75}
          title="Buttons"
          info="This is the Buttons"
        >
          {buttons.map((buttonMessage, i) => (
            <Box key={`editMessageBtn${i}`}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Button {i + 1}</Typography>
                <IconButton onClick={() => removeButton(i)}>
                  <DeleteOutline />
                </IconButton>
              </Box>
              <TextFieldWithCounter
                value={buttonMessage}
                onChange={(evt) => updateButton(evt.target.value, i)}
                placeholder="Enter text"
                limit={buttonCharacterLimit}
                sx={{ mb: 4 }}
              />
            </Box>
          ))}
          {buttons.length < 3 && (
            <Button onClick={() => setButtons((prev) => [...prev, ""])}>
              Add button
            </Button>
          )}
        </CollapsibleCard>

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
