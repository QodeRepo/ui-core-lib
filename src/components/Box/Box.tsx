import { Box, type BoxProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { ElementType, ReactNode } from 'react';

export type MyBoxProps<C extends ElementType = 'div'> = {
    children?: ReactNode;
    component?: C;
    sx?: SxProps<Theme>;
} & Omit<BoxProps<C>, 'component' | 'sx' | 'children'>;

const MyBox = <C extends ElementType = 'div'>({
    children,
    component,
    sx,
    ...props
}: MyBoxProps<C>) => {
    return (
        <Box component={component} sx={sx} {...props}>
            {children}
        </Box>
    );
};

export default MyBox;
