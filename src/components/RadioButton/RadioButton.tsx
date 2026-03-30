import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import type { RadioGroupProps, FormControlProps } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { typographyTokens } from "../../tokens";


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
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  size?: "small" | "medium";
  formControlProps?: FormControlProps;
} & Omit<RadioGroupProps, "onChange">;

const MyRadioButton = ({
  label,
  options,
  value,
  onChange,
  row,
  color = "primary",
  size = "medium",
  formControlProps,
  ...props
}: MyRadioButtonProps) => {
  return (
    <FormControl {...formControlProps}>
      <FormLabel sx={{ color: "text.secondary" }}>{label}</FormLabel>

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
            control={
              <Radio
                color={color}
                size={size}
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
              />
            }
            label={option.label}
            disabled={option.disabled}
            sx={{
              color: "text.secondary",
              "& .MuiFormControlLabel-label": {
                fontSize: typographyTokens.fontSize.base,
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MyRadioButton;
