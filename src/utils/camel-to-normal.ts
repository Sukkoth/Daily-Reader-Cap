export function camelToNormal(text: string): string {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2") // insert space before capitals
    .replace(/^./, (char) => char.toUpperCase()); // capitalize first letter
}
