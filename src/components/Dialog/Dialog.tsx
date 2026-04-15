import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import type { DialogProps, ButtonProps, SxProps, Theme } from '@mui/material';
import type { ReactNode } from 'react';

export type DialogButton = {
  label: string;
  onClick: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  buttonProps?: ButtonProps;
};

export type MyDialogProps = {
  open: boolean;
  title: string;
  description?: string | React.ReactNode;
  children?: ReactNode;
  onClose: () => void;
  confirmButton?: DialogButton;
  cancelButton?: DialogButton;
  additionalButtons?: DialogButton[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
  fullScreen?: boolean;
  disableBackdropClick?: boolean;
  showActions?: boolean;
  titleSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  actionsSx?: SxProps<Theme>;
  dialogProps?: Omit<DialogProps, 'open' | 'onClose'>;
} & Pick<DialogProps, 'sx'>;

const MyDialog = ({
  open,
  title,
  description,
  children,
  onClose,
  confirmButton,
  cancelButton,
  additionalButtons,
  maxWidth,
  fullWidth,
  fullScreen,
  disableBackdropClick,
  showActions,
  titleSx,
  contentSx,
  actionsSx,
  dialogProps,
  sx,
}: MyDialogProps) => {
  const handleClose = (
    _event: object,
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (disableBackdropClick && reason === 'backdropClick') {
      return;
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      sx={sx}
      {...dialogProps}
    >
      <DialogTitle sx={titleSx}>{title}</DialogTitle>
      {description && (
        <DialogContent sx={contentSx}>
          {typeof description === 'string' ? (
            <DialogContentText>{description}</DialogContentText>
          ) : (
            description
          )}
        </DialogContent>
      )}
      {children && (
        <DialogContent sx={contentSx}>{children}</DialogContent>
      )}
      {(showActions === undefined || showActions) && (
        <DialogActions sx={actionsSx}>
          {cancelButton && (
            <Button
              onClick={cancelButton.onClick}
              variant={cancelButton.variant || 'outlined'}
              color={cancelButton.color}
              disabled={cancelButton.disabled}
              {...cancelButton.buttonProps}
            >
              {cancelButton.label}
            </Button>
          )}
          {additionalButtons?.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              variant={button.variant || 'text'}
              color={button.color}
              disabled={button.disabled}
              {...button.buttonProps}
            >
              {button.label}
            </Button>
          ))}
          {confirmButton && (
            <Button
              onClick={confirmButton.onClick}
              variant={confirmButton.variant || 'contained'}
              color={confirmButton.color || 'primary'}
              disabled={confirmButton.disabled}
              {...confirmButton.buttonProps}
            >
              {confirmButton.label}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MyDialog;
