import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';
import type { DrawerProps, IconButtonProps, SxProps, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export type NavItem = {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export type MySideNavProps = {
  width: number;
  title: string;
  items: NavItem[];
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  menuIcon?: React.ReactNode;
  defaultActive?: string;
  showDivider?: boolean;
  headerBgColor?: string;
  headerTextColor?: string;
  iconButtonProps?: IconButtonProps;
  drawerProps?: Omit<DrawerProps, 'open' | 'onClose' | 'anchor'>;
  headerSx?: SxProps<Theme>;
  listSx?: SxProps<Theme>;
};

const MySideNav = ({ 
  width, 
  title, 
  items,
  anchor,
  menuIcon,
  defaultActive,
  showDivider,
  headerBgColor,
  headerTextColor,
  iconButtonProps,
  drawerProps,
  headerSx,
  listSx,
}: MySideNavProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(defaultActive || items[0]?.label || '');

  return (
    <>
      <IconButton onClick={() => setOpen(true)} {...iconButtonProps}>
        {menuIcon || <MenuIcon />}
      </IconButton>

      <Drawer 
        anchor={anchor || 'left'} 
        open={open} 
        onClose={() => setOpen(false)}
        {...drawerProps}
      >
        <Box sx={{ width }} role="presentation">
          <Box 
            sx={{ 
              p: 2, 
              bgcolor: headerBgColor || 'primary.main', 
              color: headerTextColor || 'white',
              ...headerSx
            }}
          >
            <Typography variant="h6">{title}</Typography>
          </Box>
          {(showDivider === undefined || showDivider) && <Divider />}
          <List sx={listSx}>
            {items.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  selected={active === item.label}
                  disabled={item.disabled}
                  onClick={() => {
                    setActive(item.label);
                    item.onClick?.();
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MySideNav;
