import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import MyAccordion from '../components/Accordion/Accordion';
import type { AccordionItem } from '../components/Accordion/Accordion';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const meta: Meta<typeof MyAccordion> = {
  title: 'Components/MyAccordion',
  component: MyAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MyAccordion>;

const basicItems: AccordionItem[] = [
  {
    id: 'panel1',
    title: 'Accordion 1',
    content: 'This is the content of the first accordion panel.',
  },
  {
    id: 'panel2',
    title: 'Accordion 2',
    content: 'This is the content of the second accordion panel.',
  },
  {
    id: 'panel3',
    title: 'Accordion 3',
    content: 'This is the content of the third accordion panel.',
  },
];

export const Default: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={basicItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const DefaultExpanded: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={basicItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const items: AccordionItem[] = [
      {
        id: 'panel1',
        title: 'Available Panel',
        content: 'This panel is available and can be expanded.',
      },
      {
        id: 'panel2',
        title: 'Disabled Panel',
        content: 'This content is not accessible.',
        disabled: true,
      },
      {
        id: 'panel3',
        title: 'Another Available Panel',
        content: 'This panel is also available.',
      },
    ];
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={items}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const faqItems: AccordionItem[] = [
      {
        id: 'faq1',
        title: 'How do I reset my password?',
        content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
      },
      {
        id: 'faq2',
        title: 'What payment methods do you accept?',
        content: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
      },
      {
        id: 'faq3',
        title: 'How long does shipping take?',
        content: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.',
      },
      {
        id: 'faq4',
        title: 'What is your return policy?',
        content: 'We offer a 30-day money-back guarantee on all products. Items must be in original condition.',
      },
    ];
    return (
      <Box sx={{ width: 600 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
        <MyAccordion
          items={faqItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const ProductFeatures: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>('feature1');
    const featureItems: AccordionItem[] = [
      {
        id: 'feature1',
        title: '🚀 Fast Performance',
        content: 'Optimized for speed with advanced caching and CDN integration. Load times under 1 second guaranteed.',
      },
      {
        id: 'feature2',
        title: '🔒 Secure & Private',
        content: 'End-to-end encryption, GDPR compliant, and regular security audits to protect your data.',
      },
      {
        id: 'feature3',
        title: '📱 Mobile Responsive',
        content: 'Fully responsive design that works seamlessly on all devices - phone, tablet, and desktop.',
      },
      {
        id: 'feature4',
        title: '🎨 Customizable',
        content: 'Extensive theming options and customization capabilities to match your brand identity.',
      },
    ];
    return (
      <Box sx={{ width: 600 }}>
        <MyAccordion
          items={featureItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const CustomIcon: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={basicItems}
          expanded={expanded}
          onChange={setExpanded}
          expandIcon={<AddIcon />}
        />
      </Box>
    );
  },
};

export const WithElevation: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={basicItems}
          expanded={expanded}
          onChange={setExpanded}
          elevation={4}
        />
      </Box>
    );
  },
};

export const Squared: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={basicItems}
          expanded={expanded}
          onChange={setExpanded}
          square
        />
      </Box>
    );
  },
};

export const WithRichContent: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const richItems: AccordionItem[] = [
      {
        id: 'rich1',
        title: 'User Profile',
        content: (
          <Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Name:</strong> John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Email:</strong> john.doe@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Role:</strong> Administrator
            </Typography>
          </Box>
        ),
      },
      {
        id: 'rich2',
        title: 'Statistics',
        content: (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box>
              <Typography variant="h4" color="primary">1,234</Typography>
              <Typography variant="caption">Users</Typography>
            </Box>
            <Box>
              <Typography variant="h4" color="secondary">567</Typography>
              <Typography variant="caption">Orders</Typography>
            </Box>
            <Box>
              <Typography variant="h4" color="success.main">89%</Typography>
              <Typography variant="caption">Satisfaction</Typography>
            </Box>
          </Box>
        ),
      },
    ];
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={richItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const Settings: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const settingsItems: AccordionItem[] = [
      {
        id: 'account',
        title: 'Account Settings',
        content: 'Manage your account information, email preferences, and password settings.',
      },
      {
        id: 'privacy',
        title: 'Privacy & Security',
        content: 'Control who can see your information and how your data is used.',
      },
      {
        id: 'notifications',
        title: 'Notifications',
        content: 'Choose what notifications you want to receive and how you want to receive them.',
      },
      {
        id: 'billing',
        title: 'Billing & Subscription',
        content: 'View your current plan, payment methods, and billing history.',
      },
    ];
    return (
      <Box sx={{ width: 600 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Settings</Typography>
        <MyAccordion
          items={settingsItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const Documentation: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>('intro');
    const docItems: AccordionItem[] = [
      {
        id: 'intro',
        title: '1. Introduction',
        content: 'Welcome to our documentation. This guide will help you get started with our platform.',
      },
      {
        id: 'installation',
        title: '2. Installation',
        content: 'Run npm install to install all dependencies. Make sure you have Node.js 16+ installed.',
      },
      {
        id: 'config',
        title: '3. Configuration',
        content: 'Create a .env file in the root directory and add your API keys and configuration variables.',
      },
      {
        id: 'usage',
        title: '4. Basic Usage',
        content: 'Import the components you need and start building your application. Check our examples for more details.',
      },
      {
        id: 'api',
        title: '5. API Reference',
        content: 'Complete API documentation with all available methods, props, and return types.',
      },
    ];
    return (
      <Box sx={{ width: 600 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Documentation</Typography>
        <MyAccordion
          items={docItems}
          expanded={expanded}
          onChange={setExpanded}
        />
      </Box>
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    return (
      <Box sx={{ width: 500 }}>
        <MyAccordion
          items={basicItems}
          expanded={expanded}
          onChange={setExpanded}
          sx={{
            '&.MuiAccordion-root': {
              border: '1px solid',
              borderColor: 'primary.main',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                margin: '8px 0',
              },
            },
          }}
        />
      </Box>
    );
  },
};
