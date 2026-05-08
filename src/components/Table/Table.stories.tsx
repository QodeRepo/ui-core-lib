import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Chip, Typography } from "@mui/material";
import Table from "./Table";
import type { MyTableColumn, MyTableRow } from "./Table";

const columns: MyTableColumn[] = [
  { key: "name", label: "Name", minWidth: 220 },
  { key: "status", label: "Status", minWidth: 140, align: "center" },
  { key: "type", label: "Type", minWidth: 160, align: "center" },
  { key: "updated", label: "Updated", minWidth: 150, align: "right" },
];

const rows: MyTableRow[] = [
  {
    id: "row-1",
    cells: [
      <Box key="name" sx={{ minWidth: 0 }}>
        <Typography fontWeight={700}>Primary Target</Typography>
        <Typography variant="caption" color="text.secondary">
          api.example.com
        </Typography>
      </Box>,
      <Typography key="status" variant="body2" textAlign="center">
        Active
      </Typography>,
      <Box key="type" sx={{ display: "flex", justifyContent: "center" }}>
        <Chip size="small" label="HTTP" />
      </Box>,
      <Typography key="updated" variant="body2" textAlign="right">
        May 06, 2026
      </Typography>,
    ],
  },
  {
    id: "row-2",
    cells: [
      <Box key="name" sx={{ minWidth: 0 }}>
        <Typography fontWeight={700}>Staging Target</Typography>
        <Typography variant="caption" color="text.secondary">
          staging.example.com
        </Typography>
      </Box>,
      <Typography key="status" variant="body2" textAlign="center">
        Warning
      </Typography>,
      <Box key="type" sx={{ display: "flex", justifyContent: "center" }}>
        <Chip size="small" label="API Key" />
      </Box>,
      <Typography key="updated" variant="body2" textAlign="right">
        May 05, 2026
      </Typography>,
    ],
  },
];

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns,
    rows,
    minWidth: 700,
  },
};

export const Loading: Story = {
  args: {
    columns,
    rows: [],
    loading: true,
    minWidth: 700,
  },
};

export const Empty: Story = {
  args: {
    columns,
    rows: [],
    emptyMessage: "No rows found.",
    minWidth: 700,
  },
};
