import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { ButtonProps, SxProps, Theme } from '@mui/material';
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
  sx,
  ...props
}: MyButtonProps) => {
  const hasCustomColor = color === 'primary' || color === 'secondary';
  const customSx: SxProps<Theme> = [
    hasCustomColor &&
      ((theme: Theme) => ({
        backgroundColor: theme.palette.button[color].background,
        color: theme.palette.button[color].text,
      })),
    ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
  ];

  const buttonProps: Omit<ButtonProps, 'children'> = {
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
    href,
    ...(href && target ? { target } : {}),
    sx: customSx,
    ...props,
  };

  return <MuiButton {...buttonProps}>{label}</MuiButton>;
};

export default MyButton;
