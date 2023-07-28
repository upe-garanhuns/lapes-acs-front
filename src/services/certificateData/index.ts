import { fetchWrapper } from '../api';
import { getCertificateInterface } from './types';

export const certificateData = async ({
  token,
  id
}: {
  token: string;
  id: number;
}): Promise<getCertificateInterface> => {
  const response: getCertificateInterface = await fetchWrapper(
    `api/certificado/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response;
};
