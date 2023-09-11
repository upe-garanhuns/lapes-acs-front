import { fetchWrapperTest } from '../apiTest';

export const verificarCodigo = async (
  codigoVerificacao: string,
  token: string // Recebe o token como parâmetro
) => {
  // Faz a requisição POST para atualizar o campo "is_verificado" no banco de dados
  const response = await fetchWrapperTest(
    `api/usuario/verificacao?codigoDeVerificacao=${codigoVerificacao}`,
    {
      method: 'POST',
      body: JSON.stringify(codigoVerificacao),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` // Adicionar o token ao cabeçalho da requisição
      }
      // Enviar o código de verificação no corpo da requisição
    }
  );
  // Se a requisição POST for bem-sucedida, o status de resposta será 200
  return response;
};

export const sendVerificationEmail = async (token: string) => {
  const response = await fetchWrapperTest(`api/usuario/verificacao/novo`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
};
