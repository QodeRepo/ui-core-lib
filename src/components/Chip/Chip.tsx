import MuiChip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";
import type { ReactNode } from "react";
import { alpha } from "@mui/material/styles";
import {
  colorTokens,
  spacingTokens,
  typographyTokens,
  borderTokens,
} from "../../tokens";

export type MyChipProps = {
  label: ReactNode;
  clickable?: boolean;
  tone?: "default" | "brand" | "subtle" | "outline" | "critical" | "verified";
} & ChipProps;

const MyChip = ({
  label,
  clickable,
  onClick,
  onDelete,
  variant = "filled",
  color = "default",
  size = "medium",
  tone = "default",
  ...props
}: MyChipProps) => {
  const isNonDefaultTone = tone !== "default";

  const chipProps = {
    label,
    variant: isNonDefaultTone ? "outlined" : variant,
    color,
    size: isNonDefaultTone ? "small" : size,
    clickable: clickable ?? Boolean(onClick),
    onClick: (clickable ?? Boolean(onClick)) ? onClick : undefined,
    onDelete,
    ...props,
  };

  const brandStyles =
    tone === "brand"
      ? {
          mb: spacingTokens.scale[2],
          minHeight: spacingTokens.scale[4],
          px: spacingTokens.scale[1],
          py: spacingTokens.scale[1.5],
          borderRadius: 999,
          borderColor: alpha(colorTokens.primary.main, 0.2),
          bgcolor: alpha(colorTokens.primary.main, 0.1),
          color: colorTokens.primary.main,
          backdropFilter: "blur(8px)",
          boxShadow: `inset 0 1px 0 ${alpha(colorTokens.common.white, 0.06)}`,
          "& .MuiChip-label": {
            lineHeight: 1,
            fontSize: typographyTokens.fontSize.sm,
            letterSpacing: typographyTokens.letterSpacing.wide,
            textTransform: "uppercase",
          },
          "& .MuiChip-icon": {
            fontSize: typographyTokens.fontSize.base,
            color: colorTokens.primary.main,
            ml: 0,
            mr: spacingTokens.scale[0.5],
          },
        }
      : tone === "subtle"
        ? {
            minHeight: spacingTokens.scale[5],
            px: spacingTokens.scale[2],
            py: spacingTokens.scale[2],
            borderRadius: 999,
            borderColor: alpha(colorTokens.common.white, 0.12),
            bgcolor: alpha(colorTokens.common.white, 0.04),
            color: colorTokens.badge.subtleText,
            boxShadow: "none",
            "& .MuiChip-label": {
              lineHeight: 1,
              fontSize: typographyTokens.fontSize.base,
              fontWeight: typographyTokens.fontWeight.medium,
              letterSpacing: typographyTokens.letterSpacing.wide,
            },
            "& .MuiChip-icon": {
              fontSize: typographyTokens.fontSize.sm,
              color: colorTokens.indigo[200],
              ml: 0,
              mr: spacingTokens.scale[0.5],
            },
          }
        : tone === "critical"
          ? {
              minHeight: spacingTokens.scale[3],
              px: spacingTokens.scale[2],
              py: spacingTokens.scale[2],
              borderRadius: borderTokens.radius.xs,
              borderColor: colorTokens.badge.critical.border,
              bgcolor: colorTokens.badge.critical.background,
              color: colorTokens.badge.critical.text,
              boxShadow: "none",
          "& .MuiChip-label": {
            lineHeight: 1,
            fontSize: typographyTokens.fontSize.sm,
            fontWeight: typographyTokens.fontWeight.bold,
            letterSpacing: typographyTokens.letterSpacing.wide,
            textTransform: "uppercase",
          },
        }
          : tone === "verified"
            ? {
                px: spacingTokens.scale[1],
                py: spacingTokens.scale[1],
                borderRadius: borderTokens.radius.xs,
                borderColor: "currentColor",
                bgcolor: "transparent",
                color: "text.primary",
                boxShadow: "none",
                "& .MuiChip-label": {
                  lineHeight: 1,
                  fontSize: typographyTokens.fontSize.sm,
                  fontWeight: typographyTokens.fontWeight.bold,
                  letterSpacing: typographyTokens.letterSpacing.wide,
                  textTransform: "uppercase",
                },
                "& .MuiChip-icon": {
                  width: 12,
                  height: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: borderTokens.radius.circle,
                  bgcolor: colorTokens.common.white,
                  color: colorTokens.common.black,
                  fontSize: typographyTokens.fontSize.xs,
                  ml: 0,
                  mr: spacingTokens.scale[0.5],
                },
              }
            : tone === "outline"
              ? {
                  minHeight: spacingTokens.scale[3],
                  px: spacingTokens.scale[2],
                  py: spacingTokens.scale[2],
                  borderRadius: borderTokens.radius.xs,
                  borderColor: "currentColor",
                  bgcolor: "transparent",
                  color: "inherit",
                  boxShadow: "none",
                  "& .MuiChip-label": {
                    lineHeight: 1,
                    fontSize: typographyTokens.fontSize.sm,
                    fontWeight: typographyTokens.fontWeight.bold,
                    letterSpacing: typographyTokens.letterSpacing.wide,
                    textTransform: "uppercase",
                  },
                }
              : {};

  return (
    <MuiChip
      {...chipProps}
      sx={{
        "& .MuiChip-label": {
          px:
            tone === "default"
              ? spacingTokens.scale[1.5]
              : spacingTokens.scale[1],
          py: spacingTokens.scale[0.5],
        },
        alignItems: "center",
        ...brandStyles,
        ...props.sx,
      }}
    />
  );
};

export default MyChip;
