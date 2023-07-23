import { fetchWrapper } from '../api';

export const newRequest = async (token: string): Promise<void> => {
  try {
    const data: void = await fetchWrapper<void>(`api/requisicao`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error('error', error);
  }
};
