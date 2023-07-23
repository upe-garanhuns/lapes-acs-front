import { fetchWrapper } from '../api';
import { newCertificateInterface } from './types';

export const newCertificate = async (
  token: string,
  id: number,
  certificate: string
): Promise<newCertificateInterface> => {
  try {
    const data: newCertificateInterface =
      await fetchWrapper<newCertificateInterface>(
        `api/certificado?requisicaoId=${id}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: certificate
        }
      );
    return data;
  } catch (error) {
    console.error('error', error);
  }
};
