import { fetchWrapper } from '../api';

export const request = async (token: string): Promise<any> => {
  const response = await fetchWrapper('api/aluno/requisicao', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
