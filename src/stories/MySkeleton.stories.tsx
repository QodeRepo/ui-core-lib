import type { Meta, StoryObj } from '@storybook/react-vite';
import MySkeleton from '../components/Skeleton/Skeleton';
import type { SkeletonItem } from '../components/Skeleton/Skeleton';
import { Box, Card, CardContent } from '@mui/material';

const meta: Meta<typeof MySkeleton> = {
  title: 'Components/MySkeleton',
  component: MySkeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MySkeleton>;

export const Text: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <MySkeleton variant="text" />
    </Box>
  ),
};

export const Rectangular: Story = {
  render: () => (
    <MySkeleton variant="rectangular" width={200} height={100} />
  ),
};

export const Rounded: Story = {
  render: () => (
    <MySkeleton variant="rounded" width={200} height={100} />
  ),
};

export const Circular: Story = {
  render: () => (
    <MySkeleton variant="circular" width={60} height={60} />
  ),
};

export const MultipleLines: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <MySkeleton variant="text" count={3} spacing={1} />
    </Box>
  ),
};

export const Animations: Story = {
  render: () => (
    <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <MySkeleton variant="text" animation="pulse" />
      <MySkeleton variant="text" animation="wave" />
      <MySkeleton variant="text" animation={false} />
    </Box>
  ),
};

export const UserProfile: Story = {
  render: () => {
    const items: SkeletonItem[] = [
      { variant: 'circular', width: 60, height: 60 },
      { variant: 'text', width: '60%', height: 30 },
      { variant: 'text', width: '40%', height: 20 },
    ];
    return (
      <Box sx={{ width: 300 }}>
        <MySkeleton items={items} spacing={1} />
      </Box>
    );
  },
};

export const BlogPost: Story = {
  render: () => {
    const items: SkeletonItem[] = [
      { variant: 'rectangular', width: '100%', height: 200 },
      { variant: 'text', width: '90%', height: 40 },
      { variant: 'text', width: '60%', height: 20 },
      { variant: 'text', width: '100%' },
      { variant: 'text', width: '100%' },
      { variant: 'text', width: '80%' },
    ];
    return (
      <Box sx={{ width: 400 }}>
        <MySkeleton items={items} spacing={1} />
      </Box>
    );
  },
};

export const ProductCard: Story = {
  render: () => {
    const items: SkeletonItem[] = [
      { variant: 'rectangular', width: 300, height: 200 },
      { variant: 'text', width: '80%', height: 30 },
      { variant: 'text', width: '50%', height: 20 },
      { variant: 'rectangular', width: '100%', height: 40 },
    ];
    return (
      <Card sx={{ width: 300, padding: 2 }}>
        <MySkeleton items={items} spacing={1.5} />
      </Card>
    );
  },
};

export const CommentSection: Story = {
  render: () => {
    return (
      <Box sx={{ width: 500, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MySkeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <MySkeleton variant="text" width="30%" height={20} />
            <MySkeleton variant="text" width="100%" />
            <MySkeleton variant="text" width="90%" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MySkeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <MySkeleton variant="text" width="25%" height={20} />
            <MySkeleton variant="text" width="100%" />
            <MySkeleton variant="text" width="80%" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MySkeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <MySkeleton variant="text" width="35%" height={20} />
            <MySkeleton variant="text" width="100%" />
          </Box>
        </Box>
      </Box>
    );
  },
};

export const DataTable: Story = {
  render: () => (
    <Box sx={{ width: 600 }}>
      <MySkeleton variant="rectangular" width="100%" height={40} animation="wave" />
      <Box sx={{ mt: 1 }}>
        <MySkeleton variant="text" count={5} spacing={2} />
      </Box>
    </Box>
  ),
};

export const MediaList: Story = {
  render: () => {
    return (
      <Box sx={{ width: 500, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[1, 2, 3].map((item) => (
          <Box key={item} sx={{ display: 'flex', gap: 2 }}>
            <MySkeleton variant="rectangular" width={120} height={90} />
            <Box sx={{ flex: 1 }}>
              <MySkeleton variant="text" width="80%" height={25} />
              <MySkeleton variant="text" width="60%" />
              <MySkeleton variant="text" width="40%" />
            </Box>
          </Box>
        ))}
      </Box>
    );
  },
};

export const Dashboard: Story = {
  render: () => {
    return (
      <Box sx={{ width: 600, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ flex: 1, padding: 2 }}>
            <MySkeleton variant="text" width="50%" height={20} />
            <MySkeleton variant="text" width="40%" height={40} />
          </Card>
          <Card sx={{ flex: 1, padding: 2 }}>
            <MySkeleton variant="text" width="50%" height={20} />
            <MySkeleton variant="text" width="40%" height={40} />
          </Card>
          <Card sx={{ flex: 1, padding: 2 }}>
            <MySkeleton variant="text" width="50%" height={20} />
            <MySkeleton variant="text" width="40%" height={40} />
          </Card>
        </Box>
        <Card>
          <CardContent>
            <MySkeleton variant="rectangular" width="100%" height={200} />
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <MySkeleton variant="text" count={4} spacing={1} />
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <MySkeleton variant="rectangular" width="100%" height={150} />
            </CardContent>
          </Card>
        </Box>
      </Box>
    );
  },
};

export const FormLoading: Story = {
  render: () => {
    const items: SkeletonItem[] = [
      { variant: 'text', width: '30%', height: 20 },
      { variant: 'rectangular', width: '100%', height: 50 },
      { variant: 'text', width: '30%', height: 20 },
      { variant: 'rectangular', width: '100%', height: 50 },
      { variant: 'text', width: '30%', height: 20 },
      { variant: 'rectangular', width: '100%', height: 100 },
      { variant: 'rectangular', width: 120, height: 40 },
    ];
    return (
      <Box sx={{ width: 400 }}>
        <MySkeleton items={items} spacing={2} />
      </Box>
    );
  },
};

export const ImageGallery: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, width: 600 }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <MySkeleton key={index} variant="rectangular" width="100%" height={150} animation="wave" />
      ))}
    </Box>
  ),
};

export const CustomSpacing: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <MySkeleton variant="text" count={4} spacing={3} />
    </Box>
  ),
};
