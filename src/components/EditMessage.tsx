import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

type EditMessageProps = {
  onClose: () => void;
};

const EditMessage = ({ onClose }: EditMessageProps) => {
  return (
    <Box display="flex" justifyContent="space-between" flex={1}>
      <Typography>Edit Message</Typography>
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
    </Box>
  );
};
export default EditMessage;
