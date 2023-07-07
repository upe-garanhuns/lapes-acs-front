import { fetchWrapper } from '../api';
import { LoginResponse } from './types';

export const login = async (signInData: object): Promise<LoginResponse> => {
  const response = await fetchWrapper<LoginResponse>('api/acesso/auth/login', {
    method: 'POST',
    body: JSON.stringify(signInData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};
