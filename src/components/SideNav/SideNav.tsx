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
import { colorTokens } from "../../tokens";

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

  return (
    <>
      <IconButton onClick={() => setOpen(true)} {...iconButtonProps}>
        {menuIcon || <MenuIcon />}
      </IconButton>

      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        {...drawerProps}
        PaperProps={{
          ...drawerProps?.PaperProps,
          sx: {
            width,
            bgcolor: colorTokens.background.dark.muted,
            color: colorTokens.text.dark.primary,
            borderRight: `1px solid ${colorTokens.divider.dark}`,
            boxShadow: "none",
            ...(drawerProps?.PaperProps?.sx || {}),
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: colorTokens.background.dark.muted,
          }}
          role="presentation"
        >
          <Box
            sx={{
              px: 2,
              py: 2.5,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              bgcolor: headerBgColor || colorTokens.background.dark.muted,
              color: headerTextColor || colorTokens.text.dark.primary,
              ...headerSx,
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "6px",
                bgcolor: colorTokens.indigo.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colorTokens.common.white,
                fontSize: 14,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              Q
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: colorTokens.text.dark.primary,
                letterSpacing: "0.01em",
              }}
            >
              {title}
            </Typography>
          </Box>

          {showDivider && (
            <Divider
              sx={{
                borderColor: colorTokens.divider.dark,
              }}
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
                    sx={{
                      minHeight: 40,
                      px: 1.25,
                      borderRadius: "8px",
                      color: selected
                        ? colorTokens.text.dark.primary
                        : colorTokens.text.dark.secondary,
                      "&:hover": {
                        bgcolor: colorTokens.action.dark.hover,
                      },
                      "&.Mui-selected": {
                        bgcolor: colorTokens.action.dark.selected,
                        color: colorTokens.indigo[200],
                      },
                      "&.Mui-selected:hover": {
                        bgcolor: colorTokens.action.dark.selected,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 32,
                        color: selected
                          ? colorTokens.text.dark.primary
                          : colorTokens.text.dark.secondary,
                      }}
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
              sx={{
                borderColor: colorTokens.divider.dark,
              }}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MySideNav;
