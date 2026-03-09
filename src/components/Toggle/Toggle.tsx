import { FormControlLabel, Switch } from '@mui/material';
import type { SwitchProps, FormControlLabelProps } from '@mui/material';

export type MyToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  formControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
} & Omit<SwitchProps, 'onChange' | 'checked'>;

const MyToggle = ({
  label,
  checked,
  onChange,
  labelPlacement,
  formControlLabelProps,
  ...props
}: MyToggleProps) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
      {...formControlLabelProps}
    />
  );
};

export default MyToggle;
