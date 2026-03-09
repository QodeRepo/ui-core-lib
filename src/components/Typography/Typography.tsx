import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

type MyTypographyProps = TypographyProps & {
  text: string;
};

const MyTypography = ({ text, ...props }: MyTypographyProps) => {
  return <MuiTypography {...props}>{text}</MuiTypography>;
};

export default MyTypography;
