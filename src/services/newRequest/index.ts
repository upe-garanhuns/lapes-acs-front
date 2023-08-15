import { fetchWrapper } from '../api';

export const newRequest = async (token: string): Promise<number> => {
  const data: number = await fetchWrapper<number>(`api/requisicao`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return data;
};
