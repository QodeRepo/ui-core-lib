import { Paper, type PaperProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { ReactNode } from 'react';

export type MyPaperProps = {
    children?: ReactNode;
    elevation?: PaperProps['elevation'];
    variant?: PaperProps['variant'];
    square?: boolean;
    sx?: SxProps<Theme>;
};

const MyPaper = ({
    children,
    elevation = 1,
    variant = 'elevation',
    square = false,
    sx,
}: MyPaperProps) => {
    return (
        <Paper
            elevation={elevation}
            variant={variant}
            square={square}
            sx={sx}
        >
            {children}
        </Paper>
    );
};

export default MyPaper;
