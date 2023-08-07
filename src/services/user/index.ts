import { fetchWrapper } from '../api';
import { EditUserData, UserData } from './types';

export const userData = async ({
  token
}: {
  token: string;
}): Promise<UserData> => {
  const response: UserData = await fetchWrapper(`api/usuario/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};

// CRIAR UMA CHAMADA PARA EDITAR OS DADOS DO USUARIO AQUI
export const updateUserData = async ({
  EditUserData,
  token
}: {
  EditUserData: object;
  token: string;
}): Promise<object> => {
  const response = await fetchWrapper<EditUserData>('', {
    // COLOCAR O ENDPOINT AQUI
    method: 'PUT',
    body: JSON.stringify(EditUserData),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  console.log(response);
  return response;
};
