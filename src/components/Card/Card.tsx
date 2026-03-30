import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import MyTypography from "../Typography/Typography";
import type { ReactNode } from "react";

type CardAction = {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
};

type MyCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageHeight?: number;
  actions?: CardAction[];
  elevation?: number;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  header?: ReactNode;
};

const MyCard = ({
  title,
  subtitle,
  description,
  image,
  imageHeight = 140,
  actions,
  elevation = 1,
  sx,
  children,
  header,
}: MyCardProps) => {
  return (
    <Card elevation={elevation} sx={sx}>
      {header && (
        <div style={{ padding: "16px 16px 0 16px", marginBottom: "12px" }}>
          {header}
        </div>
      )}
      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={title || "Card image"}
        />
      )}
      <CardContent>
        {title && <MyTypography text={title} variant="h5" component="div" />}
        {subtitle && (
          <MyTypography
            text={subtitle}
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2.8 , mt: 1}}
          />
        )}
        {description && <MyTypography text={description} variant="body2" />}
        {children}
      </CardContent>
      {actions && actions.length > 0 && (
        <CardActions>
          {actions.map((action, index) => (
            <Button
              key={index}
              size="small"
              variant={action.variant || "text"}
              color={action.color || "primary"}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </CardActions>
      )}
    </Card>
  );
};

export default MyCard;
