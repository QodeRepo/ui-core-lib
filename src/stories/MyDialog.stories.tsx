import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, TextField, Box, Typography } from '@mui/material';
import MyDialog from '../components/Dialog/Dialog';

const meta: Meta<typeof MyDialog> = {
  title: 'Components/MyDialog',
  component: MyDialog,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyDialog>;

// Default dialog
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <MyDialog
          open={open}
          title="Confirm Action"
          description="Are you sure you want to proceed with this action?"
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'Confirm',
            onClick: () => {
              alert('Confirmed!');
              setOpen(false);
            },
          }}
          cancelButton={{
            label: 'Cancel',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Delete confirmation
export const DeleteConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <MyDialog
          open={open}
          title="Delete Item"
          description="This will permanently delete the item. This action cannot be undone."
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'Delete',
            onClick: () => {
              alert('Item deleted!');
              setOpen(false);
            },
            color: 'error',
          }}
          cancelButton={{
            label: 'Cancel',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Dialog without description
export const TitleOnly: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Simple Dialog
        </Button>
        <MyDialog
          open={open}
          title="Simple Confirmation"
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'OK',
            onClick: () => setOpen(false),
          }}
          cancelButton={{
            label: 'Cancel',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Info dialog with only OK button
export const InfoDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="info" onClick={() => setOpen(true)}>
          Show Info
        </Button>
        <MyDialog
          open={open}
          title="Information"
          description="This is an informational message. No action is required."
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'OK',
            onClick: () => setOpen(false),
            color: 'info',
          }}
        />
      </>
    );
  },
};

// Success dialog
export const SuccessDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="success" onClick={() => setOpen(true)}>
          Show Success
        </Button>
        <MyDialog
          open={open}
          title="Success!"
          description="Your changes have been saved successfully."
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'Great!',
            onClick: () => setOpen(false),
            color: 'success',
          }}
        />
      </>
    );
  },
};

// Warning dialog
export const WarningDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" color="warning" onClick={() => setOpen(true)}>
          Show Warning
        </Button>
        <MyDialog
          open={open}
          title="Warning"
          description="This action may have consequences. Please review before proceeding."
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'Proceed',
            onClick: () => setOpen(false),
            color: 'warning',
          }}
          cancelButton={{
            label: 'Go Back',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Dialog with additional buttons
export const ThreeButtons: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Multi-Button Dialog
        </Button>
        <MyDialog
          open={open}
          title="Save Changes?"
          description="You have unsaved changes. What would you like to do?"
          onClose={() => setOpen(false)}
          cancelButton={{
            label: 'Cancel',
            onClick: () => setOpen(false),
          }}
          additionalButtons={[
            {
              label: "Don't Save",
              onClick: () => {
                alert('Changes discarded');
                setOpen(false);
              },
              variant: 'text',
              color: 'error',
            },
          ]}
          confirmButton={{
            label: 'Save',
            onClick: () => {
              alert('Changes saved!');
              setOpen(false);
            },
            color: 'success',
          }}
        />
      </>
    );
  },
};

// Form dialog with rich content
export const FormDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add User
        </Button>
        <MyDialog
          open={open}
          title="Add New User"
          description={
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
          }
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'Add',
            onClick: () => {
              alert(`Added: ${name} (${email})`);
              setOpen(false);
              setName('');
              setEmail('');
            },
            disabled: !name || !email,
          }}
          cancelButton={{
            label: 'Cancel',
            onClick: () => {
              setOpen(false);
              setName('');
              setEmail('');
            },
          }}
        />
      </>
    );
  },
};

// Full width dialog
export const FullWidth: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Full Width
        </Button>
        <MyDialog
          open={open}
          title="Full Width Dialog"
          description="This dialog takes up the full width of the screen (within max constraints)."
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
          confirmButton={{
            label: 'OK',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Different max widths
export const MaxWidthSizes: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');

    return (
      <>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
            <Button
              key={s}
              variant={size === s ? 'contained' : 'outlined'}
              onClick={() => {
                setSize(s);
                setOpen(true);
              }}
            >
              {s.toUpperCase()}
            </Button>
          ))}
        </Box>
        <MyDialog
          open={open}
          title={`${size.toUpperCase()} Dialog`}
          description="This dialog shows different max width sizes."
          onClose={() => setOpen(false)}
          maxWidth={size}
          confirmButton={{
            label: 'Close',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Disable backdrop click
export const DisableBackdropClick: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open (No Backdrop Close)
        </Button>
        <MyDialog
          open={open}
          title="Important Action Required"
          description="You must respond to this dialog. Clicking outside won't close it."
          onClose={() => setOpen(false)}
          disableBackdropClick
          confirmButton={{
            label: 'Respond',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Custom styled dialog
export const CustomStyled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Styled Dialog
        </Button>
        <MyDialog
          open={open}
          title="Custom Styled"
          description="This dialog has custom styling applied."
          onClose={() => setOpen(false)}
          titleSx={{
            bgcolor: 'primary.main',
            color: 'white',
          }}
          contentSx={{
            bgcolor: '#f5f5f5',
          }}
          actionsSx={{
            bgcolor: '#e0e0e0',
            p: 2,
          }}
          confirmButton={{
            label: 'OK',
            onClick: () => setOpen(false),
          }}
          cancelButton={{
            label: 'Cancel',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};

// Without actions
export const NoActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Info Only
        </Button>
        <MyDialog
          open={open}
          title="Information"
          description={
            <Box>
              <Typography component="p">
                This is a display-only dialog with no action buttons.
              </Typography>
              <Typography>
                Click outside or press ESC to close.
              </Typography>
            </Box>
          }
          onClose={() => setOpen(false)}
          showActions={false}
        />
      </>
    );
  },
};

// Long content
export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Long Content
        </Button>
        <MyDialog
          open={open}
          title="Terms and Conditions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClose={() => setOpen(false)}
          confirmButton={{
            label: 'Accept',
            onClick: () => setOpen(false),
          }}
          cancelButton={{
            label: 'Decline',
            onClick: () => setOpen(false),
          }}
        />
      </>
    );
  },
};
