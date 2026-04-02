import { Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { TabsProps, TabProps } from "@mui/material";
import type { SyntheticEvent } from "react";

export type TabItem = {
  label: string;
  value: string | number;
  icon?: TabProps["icon"];
  disabled?: boolean;
};

export type MyTabsProps = {
  tabs: TabItem[];
  value: string | number;
  onChange: (event: SyntheticEvent, value: string | number) => void;
  centered?: boolean;
  variant?: "standard" | "scrollable" | "fullWidth";
  orientation?: "horizontal" | "vertical";
  tabSx?: TabProps["sx"];
} & Omit<TabsProps, "value" | "onChange" | "children">;

const MyTabs = ({
  tabs,
  value,
  onChange,
  centered = false,
  variant = "standard",
  orientation = "horizontal",
  tabSx,
  sx,
  ...props
}: MyTabsProps) => {
  const theme = useTheme();

  return (
    <Tabs
      value={value}
      onChange={onChange}
      centered={centered}
      variant={variant}
      orientation={orientation}
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: theme.palette.tabs.indicator,
        },
        ...sx,
      }}
      {...props}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          icon={tab.icon}
          disabled={tab.disabled}
          disableRipple
          sx={{
            color: theme.palette.text.secondary,
            "&.Mui-selected": {
              color: theme.palette.tabs.activeText, 
            },
            ...tabSx,
          }}
        />
      ))}
    </Tabs>
  );
};

export default MyTabs;
