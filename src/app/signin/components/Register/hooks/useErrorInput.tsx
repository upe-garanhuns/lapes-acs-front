import { useState } from 'react';

export const useErrorInput = () => {
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorCpf, setErrorCpf] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);
  const [errorGrade, setErrorGrade] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorCourse, setErrorCourse] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);
  const [errorSamePass, setErrorSamePass] = useState<boolean>(false);
  const [errorNumber, setErrorNumber] = useState<boolean>(false);
  const [errorCep, setErrorCep] = useState<boolean>(false);
  const [errorRegistry, setErrorRegistry] = useState<boolean>(false);

  return {
    errorName,
    setErrorName,
    errorCpf,
    setErrorCpf,
    errorPhone,
    setErrorPhone,
    errorGrade,
    setErrorGrade,
    errorEmail,
    setErrorEmail,
    errorCourse,
    setErrorCourse,
    errorPass,
    setErrorPass,
    errorSamePass,
    setErrorSamePass,
    errorNumber,
    setErrorNumber,
    errorCep,
    setErrorCep,
    errorRegistry,
    setErrorRegistry
  };
};
