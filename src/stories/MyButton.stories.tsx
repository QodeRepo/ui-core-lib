import type { Meta, StoryObj } from '@storybook/react-vite';
import MyButton from '../components/Button/Button';
import { Box, Stack } from '@mui/material';
import {
  Send as SendIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  ArrowForward as ArrowForwardIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const meta: Meta<typeof MyButton> = {
  title: 'Components/MyButton',
  component: MyButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Default: Story = {
  render: () => (
    <MyButton
      label="Default Button"
      variant="contained"
      color="primary"
      onClick={() => alert('Button clicked!')}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton label="Text" variant="text" color="primary" onClick={() => {}} />
      <MyButton label="Outlined" variant="outlined" color="primary" onClick={() => {}} />
      <MyButton label="Contained" variant="contained" color="primary" onClick={() => {}} />
    </Stack>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <MyButton label="Primary" variant="contained" color="primary" onClick={() => {}} />
        <MyButton label="Secondary" variant="contained" color="secondary" onClick={() => {}} />
        <MyButton label="Success" variant="contained" color="success" onClick={() => {}} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <MyButton label="Error" variant="contained" color="error" onClick={() => {}} />
        <MyButton label="Warning" variant="contained" color="warning" onClick={() => {}} />
        <MyButton label="Info" variant="contained" color="info" onClick={() => {}} />
      </Stack>
    </Stack>
  ),
};

export const OutlinedColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <MyButton label="Primary" variant="outlined" color="primary" onClick={() => {}} />
        <MyButton label="Secondary" variant="outlined" color="secondary" onClick={() => {}} />
        <MyButton label="Success" variant="outlined" color="success" onClick={() => {}} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <MyButton label="Error" variant="outlined" color="error" onClick={() => {}} />
        <MyButton label="Warning" variant="outlined" color="warning" onClick={() => {}} />
        <MyButton label="Info" variant="outlined" color="info" onClick={() => {}} />
      </Stack>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <MyButton label="Small" variant="contained" color="primary" size="small" onClick={() => {}} />
      <MyButton label="Medium" variant="contained" color="primary" size="medium" onClick={() => {}} />
      <MyButton label="Large" variant="contained" color="primary" size="large" onClick={() => {}} />
    </Stack>
  ),
};

export const WithStartIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="Send"
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
        onClick={() => {}}
      />
      <MyButton
        label="Delete"
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => {}}
      />
      <MyButton
        label="Save"
        variant="text"
        color="success"
        startIcon={<SaveIcon />}
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="Continue"
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        onClick={() => {}}
      />
      <MyButton
        label="Download"
        variant="outlined"
        color="primary"
        endIcon={<DownloadIcon />}
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const WithBothIcons: Story = {
  render: () => (
    <MyButton
      label="Edit and Save"
      variant="contained"
      color="primary"
      startIcon={<EditIcon />}
      endIcon={<SaveIcon />}
      onClick={() => {}}
    />
  ),
};

export const Loading: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="Loading"
        variant="contained"
        color="primary"
        loading={true}
        onClick={() => {}}
      />
      <MyButton
        label="Submit"
        variant="outlined"
        color="primary"
        loading={true}
        onClick={() => {}}
      />
      <MyButton
        label="Save"
        variant="text"
        color="primary"
        loading={true}
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const LoadingVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <MyButton
          label="Processing"
          variant="contained"
          color="primary"
          loading={true}
          onClick={() => {}}
        />
        <MyButton
          label="Saving"
          variant="contained"
          color="success"
          loading={true}
          onClick={() => {}}
        />
        <MyButton
          label="Deleting"
          variant="contained"
          color="error"
          loading={true}
          onClick={() => {}}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <MyButton
          label="Uploading"
          variant="outlined"
          color="primary"
          loading={true}
          onClick={() => {}}
        />
        <MyButton
          label="Downloading"
          variant="outlined"
          color="info"
          loading={true}
          onClick={() => {}}
        />
      </Stack>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="Disabled"
        variant="contained"
        color="primary"
        disabled={true}
        onClick={() => {}}
      />
      <MyButton
        label="Disabled"
        variant="outlined"
        color="primary"
        disabled={true}
        onClick={() => {}}
      />
      <MyButton
        label="Disabled"
        variant="text"
        color="primary"
        disabled={true}
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const DisabledWithIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="Send"
        variant="contained"
        color="primary"
        disabled={true}
        startIcon={<SendIcon />}
        onClick={() => {}}
      />
      <MyButton
        label="Delete"
        variant="outlined"
        color="error"
        disabled={true}
        startIcon={<DeleteIcon />}
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <Stack spacing={2}>
        <MyButton
          label="Full Width Primary"
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={() => {}}
        />
        <MyButton
          label="Full Width Secondary"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          onClick={() => {}}
        />
      </Stack>
    </Box>
  ),
};

