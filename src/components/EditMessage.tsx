import { Box, IconButton, Typography } from "@mui/material";
import { Close, Photo } from "@mui/icons-material";
import CollapsibleCard from "./CollapsibleCard";

type EditMessageProps = {
  onClose: () => void;
};

const EditMessage = ({ onClose }: EditMessageProps) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" flex={1}>
        <Typography>Edit Message</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <CollapsibleCard
        Icon={Photo}
        title="Header"
        info="This is the Header"
        content="Test"
      />
    </>
  );
};
export default EditMessage;
