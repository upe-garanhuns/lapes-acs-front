export function checkRegistry(numero: string): boolean {
  // Verifica se o número possui 9 dígitos
  if (numero.length !== 9) {
    return false;
  }

  if (Number.isNaN(parseInt(numero))) {
    return false;
  }

  return true;
}
