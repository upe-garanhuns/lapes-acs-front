import { useState } from 'react';

export const useSetValid = () => {
  const [isPasswordVisible, setIsPasswordVisibility] = useState(false);
  const [isValidEmailAndPassword, setIsValidEmailAndPassword] =
    useState<boolean>(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  return {
    isPasswordVisible,
    setIsPasswordVisibility,
    isValidEmailAndPassword,
    setIsValidEmailAndPassword,
    isValidEmail,
    setIsValidEmail,
    isValidPassword,
    setIsValidPassword
  };
};
