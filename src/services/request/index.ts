import { fetchWrapper } from '../api';
import { RequestResponse } from './types';

export const request = async (token: string): Promise<RequestResponse> => {
  const response = await fetchWrapper<RequestResponse>('api/aluno/requisicao', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
