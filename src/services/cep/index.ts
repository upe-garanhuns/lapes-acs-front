import { fetchWrapper } from '../api';
import { Endereco } from './types';

export const fetchCep = async (cep: string): Promise<Endereco> => {
  try {
    const data: Endereco = await fetchWrapper<Endereco>(`api/endereco/${cep}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error('erro', error);
    throw error; // Adicionando o 'throw' para propagar o erro novamente
  }
};
