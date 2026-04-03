import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import MyTabs from "../components/Tabs/Tabs";

const meta: Meta<typeof MyTabs> = {
  title: "Components/MyTabs",
  component: MyTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyTabs>;

const basicTabs = [
  { label: "Home", value: "home" },
  { label: "Profile", value: "profile" },
  { label: "Settings", value: "settings" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ width: 400 }}>
        <MyTabs
          tabs={basicTabs}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
        />
        <Typography sx={{ mt: 2 }}>Selected tab: {value}</Typography>
      </Box>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ width: 500 }}>
        <MyTabs
          tabs={basicTabs}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          variant="fullWidth"
          sx={{ width: "100%" }}
        />
      </Box>
    );
  },
};

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("tab1");

    return (
      <Box sx={{ width: 400 }}>
        <MyTabs
          tabs={[
            { label: "Tab 1", value: "tab1" },
            { label: "Tab 2", value: "tab2" },
            { label: "Tab 3", value: "tab3" },
            { label: "Tab 4", value: "tab4" },
            { label: "Tab 5", value: "tab5" },
            { label: "Tab 6", value: "tab6" },
          ]}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        />
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ width: 500 }}>
        <MyTabs
          tabs={[
            { label: "Home", value: "home", icon: <HomeIcon /> },
            { label: "Profile", value: "profile", icon: <PersonIcon /> },
            { label: "Settings", value: "settings", icon: <SettingsIcon /> },
          ]}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
};

export const WithDisabledTab: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ width: 500 }}>
        <MyTabs
          tabs={[
            { label: "Home", value: "home" },
            { label: "Profile", value: "profile", disabled: true },
            { label: "Settings", value: "settings" },
          ]}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
        />
      </Box>
    );
  },
};

export const Centered: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ width: 500 }}>
        <MyTabs
          tabs={basicTabs}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          centered
        />
      </Box>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ height: 200 }}>
        <MyTabs
          tabs={basicTabs}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          orientation="vertical"
        />
      </Box>
    );
  },
};

export const CustomStyled: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>("home");

    return (
      <Box sx={{ width: 500 }}>
        <MyTabs
          tabs={basicTabs}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          sx={{
            "& .MuiTabs-indicator": {
              height: 4,
              borderRadius: 2,
            },
          }}
          tabSx={{
            textTransform: "none",
            fontWeight: 600,
            minHeight: 48,
          }}
        />
      </Box>
    );
  },
};