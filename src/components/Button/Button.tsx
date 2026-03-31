import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { ButtonProps, SxProps, Theme } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';
import type { ReactNode } from 'react';
import { colorTokens } from '../../tokens/colors';

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

const customColorStyles = {
  primary: {
    light: {
      backgroundColor: colorTokens.button.light.primary.background,
      color: colorTokens.button.light.primary.text,
    },
    dark: {
      backgroundColor: colorTokens.button.dark.primary.background,
      color: colorTokens.button.dark.primary.text,
    },
  },
  secondary: {
    light: {
      backgroundColor: colorTokens.button.light.secondary.background,
      color: colorTokens.button.light.secondary.text,
    },
    dark: {
      backgroundColor: colorTokens.button.dark.secondary.background,
      color: colorTokens.button.dark.secondary.text,
    },
  },
};

const resolveSx = (
  sx: SxProps<Theme> | undefined,
  theme: Theme
): SystemStyleObject<Theme> => {
  if (!sx) return {};
  if (typeof sx === 'function') return sx(theme) as SystemStyleObject<Theme>;
  if (Array.isArray(sx)) {
    return sx.reduce<SystemStyleObject<Theme>>((acc, item) => {
      const resolved = resolveSx(item as SxProps<Theme>, theme);
      return { ...acc, ...resolved };
    }, {});
  }
  return sx as SystemStyleObject<Theme>;
};

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

  const customSx: SxProps<Theme> = hasCustomColor
    ? (theme: Theme): SystemStyleObject<Theme> => ({
        ...(theme.palette.mode === 'dark'
          ? customColorStyles[color].dark
          : customColorStyles[color].light),
        ...resolveSx(sx, theme),
      })
    : (sx ?? {});

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