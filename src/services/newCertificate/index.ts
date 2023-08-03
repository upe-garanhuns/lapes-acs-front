import { fetchWrapper } from '../api';
import { newCertificateInterface } from './types';

export const newCertificate = async (
  token: string,
  id: number,
  certificate: File
): Promise<newCertificateInterface> => {
  try {
    const formData = new FormData();
    formData.append('requisicaoId', String(id));
    formData.append('certificado', certificate);

    // Realizar a solicitação usando o fetch
    const data = await fetchWrapper<newCertificateInterface>(
      `api/certificado`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData // Usar o objeto FormData contendo os dados do arquivo e outros campos
      }
    );
    return data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};
