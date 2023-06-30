import { fetchWrapper } from '../api';

export const fetchCep = async (cep: string): Promise<void> => {
  try {
    const data = await fetchWrapper<ResponseType>(`api/endereco/${cep}`);
    console.log(data);
  } catch (error) {
    console.error('erro', error);
  }
};
