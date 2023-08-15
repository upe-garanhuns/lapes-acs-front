export function checkCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11) {
    console.log('false');
    return false;
  }

  const regex = /^(\d)\1{10}$/;

  if (regex.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}
