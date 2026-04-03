import MuiChip from '@mui/material/Chip';
import type { ChipProps } from '@mui/material/Chip';
import type { ReactNode } from 'react';

export type MyChipProps = {
  label: ReactNode;
  clickable?: boolean;
} & ChipProps;

const MyChip =({
  label,
  clickable,
  onClick,
  onDelete,
  variant = 'filled',
  color = 'default',
  size = 'medium',
  ...props
}: MyChipProps) => {
  const chipProps = {
    label,
    variant,
    color,
    size,
    clickable: clickable ?? Boolean(onClick),
    onClick: (clickable ?? Boolean(onClick)) ? onClick : undefined,
    onDelete,
    ...props,
  };

   return (
    <MuiChip
      {...chipProps}
      sx={{
        "& .MuiChip-label": {
          px: 1,
          py: 0.5,
        },
        ...props.sx,
      }}
    />
  );
};

export default MyChip;