export const LinkButton: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="Visit Documentation"
        variant="contained"
        color="primary"
        href="https://mui.com"
        target="_blank"
        onClick={() => {}}
      />
      <MyButton
        label="Go to Home"
        variant="outlined"
        color="primary"
        href="/"
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const IconOnlyButtons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label=""
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => {}}
        sx={{ minWidth: 'auto', px: 1 }}
      />
      <MyButton
        label=""
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => {}}
        sx={{ minWidth: 'auto', px: 1 }}
      />
      <MyButton
        label=""
        variant="text"
        color="primary"
        startIcon={<FavoriteIcon />}
        onClick={() => {}}
        sx={{ minWidth: 'auto', px: 1 }}
      />
    </Stack>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <MyButton
          label="Left"
          variant="outlined"
          color="primary"
          onClick={() => {}}
          sx={{ borderRadius: '4px 0 0 4px', borderRight: 'none' }}
        />
        <MyButton
          label="Center"
          variant="outlined"
          color="primary"
          onClick={() => {}}
          sx={{ borderRadius: 0, borderRight: 'none' }}
        />
        <MyButton
          label="Right"
          variant="outlined"
          color="primary"
          onClick={() => {}}
          sx={{ borderRadius: '0 4px 4px 0' }}
        />
      </Box>
      <Box>
        <MyButton
          label="Bold"
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {}}
          sx={{ borderRadius: '4px 0 0 4px', mr: 0.5 }}
        />
        <MyButton
          label="Italic"
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => {}}
          sx={{ borderRadius: 0, mr: 0.5 }}
        />
        <MyButton
          label="Underline"
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => {}}
          sx={{ borderRadius: '0 4px 4px 0' }}
        />
      </Box>
    </Stack>
  ),
};

export const ActionButtons: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <MyButton
          label="Create New"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => alert('Create new item')}
        />
        <MyButton
          label="Edit"
          variant="outlined"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => alert('Edit item')}
        />
        <MyButton
          label="Delete"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => alert('Delete item')}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <MyButton
          label="Save Changes"
          variant="contained"
          color="success"
          startIcon={<SaveIcon />}
          onClick={() => alert('Changes saved')}
        />
        <MyButton
          label="Cancel"
          variant="text"
          color="inherit"
          onClick={() => alert('Cancelled')}
        />
      </Stack>
    </Stack>
  ),
};

export const DisableEffects: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <MyButton
        label="No Elevation"
        variant="contained"
        color="primary"
        disableElevation={true}
        onClick={() => {}}
      />
      <MyButton
        label="No Ripple"
        variant="contained"
        color="primary"
        disableRipple={true}
        onClick={() => {}}
      />
    </Stack>
  ),
};

export const CustomStyled: Story = {
  render: () => (
    <Stack spacing={2}>
      <MyButton
        label="Custom Colors"
        variant="contained"
        color="primary"
        onClick={() => {}}
        sx={{
          backgroundColor: '#FF6B35',
          '&:hover': {
            backgroundColor: '#E55A2B',
          },
        }}
      />
      <MyButton
        label="Custom Border"
        variant="outlined"
        color="primary"
        onClick={() => {}}
        sx={{
          borderWidth: 2,
          borderColor: '#9C27B0',
          color: '#9C27B0',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#7B1FA2',
            backgroundColor: 'rgba(156, 39, 176, 0.04)',
          },
        }}
      />
      <MyButton
        label="Rounded Pill"
        variant="contained"
        color="primary"
        onClick={() => {}}
        sx={{
          borderRadius: '50px',
          px: 4,
        }}
      />
    </Stack>
  ),
};
