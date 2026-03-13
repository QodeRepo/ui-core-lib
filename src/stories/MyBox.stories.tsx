import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../index';
import { Paper, Typography } from '@mui/material';

const meta = {
    title: 'Components/Box',
    component: Box,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        component: {
            control: 'text',
            description: 'The component used for the root node. Either a string to use a HTML element or a component.',
        },
        sx: {
            control: 'object',
            description: 'The system prop that allows defining system overrides as well as additional CSS styles.',
        },
    },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper for visual appeal in Storybook
const BoxContent = ({ title }: { title: string }) => (
    <Paper elevation={3} sx={{ p: 2, m: 1, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="body1">{title}</Typography>
    </Paper>
);

export const Default: Story = {
    args: {
        children: <BoxContent title="I'm inside a default Box" />,
        sx: {
            p: 2,
            border: '1px dashed grey',
        },
    },
};

export const Flexbox: Story = {
    args: {
        children: (
            <>
                <BoxContent title="Item 1" />
                <BoxContent title="Item 2" />
                <BoxContent title="Item 3" />
            </>
        ),
        sx: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            border: '1px solid black',
            width: 500,
        },
    },
};

export const UsingSemanticHtml: Story = {
    args: {
        component: 'section',
        children: (
            <Typography variant="h6">
                Inspect me in the DOM! I am a <code>&lt;section&gt;</code> tag, not a <code>&lt;div&gt;</code>.
            </Typography>
        ),
        sx: {
            p: 2,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 1,
        },
    },
};
