import { fetchWrapper } from '../api';
import { UserRequest } from './types';

export const getRequest = async (
  id: number | undefined,
  token: string
): Promise<UserRequest> => {
  const response: UserRequest = await fetchWrapper(`api/requisicao/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};

export const deleteRequest = async (
  id: number,
  token: string
): Promise<void> => {
  await fetchWrapper(`api/requisicao/rascunho/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};
