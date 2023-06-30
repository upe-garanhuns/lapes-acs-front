export function checkCep(cep: string): boolean {
  // Remove caracteres não numéricos do CEP
  cep = cep.replace(/\D/g, '');

  // Verifica se o CEP possui exatamente 8 dígitos
  if (cep.length !== 8) {
    return false;
  }

  // Verifica se todos os caracteres do CEP são iguais
  if (/^(\d)\1{7}$/.test(cep)) {
    return false;
  }

  return true;
}
