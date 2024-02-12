import { useContext } from "react";
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
import { DeleteOutline, Photo } from "@mui/icons-material";
import { ComponentParameterEnum } from "../utils/enums";
import { MessageContext } from "../context/messageContext";
import VisuallyHiddenInput from "./VisuallyHiddenInput.styled";
import CollapsibleCard from "./CollapsibleCard";

type MediaOptiosType = {
  [key in ComponentParameterEnum]?: { name: string; accept: string };
};

const mediaOptions: MediaOptiosType = {
  [ComponentParameterEnum.Image]: { name: "Image", accept: "image/*" },
  [ComponentParameterEnum.Video]: { name: "Video", accept: "video/*" },
  [ComponentParameterEnum.Document]: { name: "Document", accept: ".pdf" },
};

const EditMessageHeader = () => {
  const { message, setMessage } = useContext(MessageContext);
  const { headerType, headerMedia } = message;

  const updateHeaderType = (evt: SelectChangeEvent<ComponentParameterEnum>) => {
    setMessage({ headerType: evt.target.value as ComponentParameterEnum });
  };

  return (
    <CollapsibleCard
      Icon={Photo}
      title="Header"
      info="This is the Header"
      component="header"
    >
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
          Upload {headerType}
          <VisuallyHiddenInput
            type="file"
            accept={mediaOptions[headerType]?.accept}
            onChange={(e) => setMessage({ headerMedia: e.target.files?.[0] })}
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
            onClick={() => setMessage({ headerMedia: undefined })}
          >
            <DeleteOutline />
          </IconButton>
        )}
      </Box>
    </CollapsibleCard>
  );
};
export default EditMessageHeader;
