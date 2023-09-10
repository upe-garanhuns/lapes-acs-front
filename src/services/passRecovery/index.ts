import { fetchWrapperTest } from '../apiTest';
import { NewPassInterface } from './type';

export const sendNewPass = async ({ token, password }: NewPassInterface) => {
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
