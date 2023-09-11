import { fetchWrapperTest } from '../apiTest';

export const downloadPDF = async (token: string, idRequisicao: number) => {
  try {
    const response = await fetchWrapperTest(
      `api/requisicao/${idRequisicao}/pdf`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.ok) {
      //   console.log(response);
      return response;
    } else {
      console.error('Erro ao baixar o PDF');
      return null; // Retorna null em caso de erro
    }
  } catch (error) {
    console.error('Erro ao realizar a requisição:', error);
    return null; // Retorna null em caso de erro
  }
};
