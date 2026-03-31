import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

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
  onLoginClick,
  onSignupClick,
  loginLabel = "Login",
  signupLabel = "Sign up",
  action,
}: AppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar
      position={position}
      elevation={0}
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          {action}

          {navItems.length > 0 && (
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <IconButton
                color="inherit"
                onClick={(e) => setAnchorElNav(e.currentTarget)}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => {
                      item.onClick?.();
                      setAnchorElNav(null);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

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
              color: theme.palette.indigo?.[200],
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