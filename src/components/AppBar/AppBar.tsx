import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyButton from "../Button";

export interface AppBarProps {
  logo?: React.ReactNode;
  title?: string;
  navItems?: { label: string; onClick?: () => void }[];
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  color?: "primary" | "secondary" | "default" | "transparent" | "inherit";
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  onLogoutClick?: () => void;
  isAuthenticated?: boolean;
  loginLabel?: string;
  signupLabel?: string;
  logoutLabel?: string;
  action?: React.ReactNode;
}

function MyAppBar({
  logo,
  title,
  navItems = [],
  position = "static",
  color = "default",
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  isAuthenticated = false,
  loginLabel = "Login",
  signupLabel = "Sign up",
  logoutLabel = "Logout",
  action,
}: AppBarProps) {
  return (
    <AppBar
      position={position}
      color={color}
      elevation={0}
      sx={color === "default" ? { backgroundColor: "background.default" } : {}}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          {action}

          {logo}
          {title && (
            <Typography variant="h6" sx={{ ml: logo || action ? 1 : 0 }}>
              {title}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            gap: 2,
          }}
        >
          {navItems.map((item) => (
            <MyButton
              key={item.label}
              label={item.label}
              onClick={item.onClick}
              variant="text"
              sx={{ color: "text.secondary" }}
            />
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            alignItems: "center",
          }}
        >
          {!isAuthenticated ? (
            <>
              <MyButton
                label={loginLabel}
                onClick={onLoginClick}
                variant="text"
                sx={(theme) => ({
                  color: theme.palette.indigo[200],
                })}
              />

              <MyButton
                label={signupLabel}
                variant="contained"
                onClick={onSignupClick}
                color="primary"
              />
            </>
          ) : (
            <MyButton
              label={logoutLabel}
              onClick={onLogoutClick}
              variant="outlined"
              color="primary"
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
