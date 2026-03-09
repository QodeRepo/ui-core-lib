import { Snackbar, Alert } from '@mui/material';
import type { AlertColor, SnackbarOrigin } from '@mui/material';

type MySnackbarProps = {
  open: boolean;
  message: string;
  severity?: AlertColor;
  duration?: number;
  position?: SnackbarOrigin;
  onClose: () => void;
};

const MySnackbar = ({
  open,
  message,
  severity,
  duration,
  position,
  onClose,
}: MySnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={position}
    >
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
