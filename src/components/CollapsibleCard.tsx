import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  SvgIconTypeMap,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { ReactNode, useContext } from "react";
import { Info } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { grey } from "@mui/material/colors";
import { HasComponentType, MessageContext } from "../context/messageContext";

type RequiredComponentType =
  | { required: true; component?: never }
  | { required?: never; component: keyof HasComponentType };

type CollapsibleCardProps = {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  title: string;
  info?: string;
  children: ReactNode;
} & RequiredComponentType;

const CollapsibleCard = ({
  Icon,
  title,
  info,
  required,
  children,
  component,
}: CollapsibleCardProps) => {
  const { hasComponent, setHasComponent } = useContext(MessageContext);
  const expanded = required || hasComponent[component];

  const renderCardTitle = () => (
    <Box display="flex" alignItems="center">
      <Icon color="action" />
      <Typography variant="subtitle2" mx={1}>
        {title}
      </Typography>
      {info && (
        <Tooltip title={info} arrow>
          <Info color="disabled" sx={{ height: 12, width: 12 }} />
        </Tooltip>
      )}
      {required && (
        <Alert
          icon={false}
          sx={{
            backgroundColor: grey["100"],
            padding: "4px 8px",
            marginLeft: 2,
            "& .MuiAlert-message": { padding: 0 },
          }}
        >
          <AlertTitle sx={{ margin: 0, fontSize: 12 }}>REQUIRED</AlertTitle>
        </Alert>
      )}
    </Box>
  );

  const renderExpandToggle = () => {
    if (required) return null;
    return (
      <Switch
        checked={expanded}
        onClick={() => setHasComponent({ [component]: !expanded })}
        aria-expanded={expanded}
        aria-label="show more"
      />
    );
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: 2, mb: 6 }}>
      <CardHeader title={renderCardTitle()} action={renderExpandToggle()} />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ py: 0, px: 6 }}>{children}</CardContent>
      </Collapse>
    </Card>
  );
};

export default CollapsibleCard;
