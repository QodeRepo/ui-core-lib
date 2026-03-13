import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper } from '../index';
import { Typography, Box } from '@mui/material';

const meta = {
    title: 'Components/Paper',
    component: Paper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: { type: 'select', options: [0, 1, 2, 3, 4, 6, 8, 12, 16, 24] },
            description: 'Shadow depth, corresponds to dp in the spec',
        },
        variant: {
            control: 'radio',
            options: ['elevation', 'outlined'],
            description: 'The variant to use',
        },
        square: {
            control: 'boolean',
            description: 'If true, rounded corners are disabled',
        },
    },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper for visual appeal in Storybook
const PaperContent = ({ title }: { title: string }) => (
    <Box sx={{ p: 4, width: 250, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" color="primary">
            {title}
        </Typography>
    </Box>
);

export const Default: Story = {
    args: {
        children: <PaperContent title="Default Paper (Elevation 1)" />,
        elevation: 1,
    },
};

export const Flat: Story = {
    args: {
        children: <PaperContent title="Flat Paper (Elevation 0)" />,
        elevation: 0,
    },
};

export const HighElevation: Story = {
    args: {
        children: <PaperContent title="High Elevation (Elevation 8)" />,
        elevation: 8,
    },
};

export const Outlined: Story = {
    args: {
        children: <PaperContent title="Outlined Paper" />,
        variant: 'outlined',
    },
};

export const Square: Story = {
    args: {
        children: <PaperContent title="Square Corners" />,
        square: true,
    },
};
