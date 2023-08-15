import { fetchWrapper } from '../api';
import { fetchWrapperTest } from '../apiTest';
import { UserRequest } from '../request/types';

export const archived = async (token: string, id: number): Promise<void> => {
  await fetchWrapperTest(`api/requisicao/arquivar/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export const DontArchived = async (
  token: string,
  id: number
): Promise<void> => {
  await fetchWrapperTest(`api/requisicao/desarquivar/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export const getArchived = async (
  token: string
): Promise<Array<UserRequest>> => {
  try {
    const response: Array<UserRequest> = await fetchWrapper(
      `api/requisicao/arquivar`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response;
  } catch (error) {
    console.error('erro', error);
    throw error;
  }
};
