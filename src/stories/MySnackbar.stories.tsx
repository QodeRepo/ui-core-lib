import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Stack } from '@mui/material';
import MySnackbar from '../components/Snackbar/Snackbar';

const meta: Meta<typeof MySnackbar> = {
  title: 'Components/MySnackbar',
  component: MySnackbar,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    duration: { control: 'number' },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof MySnackbar>;

export const Success: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="success" onClick={() => setOpen(true)}>
          Show Success
        </Button>
        <MySnackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    message: 'Operation completed successfully!',
    severity: 'success',
    duration: 3000,
    position: { vertical: 'bottom', horizontal: 'center' },
  },
};

export const Error: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Show Error
        </Button>
        <MySnackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    message: 'Something went wrong. Please try again.',
    severity: 'error',
    duration: 3000,
    position: { vertical: 'bottom', horizontal: 'center' },
  },
};

export const Warning: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="warning" onClick={() => setOpen(true)}>
          Show Warning
        </Button>
        <MySnackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    message: 'This action might have consequences.',
    severity: 'warning',
    duration: 3000,
    position: { vertical: 'bottom', horizontal: 'center' },
  },
};

export const Info: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="info" onClick={() => setOpen(true)}>
          Show Info
        </Button>
        <MySnackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    message: 'Here is some useful information.',
    severity: 'info',
    duration: 3000,
    position: { vertical: 'bottom', horizontal: 'center' },
  },
};

export const AllVariants: Story = {
  render: () => {
    const [snack, setSnack] = useState<{ open: boolean; severity: 'success' | 'error' | 'warning' | 'info'; message: string }>({
      open: false,
      severity: 'success',
      message: '',
    });

    const show = (severity: 'success' | 'error' | 'warning' | 'info', message: string) => {
      setSnack({ open: true, severity, message });
    };

    return (
      <>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={() => show('success', 'Saved successfully!')}>Success</Button>
          <Button variant="contained" color="error" onClick={() => show('error', 'Failed to save!')}>Error</Button>
          <Button variant="contained" color="warning" onClick={() => show('warning', 'Check your input!')}>Warning</Button>
          <Button variant="contained" color="info" onClick={() => show('info', 'New update available.')}>Info</Button>
        </Stack>
        <MySnackbar
          open={snack.open}
          severity={snack.severity}
          message={snack.message}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
        />
      </>
    );
  },
  args: {},
};
