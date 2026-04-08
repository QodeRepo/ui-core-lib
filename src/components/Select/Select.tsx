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
  SelectProps,
  FormControlProps,
  SxProps,
  Theme,
} from "@mui/material";
import { useId } from "react";

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
  const generatedId = useId();
  const selectId = selectProps?.id ?? generatedId;
  const labelId = `${selectId}-label`;
  const selectPalette = theme.palette.input[colorVariant];

  const handleChange: NonNullable<SelectProps["onChange"]> = (event) => {
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
          borderColor: theme.palette.divider,
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.divider,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.divider,
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
      {labelPlacement === "inside" && (
        <InputLabel id={labelId}>{label}</InputLabel>
      )}

      <Select
        id={selectId}
        labelId={labelPlacement === "inside" ? labelId : undefined}
        value={value}
        label={labelPlacement === "inside" ? label : undefined}
        onChange={handleChange}
        multiple={multiple}
        displayEmpty={!!placeholder}
        inputProps={
          labelPlacement === "outside"
            ? {
                ...selectProps?.inputProps,
                "aria-labelledby": labelId,
              }
            : selectProps?.inputProps
        }
        renderValue={
          !value && placeholder
            ? () => (
                <Box component="span" sx={{ color: selectPalette.placeholder }}>
                  {placeholder}
                </Box>
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
        sx={{ display: "flex", flexDirection: "column", gap: 0.75, width: fullWidth ? "100%" : undefined }}
      >
        <Typography
          id={labelId}
          component="label"
          htmlFor={selectId}
          variant="body2"
          color="text.secondary"
        >
          {label}
        </Typography>
        {selectField}
      </Box>
    );
  }

  return selectField;
};

export default MySelect;
