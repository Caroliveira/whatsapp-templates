import { Box, Button, IconButton, Typography } from "@mui/material";
import { Close, Crop75, Photo, TextFields } from "@mui/icons-material";
import CollapsibleCard from "./CollapsibleCard";

type EditMessageProps = {
  onClose: () => void;
};

const EditMessage = ({ onClose }: EditMessageProps) => {
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
      <CollapsibleCard Icon={Photo} title="Header" info="This is the Header">
        Test
      </CollapsibleCard>
      <CollapsibleCard
        Icon={TextFields}
        title="Body message"
        info="This is the Body message"
        required
      >
        Test
      </CollapsibleCard>
      <CollapsibleCard
        Icon={TextFields}
        title="Footer text"
        info="This is the Footer text"
      >
        Test
      </CollapsibleCard>
      <CollapsibleCard Icon={Crop75} title="Buttons" info="This is the Buttons">
        Test
      </CollapsibleCard>
      <Button fullWidth variant="contained">
        Save
      </Button>
      <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 6 }}>
        Delete
      </Button>
    </>
  );
};
export default EditMessage;
