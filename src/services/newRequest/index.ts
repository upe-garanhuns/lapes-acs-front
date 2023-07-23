import { fetchWrapper } from '../api';

export const newRequest = async (token: string): Promise<any> => {
  try {
    const data: any = await fetchWrapper<any>(`api/requisicao`, {
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
