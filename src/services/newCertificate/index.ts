import { fetchWrapper } from '../api';
import { newCertificateInterface } from './types';

export const newCertificate = async (
  token: string,
  id: number,
  certificate: File
): Promise<newCertificateInterface> => {
  try {
    const boundary = 'boundary_' + Date.now().toString(16);

    // Construir o cabeçalho Content-Type com o limite
    const contentType = `multipart/form-data; boundary=${boundary}`;

    // Construir o corpo da solicitação com o limite e os dados do arquivo
    const formData = new FormData();
    formData.append('requisicaoId', String(id));
    formData.append('certificate', certificate);

    // Realizar a solicitação usando o fetch
    const data = await fetchWrapper<newCertificateInterface>(
      `api/certificado`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': contentType // Definir o cabeçalho Content-Type com o limite
        },
        body: formData // Usar o objeto FormData contendo os dados do arquivo e outros campos
      }
    );
    return data;
  } catch (error) {
    console.error('error', error);
  }
};
