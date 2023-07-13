import { fetchWrapper } from '../api';

export const pagination = async (
  token: string,
  pag: number,
  value: number
): Promise<any> => {
  try {
    const response = await fetchWrapper(
      `api/requisicao/paginacao?pagina=${pag}&quantidade=${value}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response;
  } catch (error) {
    console.error('erro', error);
  }
};
