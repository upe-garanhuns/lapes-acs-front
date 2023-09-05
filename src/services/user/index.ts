import { fetchWrapper } from '../api';
import { UserInformation } from './types';


export const getUserInformation = async (
  token: string
): Promise<UserInformation> => {
  console.log(token);
  const response: UserInformation = await fetchWrapper(`api/usuario/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
