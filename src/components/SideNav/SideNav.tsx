import { useState, type ReactNode } from "react";
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
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useMediaQuery from "@mui/material/useMediaQuery";

export type NavItem = {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export type MySideNavProps = {
  width: number;
  title?: string;
  items: NavItem[];
  anchor?: "left" | "right" | "top" | "bottom";
  menuIcon?: ReactNode;
  defaultActive?: string;
  activeItem?: string;
  responsive?: boolean;
  breakpoint?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showTrigger?: boolean;
  showDivider?: boolean;
  headerBgColor?: string;
  headerTextColor?: string;
  iconButtonProps?: IconButtonProps;
  drawerProps?: Omit<DrawerProps, "open" | "onClose" | "anchor">;
  headerSx?: SxProps<Theme>;
  listSx?: SxProps<Theme>;
};

type SideNavDrawerContentProps = {
  title?: string;
  logoText: string;
  items: NavItem[];
  selectedLabel: string;
  closeOnSelect: boolean;
  responsive: boolean;
  isDesktop: boolean;
  showDivider: boolean;
  headerTextColor?: string;
  headerBgColor?: string;
  headerSx?: SxProps<Theme>;
  listSx?: SxProps<Theme>;
  iconButtonProps?: IconButtonProps;
  setResponsiveOpen: (open: boolean) => void;
  setActive: (label: string) => void;
};

function SideNavDrawerContent({
  title,
  logoText,
  items,
  selectedLabel,
  closeOnSelect,
  responsive,
  isDesktop,
  showDivider,
  headerTextColor,
  headerBgColor,
  headerSx,
  listSx,
  iconButtonProps,
  setResponsiveOpen,
  setActive,
}: SideNavDrawerContentProps) {
  const renderItems = () =>
    items.map((item) => {
      const selected = selectedLabel === item.label;

      return (
        <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            selected={selected}
            disabled={item.disabled}
            onClick={() => {
              setActive(item.label);
              item.onClick?.();
              if (closeOnSelect) {
                setResponsiveOpen(false);
              }
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
              slotProps={{
                primary: {
                  sx: { fontSize: 14, fontWeight: selected ? 600 : 500 },
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      );
    });

  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.background.muted,
      })}
      role="presentation"
    >
      <Box
        sx={[
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
        ]}
      >
        {title?.trim() ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flex: 1 }}>
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
        ) : (
          <Box sx={{ flex: 1 }} />
        )}

        {responsive && !isDesktop ? (
          <IconButton
            onClick={() => setResponsiveOpen(false)}
            aria-label="close side navigation"
            size="small"
            {...iconButtonProps}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        ) : null}
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
        {renderItems()}
      </List>

      <Box sx={{ mt: "auto" }}>
        <Divider
          sx={(theme) => ({
            borderColor: theme.palette.divider,
          })}
        />
      </Box>
    </Box>
  );
}

const MySideNav = ({
  width,
  title,
  items,
  anchor = "left",
  menuIcon,
  defaultActive,
  activeItem,
  responsive = false,
  breakpoint = "(min-width:1200px)",
  open,
  onOpenChange,
  showTrigger = true,
  showDivider = true,
  headerBgColor,
  headerTextColor,
  iconButtonProps,
  drawerProps,
  headerSx,
  listSx,
}: MySideNavProps) => {
  const [triggerOpen, setTriggerOpen] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const isDesktop = useMediaQuery(breakpoint);
  const [active, setActive] = useState(defaultActive || items[0]?.label || "");
  const trimmedTitle = title?.trim() ?? "";
  const logoText = trimmedTitle ? trimmedTitle.charAt(0).toUpperCase() : "Q";
  const isResponsiveOpen = open ?? internalOpen;
  const setResponsiveOpen = onOpenChange ?? setInternalOpen;
  const selectedItem = activeItem || active;
  const paperSx: SxProps<Theme> = [
    (theme) => ({
      width,
      bgcolor: theme.palette.background.muted,
      color: theme.palette.text.primary,
      borderRight: `1px solid ${theme.palette.divider}`,
      boxShadow: "none",
    }),
  ];

  return (
    <>
      {showTrigger && (!responsive || !isDesktop) ? (
        <IconButton
          onClick={() => {
            if (responsive) {
              setResponsiveOpen(true);
              return;
            }

            setTriggerOpen(true);
          }}
          aria-label={iconButtonProps?.["aria-label"] || "open side navigation"}
          {...iconButtonProps}
        >
          {menuIcon || <MenuIcon />}
        </IconButton>
      ) : null}

      <Drawer
        anchor={anchor}
        variant={responsive && isDesktop ? "persistent" : "temporary"}
        open={responsive ? (isDesktop ? true : isResponsiveOpen) : triggerOpen}
        onClose={() => {
          if (responsive) {
            setResponsiveOpen(false);
            return;
          }

          setTriggerOpen(false);
        }}
        {...drawerProps}
        slotProps={{
          paper: { sx: paperSx },
        }}
      >
        <SideNavDrawerContent
          title={title}
          logoText={logoText}
          items={items}
          selectedLabel={responsive ? selectedItem : active}
          closeOnSelect={!responsive || !isDesktop}
          responsive={responsive}
          isDesktop={isDesktop}
          showDivider={showDivider}
          headerTextColor={headerTextColor}
          headerBgColor={headerBgColor}
          headerSx={headerSx}
          listSx={listSx}
          iconButtonProps={iconButtonProps}
          setResponsiveOpen={setResponsiveOpen}
          setActive={setActive}
        />
      </Drawer>
    </>
  );
};

export default MySideNav;
