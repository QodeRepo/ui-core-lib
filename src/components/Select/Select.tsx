import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import type { SelectChangeEvent, SelectProps, FormControlProps, SxProps, Theme } from '@mui/material';

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
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  multiple?: boolean;
  placeholder?: string;
  formControlProps?: FormControlProps;
  selectProps?: Omit<SelectProps, 'value' | 'onChange' | 'label'>;
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
  variant,
  size,
  multiple,
  placeholder,
  formControlProps,
  selectProps,
  sx,
}: MySelectProps) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl 
      fullWidth={fullWidth} 
      disabled={disabled} 
      error={error}
      required={required}
      variant={variant}
      size={size}
      sx={sx}
      {...formControlProps}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value} 
        label={label} 
        onChange={handleChange as any}
        multiple={multiple}
        displayEmpty={!!placeholder}
        renderValue={!value && placeholder ? () => placeholder : undefined}
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
};

export default MySelect;
