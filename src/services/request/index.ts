import { fetchWrapper } from '../api';

export const getRequests = async (token: string): Promise<any> => {
  const response = await fetchWrapper('api/aluno/requisicao', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};

export const getRequest = async (id: number, token: string): Promise<any> => {
  const response = await fetchWrapper(`api/requisicao/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
