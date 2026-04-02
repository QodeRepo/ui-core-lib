import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export interface AppBarProps {
  logo?: React.ReactNode;
  title?: string;
  navItems?: { label: string; onClick?: () => void }[];
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  color?: "primary" | "secondary" | "default" | "transparent" | "inherit";
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  loginLabel?: string;
  signupLabel?: string;
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
  loginLabel = "Login",
  signupLabel = "Sign up",
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
            <Button
              key={item.label}
              onClick={item.onClick}
              sx={{ color: "text.secondary" }}
            >
              {item.label}
            </Button>
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
          <Button
            onClick={onLoginClick}
            sx={(theme) => ({
              color: theme.palette.indigo[200],
            })}
          >
            {loginLabel}
          </Button>

          <Button
            variant="contained"
            onClick={onSignupClick}
            sx={(theme) => ({
              backgroundColor: theme.palette.button.primary.background,
              color: theme.palette.button.primary.text,
            })}
          >
            {signupLabel}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
