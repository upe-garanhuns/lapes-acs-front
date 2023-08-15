import { fetchWrapper } from '../api';
import { CreateUser } from './types';

export const createUser = async (signUpData: object): Promise<object> => {
  const response = await fetchWrapper<CreateUser>('api/acesso/auth/cadastro', {
    method: 'POST',
    body: JSON.stringify(signUpData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};
