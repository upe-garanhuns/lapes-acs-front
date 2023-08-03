import { fetchWrapper } from '../api';
import { fetchWrapperTest } from '../apiTest';
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

export const submitRequest = async (
  id: number,
  token: string
): Promise<object> => {
  const response = await fetchWrapperTest(`api/requisicao/submissão/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
};

export const deleteRequest = async (
  id: number,
  token: string
): Promise<void> => {
  await fetchWrapperTest(`api/requisicao/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};
