import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { TextFieldProps } from "@mui/material";
import { useId, type ReactNode } from "react";

export type MyInputProps = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local";
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  autoFocus?: boolean;
  autoComplete?: string;
  inputProps?: TextFieldProps["inputProps"];
  InputProps?: TextFieldProps["InputProps"];
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  labelPlacement?: "inside" | "outside";
  colorVariant?: "primary" | "secondary";
} & Omit<TextFieldProps, "label" | "startAdornment" | "endAdornment">;

const MyInput = ({
  label,
  value,
  onChange,
  type,
  placeholder,
  helperText,
  error,
  disabled,
  required,
  fullWidth,
  multiline,
  rows,
  maxRows,
  variant,
  size,
  autoFocus,
  autoComplete,
  inputProps,
  InputProps,
  startAdornment,
  endAdornment,
  labelPlacement = "outside",
  colorVariant = "primary",
  sx,
  ...props
}: MyInputProps) => {
  const theme = useTheme();
  const generatedId = useId();
  const inputId = props.id ?? generatedId;
  const inputPalette = theme.palette.input[colorVariant];

  const enhancedInputProps = {
    ...InputProps,
    ...(startAdornment && {
      startAdornment: (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ),
    }),
    ...(endAdornment && {
      endAdornment: (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ),
    }),
  };

  const textField = (
    <TextField
      id={inputId}
      label={labelPlacement === "inside" ? label : undefined}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      variant={variant}
      size={size}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      inputProps={inputProps}
      InputProps={enhancedInputProps}
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: inputPalette.background,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: "none",
          },
        "& .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiInput-underline:hover:not(.Mui-disabled):before":
          {
            borderBottom: "none",
          },
        "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after, & .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
          {
            borderBottom: "none",
          },
        "& .MuiInputBase-input::placeholder": {
          color: inputPalette.placeholder,
          opacity: 1,
        },
        "& .MuiInputBase-input": {
          color: inputPalette.text,
        },

        ...sx,
      }}
      {...props}
    />
  );

  if (labelPlacement === "outside") {
    return (
      <Box
        display="flex"
        flexDirection="column"
        gap={0.75}
        width={fullWidth ? "100%" : undefined}
      >
        <Typography
          component="label"
          htmlFor={inputId}
          variant="body2"
          color="text.secondary"
        >
          {label}
        </Typography>
        {textField}
      </Box>
    );
  }

  return textField;
};

export default MyInput;
