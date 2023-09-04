import { useState } from 'react';

export const useErros = () => {
  const [errorSelectedAtividade, setErrorSelectedAtividade] =
    useState<boolean>(true);
  const [errorTitulo, setErrorTitulo] = useState<boolean>(true);
  const [errorDataInicial, setErrorDataInicial] = useState<boolean>(true);
  const [errorDataFinal, setErrorDataFinal] = useState<boolean>(true);
  const [errorHoras, setErrorHoras] = useState<boolean>(false);

  return {
    errorSelectedAtividade,
    setErrorSelectedAtividade,
    errorTitulo,
    setErrorTitulo,
    errorDataInicial,
    setErrorDataInicial,
    errorDataFinal,
    setErrorDataFinal,
    errorHoras,
    setErrorHoras
  };
};
