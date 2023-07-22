import { fetchWrapper } from '../api';
import { UserRequest } from './types';

export const getRequest = async (
  id: number,
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
