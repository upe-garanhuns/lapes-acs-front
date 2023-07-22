import { fetchWrapper } from '../api';
import { UserHours } from './types';

export const getUserHours = async (token: string): Promise<UserHours> => {
  const response: UserHours = await fetchWrapper(`api/aluno/horas`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
