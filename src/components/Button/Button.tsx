import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

export type MyButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disableElevation?: boolean;
  disableRipple?: boolean;
} & Omit<ButtonProps, 'children'>;

const MyButton = ({ 
  label,
  onClick,
  variant,
  color,
  size,
  disabled,
  fullWidth,
  loading,
  startIcon,
  endIcon,
  href,
  target,
  disableElevation,
  disableRipple,
  ...props 
}: MyButtonProps) => {
  const buttonProps: any = {
    onClick,
    variant,
    color,
    size,
    disabled: disabled || loading,
    fullWidth,
    startIcon: loading ? <CircularProgress size={16} /> : startIcon,
    endIcon,
    disableElevation,
    disableRipple,
    ...props,
  };

  if (href) {
    buttonProps.href = href;
    if (target) {
      buttonProps.target = target;
    }
  }

  return (
    <MuiButton {...buttonProps}>
      {label}
    </MuiButton>
  );
};

export default MyButton;
