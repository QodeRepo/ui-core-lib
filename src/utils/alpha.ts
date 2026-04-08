/**
 * Convert a hex color to an rgba string with the given opacity.
 *
 * @param hex - A 6-digit hex color string (e.g. "#1976d2")
 * @param opacity - A number between 0 and 1
 * @returns An rgba() CSS string
 */
export function alpha(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
