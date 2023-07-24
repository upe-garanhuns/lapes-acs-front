import { fetchWrapper } from '../api';

export const newRequest = async (token: string): Promise<number> => {
  try {
    const data: number = await fetchWrapper<number>(`api/requisicao`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(data);
    alert('Rascunho criado com sucesso!');
    return data;
  } catch (error) {
    alert(
      `${error} Houve erro ao iniciar uma requisicao, verificar se ja existem dois rascunhos`
    );
    console.error('error', error);
  }
};
