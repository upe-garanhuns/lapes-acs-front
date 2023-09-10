import { fetchWrapper } from '../api';

export const newCertificate = async (
  token: string,
  id: number,
  certificate: File
): Promise<number> => {
  const formData = new FormData();
  formData.append('requisicaoId', String(id));
  formData.append('certificado', certificate);

  // Realizar a solicitação usando o fetch
  const data = await fetchWrapper<number>(`api/certificado`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData // Usar o objeto FormData contendo os dados do arquivo e outros campos
  });
  return data;
};
