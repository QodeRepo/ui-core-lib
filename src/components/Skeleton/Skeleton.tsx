import { Skeleton, Box } from '@mui/material';
import type { SkeletonProps } from '@mui/material';

export type SkeletonItem = {
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
  width?: number | string;
  height?: number | string;
  animation?: 'pulse' | 'wave' | false;
  sx?: SkeletonProps['sx'];
};

export type MySkeletonProps = {
  items?: SkeletonItem[];
  count?: number;
  spacing?: number;
} & SkeletonProps;

const MySkeleton = ({
  items,
  count,
  spacing,
  ...props
}: MySkeletonProps) => {
  // If items array is provided, render multiple skeletons
  if (items && items.length > 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing || 1 }}>
        {items.map((item, index) => (
          <Skeleton
            key={index}
            variant={item.variant}
            width={item.width}
            height={item.height}
            animation={item.animation}
            sx={item.sx}
          />
        ))}
      </Box>
    );
  }

  // If count is provided, render that many identical skeletons
  if (count && count > 1) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing || 1 }}>
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} {...props} />
        ))}
      </Box>
    );
  }

  // Otherwise render a single skeleton
  return <Skeleton {...props} />;
};

export default MySkeleton;
