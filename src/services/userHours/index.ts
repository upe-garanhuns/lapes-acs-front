import { fetchWrapper } from '../api';

export const getUserHours = async (token: string): Promise<any> => {
  const response = await fetchWrapper(`api/aluno/horas`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
