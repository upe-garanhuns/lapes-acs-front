export function checkEmail(email: string): boolean {
  const regex = new RegExp(`^[A-Za-z0-9._%+-]+@upe.br$`, 'i');
  return regex.test(email);
}
