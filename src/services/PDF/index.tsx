import { fetchWrapperTest } from '../apiTest';

export const exibirPDF = async (
  token: string // Recebe o token como parâmetro
) => {
  const response = await fetchWrapperTest(`api/certificado/454/pdf`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` // Adicionar o token ao cabeçalho da requisição
    }
  });

  return response;
};
