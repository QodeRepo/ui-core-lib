import { Box, Card, CardContent, Typography } from '@mui/material';
import { useDesignTokens } from '../../hooks/useDesignTokens';

type ColorKey = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

/**
 * Token Showcase Component - Demonstrates all design tokens visually
 */
const TokenShowcase = () => {
  const { colors, spacing, typography, borders, shadows } = useDesignTokens();
  const colorKeys: ColorKey[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

  return (
    <Box sx={{ p: spacing.scale[4] }}>
      <Typography variant="h3" sx={{ mb: spacing.scale[4] }}>
        Design Tokens Showcase
      </Typography>

      {/* Colors */}
      <Box sx={{ mb: spacing.scale[6] }}>
        <Typography variant="h4" sx={{ mb: spacing.scale[3] }}>Colors</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing.scale[2] }}>
          {colorKeys.map((key) => (
            <Card key={key} sx={{ borderRadius: borders.radius.lg }}>
              <Box sx={{ height: 100, bgcolor: colors[key].main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ color: colors[key].contrastText, fontWeight: typography.fontWeight.bold }}>
                  {key.toUpperCase()}
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="body2"><strong>Main:</strong> {colors[key].main}</Typography>
                <Typography variant="body2"><strong>Light:</strong> {colors[key].light}</Typography>
                <Typography variant="body2"><strong>Dark:</strong> {colors[key].dark}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Spacing */}
      <Box sx={{ mb: spacing.scale[6] }}>
        <Typography variant="h4" sx={{ mb: spacing.scale[3] }}>Spacing</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: spacing.scale[2] }}>
          {Object.entries(spacing.named).map(([key, value]) => (
            <Card key={key} sx={{ borderRadius: borders.radius.md }}>
              <CardContent>
                <Box sx={{ height: value, bgcolor: colors.primary.main, mb: spacing.scale[1], borderRadius: borders.radius.sm }} />
                <Typography variant="body2"><strong>{key}:</strong> {value}px</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Shadows */}
      <Box sx={{ mb: spacing.scale[6] }}>
        <Typography variant="h4" sx={{ mb: spacing.scale[3] }}>Shadows</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing.scale[3] }}>
          {([0, 1, 2, 4, 6, 8, 12, 16, 24] as const).map((elev) => (
            <Card key={elev} sx={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: borders.radius.lg, boxShadow: shadows.elevation[elev] }}>
              <Typography variant="h6">Elevation {elev}</Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Usage Example */}
      <Card sx={{ borderRadius: borders.radius.lg, p: spacing.scale[4], bgcolor: colors.info[50], border: `${borders.width.thin}px solid ${colors.info.main}` }}>
        <Typography variant="h5" sx={{ mb: spacing.scale[2], color: colors.info.dark }}>
          💡 Using Design Tokens
        </Typography>
        <Typography variant="body1" sx={{ mb: spacing.scale[2] }}>
          All values are driven by tokens. Example usage:
        </Typography>
        <Box component="pre" sx={{ p: spacing.scale[2], bgcolor: colors.grey[900], color: colors.common.white, borderRadius: borders.radius.md, overflow: 'auto', fontFamily: typography.fontFamily.code, fontSize: typography.fontSize.sm }}>
          {`import { useDesignTokens } from './hooks/useDesignTokens';

const { colors, spacing } = useDesignTokens();

<Box sx={{
  padding: spacing.named.md,
  backgroundColor: colors.primary.main,
}}>Content</Box>`}
        </Box>
      </Card>
    </Box>
  );
};

export default TokenShowcase;
