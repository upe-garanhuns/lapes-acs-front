import { fetchWrapper } from '../api';
import { UserRequest } from '../request/types';
import { ArchiveInterface } from './types';

export const archived = async (token: string, id: number): Promise<string> => {
  const response: string = await fetchWrapper(`api/requisicao/arquivar/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};

export const DontArchived = async ({
  token,
  id
}: ArchiveInterface): Promise<string> => {
  const response: string = await fetchWrapper(
    `api/requisicao/desarquivar/${id}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response;
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
