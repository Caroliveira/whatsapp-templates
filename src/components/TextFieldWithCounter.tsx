import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type TextFieldWithCounterProps = {
  limit: number;
  value: string;
} & TextFieldProps;

const TextFieldWithCounter = ({
  limit,
  value,
  sx = {},
  ...props
}: TextFieldWithCounterProps) => {
  const renderCharacterCount = () => (
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
    <TextField
      fullWidth
      size="small"
      value={value}
      sx={{ position: "relative", ...sx }}
      {...props}
      InputProps={{
        endAdornment: renderCharacterCount(),
        inputProps: {
          maxLength: limit,
          style: props.multiline ? { marginBottom: 24 } : { marginRight: 32 },
        },
      }}
    />
  );
};

export default TextFieldWithCounter;
