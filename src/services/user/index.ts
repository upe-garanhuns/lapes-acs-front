import { fetchWrapper } from '../api';
import { PasswordAutentication } from './types';

export const authenticateUser = async (
  id: number,
  authCode: string
): Promise<PasswordAutentication> => {
  const requestBody = {
    usuarioId: id,
    codigoDeVerificacao: authCode
  };
  const response = await fetchWrapper<PasswordAutentication>(
    `api/usuario/verificacao`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }
  );
  return response;
};
