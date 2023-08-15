export function checkName(name: string): boolean {
  return name.length < 2 || name.length > 80;
}
