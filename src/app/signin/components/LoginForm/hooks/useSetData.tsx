import { useState } from 'react';

export const useSetData = () => {
  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  return {
    email,
    setEmail,

    password,
    setPassword
  };
};
