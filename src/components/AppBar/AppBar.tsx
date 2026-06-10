import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MyButton from "../Button";
import { typographyTokens } from "../../tokens";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { colorTokens } from "../../tokens";

export interface AppBarProps {
  logo?: React.ReactNode;
  title?: string;
  navItems?: { label: string; onClick?: () => void }[];
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  color?: "primary" | "secondary" | "default" | "transparent" | "inherit";

  // Auth props
  isAuthenticated?: boolean;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  onLogoutClick?: () => void;
  loginLabel?: string;
  signupLabel?: string;
  logoutLabel?: string;
  userEmail?: string;
  action?: React.ReactNode;
}

function MyAppBar({
  logo,
  title,
  navItems = [],
  position = "static",
  color = "default",

  isAuthenticated = false,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  loginLabel = "Login",
  signupLabel = "Sign up",
  logoutLabel = "Logout",
  userEmail,
  action,
}: AppBarProps) {
  const [userMenuAnchorEl, setUserMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const userMenuOpen = Boolean(userMenuAnchorEl);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <AppBar
      position={position}
      color={color}
      elevation={0}
      sx={color === "default" ? { backgroundColor: "background.default" } : {}}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section: Logo + Title + Custom Action */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          {action}
          {logo}
          {title && (
            <Typography variant="h6" sx={{ ml: logo || action ? 1 : 0 }}>
              {title}
            </Typography>
          )}
        </Box>

        {/* Center Navigation */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            gap: { sm: 2, md: 3 },
            minWidth: 0,
          }}
        >
          {navItems.map((item) => (
            <MyButton
              key={item.label}
              label={item.label}
              onClick={item.onClick}
              variant="text"
              sx={{
                color: "text.secondary",
                fontSize: {
                  sm: typographyTokens.fontSize.sm,
                  md: typographyTokens.fontSize.base,
                },
                px: { sm: 0.5, md: 1 },
                minWidth: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2.5,
            alignItems: "center",
          }}
        >
          {isAuthenticated ? (
            <>
              <MyButton
                label={logoutLabel}
                variant="contained"
                color="error"
                onClick={onLogoutClick}
              />

              <IconButton
                onClick={handleUserMenuOpen}
                aria-label="open user menu"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.divider}`,
                  width: 36,
                  height: 36,
                })}
              >
                <AccountCircleOutlinedIcon fontSize="small" />
              </IconButton>

              <Menu
                anchorEl={userMenuAnchorEl}
                open={userMenuOpen}
                onClose={handleUserMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem disabled sx={{ minWidth: 240, }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: typographyTokens.fontWeight.bold,
                        color: colorTokens.common.white,
                      }}
                    >
                      User:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: typographyTokens.fontWeight.bold,
                        color: colorTokens.common.white,
                      }}
                    >
                      {userEmail || "Unknown email"}
                    </Typography>
                  </Box>
                </MenuItem>
                <Divider />
              </Menu>
            </>
          ) : (
            <>
              <MyButton
                label={loginLabel}
                onClick={onLoginClick}
                variant="text"
                sx={(theme) => ({
                  color:
                    theme.palette.indigo?.[200] || theme.palette.primary.main,
                })}
              />

              <MyButton
                label={signupLabel}
                variant="contained"
                onClick={onSignupClick}
                color="primary"
              />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
