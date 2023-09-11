import { fetchWrapperTest } from '../apiTest';

export const sendNewPass = async (token: string, password: object) => {
  const response = await fetchWrapperTest(`api/usuario/conta/alterar-senha`, {
    method: 'POST',
    body: JSON.stringify(password),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  return response;
};
