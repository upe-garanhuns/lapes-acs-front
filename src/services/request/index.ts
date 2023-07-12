import { fetchWrapper } from '../api';
import { RequestResponse } from './types';

export const request = async (token: string): Promise<RequestResponse> => {
  console.log(token);
  const response = await fetchWrapper<RequestResponse>('api/certificado/1', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  console.log(response);
  return response;
};
