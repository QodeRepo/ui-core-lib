import type { Meta, StoryObj } from '@storybook/react-vite';
import TokenShowcase from '../components/TokenShowcase/TokenShowcase';

const meta: Meta<typeof TokenShowcase> = {
  title: 'Design System/TokenShowcase',
  component: TokenShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TokenShowcase>;

export const AllTokens: Story = {
  render: () => <TokenShowcase />,
};
