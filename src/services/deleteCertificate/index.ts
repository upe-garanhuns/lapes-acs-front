import { fetchWrapperTest } from '../apiTest';

export const deleteCertificate = async (
  id: number,
  token: string
): Promise<void> => {
  await fetchWrapperTest(`api/certificado/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};
