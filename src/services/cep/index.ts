import { fetchWrapper } from '../api';
import { Endereco } from './types';

export const fetchCep = async (cep: string): Promise<any> => {
  try {
    const data = await fetchWrapper<Endereco>(`api/endereco/${cep}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error('erro', error);
  }
};
