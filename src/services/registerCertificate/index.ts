import { fetchWrapper } from '../api';
import { CreateCertificate } from './types';

export const createCertificate = async (
  certificateData: object,
  id: number,
  token: string
): Promise<object> => {
  const reponse = await fetchWrapper<CreateCertificate>(
    `api/certificado/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(certificateData),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return reponse;
};
