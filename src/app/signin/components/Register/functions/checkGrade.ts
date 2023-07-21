export function checkGrade(valor: number): boolean {
  if (valor >= 1 && valor <= 12) {
    return true;
  }
  return false;
}
