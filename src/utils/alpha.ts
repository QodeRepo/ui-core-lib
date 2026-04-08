/**
 * Convert a hex color to an rgba string with the given opacity.
 *
 * @param hex - A hex color string (e.g. "#1976d2", "#FFF", or "1976d2")
 * @param opacity - A number between 0 and 1
 * @returns An rgba() CSS string
 */
export function alpha(hex: string, opacity: number): string {
  const clean = hex.replace('#', '');
  const expanded = clean.length === 3
    ? clean[0] + clean[0] + clean[1] + clean[1] + clean[2] + clean[2]
    : clean;
  const r = parseInt(expanded.slice(0, 2), 16);
  const g = parseInt(expanded.slice(2, 4), 16);
  const b = parseInt(expanded.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
