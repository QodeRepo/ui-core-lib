import type { Meta, StoryObj } from "@storybook/react-vite";
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import MyChip from '../components/Chip';

const meta: Meta<typeof MyChip> = {
  title: 'Components/Chip',
  component: MyChip,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    clickable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
    onDelete: {
      action: 'deleted',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MyChip>;

export const Playground: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'default',
    size: 'medium',
    clickable: false,
    disabled: false,
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    color: 'primary',
    clickable: true,
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    color: 'error',
    onDelete: () => {},
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    color: 'success',
    icon: <DoneIcon />,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined',
    color: 'secondary',
  },
};

export const AvatarChip: Story = {
  args: {
    label: 'Avatar Chip',
    avatar: <FaceIcon />,
    color: 'primary',
  },
};