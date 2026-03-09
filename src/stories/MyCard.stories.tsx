import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import MyCard from '../components/Card/Card';

const meta: Meta<typeof MyCard> = {
  title: 'Components/MyCard',
  component: MyCard,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24 },
    },
    imageHeight: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MyCard>;

// Simple card with just title and description
export const Simple: Story = {
  args: {
    title: 'Simple Card',
    description: 'This is a simple card with title and description only.',
    elevation: 2,
  },
};

// Card with image
export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature Photography',
    description: 'A stunning view of mountains and valleys during sunset.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    imageHeight: 200,
    elevation: 3,
  },
};

// Card with actions
export const WithActions: Story = {
  args: {
    title: 'Product Card',
    subtitle: '$49.99',
    description: 'High-quality product with excellent features and great value.',
    actions: [
      { label: 'Buy Now', onClick: () => alert('Buy clicked'), variant: 'contained', color: 'primary' },
      { label: 'Learn More', onClick: () => alert('Learn more clicked'), variant: 'outlined' },
    ],
    elevation: 2,
  },
};

// Full featured card
export const FullFeatured: Story = {
  args: {
    title: 'Premium Package',
    subtitle: 'Best Value',
    description: 'Get access to all features including advanced analytics, priority support, and unlimited usage.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
    imageHeight: 160,
    actions: [
      { label: 'Subscribe', onClick: () => alert('Subscribe clicked'), variant: 'contained', color: 'success' },
      { label: 'Details', onClick: () => alert('Details clicked'), variant: 'text' },
    ],
    elevation: 4,
  },
};

// No image card
export const NoImage: Story = {
  args: {
    title: 'Information Card',
    subtitle: 'Important Notice',
    description: 'This card displays important information without any image. Perfect for text-heavy content.',
    actions: [
      { label: 'Got it', onClick: () => alert('Acknowledged'), variant: 'contained' },
    ],
    elevation: 1,
  },
};

// Minimal card
export const Minimal: Story = {
  args: {
    title: 'Minimal Design',
    description: 'Clean and simple card with minimal styling.',
    elevation: 0,
  },
};

// High elevation card
export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    description: 'This card has high elevation for a prominent appearance.',
    elevation: 10,
  },
};

// Multiple cards in grid
export const MultipleCards: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
      <MyCard
        title="Card 1"
        subtitle="Featured"
        description="First card in the grid layout."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300"
        imageHeight={140}
        actions={[
          { label: 'View', onClick: () => alert('Card 1'), variant: 'outlined' },
        ]}
        elevation={2}
      />
      <MyCard
        title="Card 2"
        subtitle="Popular"
        description="Second card with different content."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300"
        imageHeight={140}
        actions={[
          { label: 'View', onClick: () => alert('Card 2'), variant: 'outlined' },
        ]}
        elevation={2}
      />
      <MyCard
        title="Card 3"
        subtitle="New"
        description="Third card completing the grid."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300"
        imageHeight={140}
        actions={[
          { label: 'View', onClick: () => alert('Card 3'), variant: 'outlined' },
        ]}
        elevation={2}
      />
    </Box>
  ),
};

// Product card example
export const ProductCard: Story = {
  args: {
    title: 'Wireless Headphones',
    subtitle: '$129.99',
    description: 'Premium sound quality with active noise cancellation. 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    imageHeight: 180,
    actions: [
      { label: 'Add to Cart', onClick: () => alert('Added to cart'), variant: 'contained', color: 'primary' },
      { label: 'Wishlist', onClick: () => alert('Added to wishlist'), variant: 'outlined', color: 'secondary' },
    ],
    elevation: 3,
  },
};

// Blog post card
export const BlogCard: Story = {
  args: {
    title: 'Getting Started with Material-UI',
    subtitle: 'Published on March 5, 2026',
    description: 'Learn how to build beautiful React applications using Material-UI components and best practices.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    imageHeight: 160,
    actions: [
      { label: 'Read More', onClick: () => alert('Reading article'), variant: 'text', color: 'primary' },
      { label: 'Share', onClick: () => alert('Sharing'), variant: 'text' },
    ],
    elevation: 2,
  },
};

// Custom styled card
export const CustomStyled: Story = {
  args: {
    title: 'Custom Card',
    description: 'This card has custom styling applied via sx prop.',
    actions: [
      { label: 'Action', onClick: () => alert('Custom action'), variant: 'contained', color: 'warning' },
    ],
    elevation: 5,
    sx: {
      backgroundColor: '#f5f5f5',
      border: '2px solid #1976d2',
      borderRadius: 3,
    },
  },
};
