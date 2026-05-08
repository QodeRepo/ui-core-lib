import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { SxProps, Theme, TableCellProps } from "@mui/material";
import type { ReactNode } from "react";
import { colorTokens } from "../../tokens";

export type MyTableColumn = {
  key: string;
  label: ReactNode;
  align?: TableCellProps["align"];
  minWidth?: number | string;
};

export type MyTableRow = {
  id: string;
  cells: ReactNode[];
};

export type MyTableProps = {
  columns: MyTableColumn[];
  rows: MyTableRow[];
  loading?: boolean;
  emptyMessage?: string;
  minWidth?: number;
  stickyHeader?: boolean;
  containerSx?: SxProps<Theme>;
  tableSx?: SxProps<Theme>;
  headerCellSx?: SxProps<Theme>;
  bodyCellSx?: SxProps<Theme>;
};

const MyTable = ({
  columns,
  rows,
  loading = false,
  emptyMessage = "No data to show",
  minWidth = 900,
  stickyHeader = true,
  containerSx,
  tableSx,
  headerCellSx,
  bodyCellSx,
}: MyTableProps) => {
  const normalizeSx = (sx?: SxProps<Theme>) => {
    if (!sx) return [];
    return Array.isArray(sx) ? sx : [sx];
  };

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={[
        {
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
          borderRadius: 0,
          border: "none",
          backgroundColor: colorTokens.background.dark.section,
        },
        ...normalizeSx(containerSx),
      ]}
    >
      <Table
        stickyHeader={stickyHeader}
        aria-label="table"
        sx={[
          {
            minWidth,
            width: "100%",
            backgroundColor: colorTokens.background.dark.section,
          },
          ...normalizeSx(tableSx),
        ]}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key}
                align={column.align}
                sx={[
                  {
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                    backgroundColor: colorTokens.background.dark.section,
                    color: colorTokens.text.dark.secondary,
                    fontSize: "0.875rem",
                    ...(column.minWidth ? { minWidth: column.minWidth } : {}),
                  },
                  ...normalizeSx(headerCellSx),
                ]}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                Loading...
              </TableCell>
            </TableRow>
          ) : rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow key={row.id} hover>
                {columns.map((column, index) => {
                  const cell = row.cells[index];

                  return (
                    <TableCell
                      key={`${row.id}-${column.key}`}
                      align={column.align}
                      sx={[
                        {
                          py: 2,
                          backgroundColor: colorTokens.background.dark.section,
                          color: colorTokens.text.dark.secondary,
                          fontSize: "1rem",
                          ...(column.minWidth ? { minWidth: column.minWidth } : {}),
                        },
                        ...normalizeSx(bodyCellSx),
                      ]}
                    >
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
