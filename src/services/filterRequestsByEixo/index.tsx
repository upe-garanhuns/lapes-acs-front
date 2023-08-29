import { fetchWrapperTest } from '../apiTest';

export const filterRequestsByEixo = async (
  token: string,
  alunoId: number,
  pagina: number,
  quantidade: number,
  eixo: string
) => {
  try {
    const response = await fetchWrapperTest(
      `api/usuario/requisicao/eixo?alunoId=${alunoId}&pagina=${pagina}&quantidade=${quantidade}&eixo=${eixo}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data; // Retorna os dados obtidos da requisição
    } else {
      console.error('Erro ao obter os dados de requisição por eixo');
      return null; // Retorna null em caso de erro
    }
  } catch (error) {
    console.error('Erro ao realizar a requisição:', error);
    return null; // Retorna null em caso de erro
  }
};
