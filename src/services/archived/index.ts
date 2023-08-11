import { fetchWrapper } from '../api';
import { ArchiveInterface, ResponseArchiveInterface } from './types';

export const archived = async ({
  token,
  id
}: ArchiveInterface): Promise<ArchiveInterface> => {
  const response: ArchiveInterface = await fetchWrapper(
    `api/requisicao/arquivar/${id}`,
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

export const DontArchived = async ({
  token,
  id
}: ArchiveInterface): Promise<ArchiveInterface> => {
  const response: ArchiveInterface = await fetchWrapper(
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

export const getArchived = async ({
  token
}: ArchiveInterface): Promise<ResponseArchiveInterface> => {
  const response: ResponseArchiveInterface = await fetchWrapper(
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
};
