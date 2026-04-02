import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type {
  SelectChangeEvent,
  SelectProps,
  FormControlProps,
  SxProps,
  Theme,
} from "@mui/material";

export type OptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type MySelectProps = {
  label: string;
  value: string;
  options: OptionType[];
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  multiple?: boolean;
  placeholder?: string;
  colorVariant?: "primary" | "secondary";
  labelPlacement?: "inside" | "outside";
  formControlProps?: FormControlProps;
  selectProps?: Omit<SelectProps, "value" | "onChange" | "label">;
  sx?: SxProps<Theme>;
};

const MySelect = ({
  label,
  value,
  options,
  onChange,
  disabled,
  error,
  helperText,
  fullWidth,
  required,
  variant = "outlined",
  size = "medium",
  multiple,
  placeholder,
  colorVariant = "primary",
  labelPlacement = "outside",
  formControlProps,
  selectProps,
  sx,
}: MySelectProps) => {
  const theme = useTheme();
  const selectPalette = theme.palette.input[colorVariant];

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as string);
  };

  const selectField = (
    <FormControl
      fullWidth={fullWidth}
      disabled={disabled}
      error={error}
      required={required}
      variant={variant}
      size={size}
      sx={{
        "& .MuiInputLabel-root": {
          color: selectPalette.placeholder,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: selectPalette.placeholder,
        },
        "& .MuiInputBase-root": {
          backgroundColor: selectPalette.background,
          color: selectPalette.text,
        },
        "& .MuiSelect-icon": {
          color: selectPalette.text,
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
        "& .MuiSelect-select": {
          color: value ? selectPalette.text : selectPalette.placeholder,
        },
        ...sx,
      }}
      {...formControlProps}
    >
      {labelPlacement === "inside" && <InputLabel>{label}</InputLabel>}

      <Select
        value={value}
        label={labelPlacement === "inside" ? label : undefined}
        onChange={handleChange as any}
        multiple={multiple}
        displayEmpty={!!placeholder}
        renderValue={
          !value && placeholder
            ? () => (
                <span style={{ color: selectPalette.placeholder }}>
                  {placeholder}
                </span>
              )
            : undefined
        }
        {...selectProps}
      >
        {placeholder && (
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}

        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );

  if (labelPlacement === "outside") {
    return (
      <Box
        display="flex"
        flexDirection="column"
        gap={0.75}
        width={fullWidth ? "100%" : undefined}
      >
        <Typography sx={{ color: theme.palette.text.secondary }}>
          {label}
        </Typography>
        {selectField}
      </Box>
    );
  }

  return selectField;
};

export default MySelect;