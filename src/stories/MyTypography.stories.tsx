import type { Meta, StoryObj } from '@storybook/react-vite';
import MyTypography from '../components/Typography/Typography';
import { Box } from '@mui/material';

const meta: Meta<typeof MyTypography> = {
  title: 'Components/MyTypography',
  component: MyTypography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'text.primary', 'text.secondary'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof MyTypography>;

// Heading variants
export const Heading1: Story = {
  args: {
    text: 'Heading 1',
    variant: 'h1',
    color: 'primary',
  },
};

export const Heading2: Story = {
  args: {
    text: 'Heading 2',
    variant: 'h2',
    color: 'secondary',
  },
};

export const Heading3: Story = {
  args: {
    text: 'Heading 3',
    variant: 'h3',
  },
};

// Body text
export const BodyText: Story = {
  args: {
    text: 'This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    variant: 'body1',
  },
};

export const BodyTextSmall: Story = {
  args: {
    text: 'This is smaller body text. Perfect for secondary content.',
    variant: 'body2',
    color: 'text.secondary',
  },
};

// Subtitle variants
export const Subtitle: Story = {
  args: {
    text: 'This is a subtitle',
    variant: 'subtitle1',
    color: 'text.secondary',
  },
};

// Caption
export const Caption: Story = {
  args: {
    text: 'This is a caption text - small and subtle',
    variant: 'caption',
    color: 'text.secondary',
  },
};

// Button text
export const ButtonText: Story = {
  args: {
    text: 'BUTTON TEXT',
    variant: 'button',
  },
};

// Colors
export const ErrorText: Story = {
  args: {
    text: 'This is error text',
    variant: 'body1',
    color: 'error',
  },
};

export const SuccessText: Story = {
  args: {
    text: 'Operation completed successfully',
    variant: 'body1',
    color: 'success',
  },
};

// Alignment
export const CenterAligned: Story = {
  args: {
    text: 'This text is centered',
    variant: 'h4',
    align: 'center',
  },
};

export const RightAligned: Story = {
  args: {
    text: 'This text is right-aligned',
    variant: 'body1',
    align: 'right',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <MyTypography text="H1 Heading" variant="h1" />
      <MyTypography text="H2 Heading" variant="h2" />
      <MyTypography text="H3 Heading" variant="h3" />
      <MyTypography text="H4 Heading" variant="h4" />
      <MyTypography text="H5 Heading" variant="h5" />
      <MyTypography text="H6 Heading" variant="h6" />
      <MyTypography text="Subtitle 1" variant="subtitle1" />
      <MyTypography text="Subtitle 2" variant="subtitle2" />
      <MyTypography text="Body 1 - Regular paragraph text" variant="body1" />
      <MyTypography text="Body 2 - Slightly smaller paragraph" variant="body2" />
      <MyTypography text="Caption text" variant="caption" />
      <MyTypography text="BUTTON TEXT" variant="button" />
      <MyTypography text="OVERLINE TEXT" variant="overline" />
    </Box>
  ),
};

// Custom styling
export const CustomStyled: Story = {
  args: {
    text: 'Custom styled text',
    variant: 'h4',
    sx: {
      color: 'purple',
      fontWeight: 'bold',
      textDecoration: 'underline',
      fontStyle: 'italic',
    },
  },
};
