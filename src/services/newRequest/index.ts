import { fetchWrapper } from '../api';
import { RequestId } from './types';

export const newRequest = async (): Promise<RequestId> => {
  try {
    const data: RequestId = await fetchWrapper<RequestId>(`api/requisicao`);
    console.log(data);
    return data;
  } catch (error) {
    console.error('error', error);
  }
};
