import { fetchWrapperTest } from '../apiTest';

export const createCertificate = async (
  certificateData: object,
  id: number,
  token: string
) => {
  await fetchWrapperTest(`api/certificado/${id}`, {
    method: 'PUT',
    body: JSON.stringify(certificateData),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};
