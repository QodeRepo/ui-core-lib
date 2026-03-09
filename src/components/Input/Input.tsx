import { TextField, InputAdornment } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import type { ReactNode } from 'react';

export type MyInputProps = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  autoFocus?: boolean;
  autoComplete?: string;
  inputProps?: TextFieldProps['inputProps'];
  InputProps?: TextFieldProps['InputProps'];
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
} & Omit<TextFieldProps, 'label' | 'startAdornment' | 'endAdornment'>;

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
  ...props 
}: MyInputProps) => {
  const enhancedInputProps = {
    ...InputProps,
    ...(startAdornment && { startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment> }),
    ...(endAdornment && { endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment> }),
  };

  return (
    <TextField 
      label={label}
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
      {...props} 
    />
  );
};

export default MyInput;
