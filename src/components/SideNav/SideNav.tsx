import { useState } from "react";
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
} from "@mui/material";
import type {
  DrawerProps,
  IconButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  anchor?: "left" | "right" | "top" | "bottom";
  menuIcon?: React.ReactNode;
  defaultActive?: string;
  showDivider?: boolean;
  headerBgColor?: string;
  headerTextColor?: string;
  iconButtonProps?: IconButtonProps;
  drawerProps?: Omit<DrawerProps, "open" | "onClose" | "anchor">;
  headerSx?: SxProps<Theme>;
  listSx?: SxProps<Theme>;
};

const MySideNav = ({
  width,
  title,
  items,
  anchor = "left",
  menuIcon,
  defaultActive,
  showDivider = true,
  headerBgColor,
  headerTextColor,
  iconButtonProps,
  drawerProps,
  headerSx,
  listSx,
}: MySideNavProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(defaultActive || items[0]?.label || "");
  const logoText = title.trim().charAt(0).toUpperCase() || "Q";
  const paperSx: SxProps<Theme> = [
    (theme) => ({
      width,
      bgcolor: theme.palette.background.muted,
      color: theme.palette.text.primary,
      borderRight: `1px solid ${theme.palette.divider}`,
      boxShadow: "none",
    }),
    ...(drawerProps?.PaperProps?.sx
      ? Array.isArray(drawerProps.PaperProps.sx)
        ? drawerProps.PaperProps.sx
        : [drawerProps.PaperProps.sx]
      : []),
  ];
  const headerStyles: SxProps<Theme> = [
    (theme) => ({
      px: 2,
      py: 2.5,
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      bgcolor: headerBgColor || theme.palette.background.muted,
      color: headerTextColor || theme.palette.text.primary,
    }),
    ...(headerSx ? (Array.isArray(headerSx) ? headerSx : [headerSx]) : []),
  ];

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        aria-label={iconButtonProps?.["aria-label"] || "open side navigation"}
        {...iconButtonProps}
      >
        {menuIcon || <MenuIcon />}
      </IconButton>

      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        {...drawerProps}
        PaperProps={{
          ...drawerProps?.PaperProps,
          sx: paperSx,
        }}
      >
        <Box
          sx={(theme) => ({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: theme.palette.background.muted,
          })}
          role="presentation"
        >
          <Box sx={headerStyles}>
            <Box
              sx={(theme) => ({
                width: 24,
                height: 24,
                borderRadius: "6px",
                bgcolor: theme.palette.indigo.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme.palette.common.white,
                fontSize: 14,
                fontWeight: 700,
                flexShrink: 0,
              })}
            >
              {logoText}
            </Box>

            <Typography
              variant="subtitle1"
              sx={(theme) => ({
                fontWeight: 700,
                color: headerTextColor || theme.palette.text.primary,
                letterSpacing: "0.01em",
              })}
            >
              {title}
            </Typography>
          </Box>

          {showDivider && (
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.divider,
              })}
            />
          )}

          <List
            sx={{
              px: 1,
              py: 1.5,
              ...listSx,
            }}
          >
            {items.map((item) => {
              const selected = active === item.label;

              return (
                <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selected}
                    disabled={item.disabled}
                    onClick={() => {
                      setActive(item.label);
                      item.onClick?.();
                      setOpen(false);
                    }}
                    sx={(theme) => ({
                      minHeight: 40,
                      px: 1.25,
                      borderRadius: "8px",
                      color: selected
                        ? theme.palette.text.primary
                        : theme.palette.text.secondary,
                      "&:hover": {
                        bgcolor: theme.palette.action.hover,
                      },
                      "&.Mui-selected": {
                        bgcolor: theme.palette.action.selected,
                        color: theme.palette.indigo[200],
                      },
                      "&.Mui-selected:hover": {
                        bgcolor: theme.palette.action.selected,
                      },
                    })}
                  >
                    <ListItemIcon
                      sx={(theme) => ({
                        minWidth: 32,
                        color: selected
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                      })}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: selected ? 600 : 500,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ mt: "auto" }}>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.divider,
              })}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MySideNav;
