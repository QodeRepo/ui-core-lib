import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import type { RadioGroupProps, FormControlProps } from '@mui/material';

export type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type MyRadioButtonProps = {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  row?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  size?: 'small' | 'medium';
  formControlProps?: FormControlProps;
} & Omit<RadioGroupProps, 'onChange'>;

const MyRadioButton = ({
  label,
  options,
  value,
  onChange,
  row,
  color,
  size,
  formControlProps,
  ...props
}: MyRadioButtonProps) => {
  return (
    <FormControl {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value)}
        row={row}
        {...props}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color={color} size={size} />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MyRadioButton;