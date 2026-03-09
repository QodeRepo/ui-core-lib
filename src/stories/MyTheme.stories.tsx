import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Typography, Box, Paper } from '@mui/material';
import MyThemeProvider from '../components/Theme/ThemeProvider';
import ThemeToggle from '../components/Theme/ThemeToggle';

const meta: Meta = {
  title: 'Components/ThemeToggle',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <MyThemeProvider>
      <Paper sx={{ p: 4, minHeight: 200 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h6">Theme Switcher</Typography>
          <ThemeToggle />
        </Box>
        <Typography sx={{ mb: 2 }}>
          Click the icon to toggle between light and dark mode.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: 1 }}>Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
      </Paper>
    </MyThemeProvider>
  ),
};

export const DarkModePreview: Story = {
  render: () => (
    <MyThemeProvider>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h6">Light / Dark Toggle</Typography>
          <ThemeToggle />
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This component wraps your app with a dynamic theme. Toggle the icon to switch modes.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained">Save</Button>
          <Button variant="outlined">Cancel</Button>
          <Button variant="text" color="error">Delete</Button>
        </Box>
      </Paper>
    </MyThemeProvider>
  ),
};
