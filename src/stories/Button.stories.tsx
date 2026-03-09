import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Example/Buttonsss',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Secondary Button',
  },
};
