import { FormControlLabel, Checkbox } from "@mui/material";
import type { CheckboxProps, FormControlLabelProps } from "@mui/material";

export type MyCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
} & Omit<CheckboxProps, "onChange" | "checked">;

const MyCheckbox = ({
  label,
  checked,
  onChange,
  labelPlacement,
  formControlLabelProps,
  ...props
}: MyCheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
      sx={{
        "& .MuiFormControlLabel-label": {
          color: "text.secondary",
        },
      }}
      {...formControlLabelProps}
    />
  );
};

export default MyCheckbox;
