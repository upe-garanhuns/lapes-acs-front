import { fetchWrapperTest } from '../apiTest';

export const sendRecovey = async (email: string) => {
  const response = await fetchWrapperTest(
    `api/usuario/verificacao?email=${email}`,
    {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response;
};
