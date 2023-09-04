import { useState } from 'react';

export const useCertificate = () => {
  const [selectedAtividade, setSelectedAtividade] = useState<string>('0');
  const [titulo, setTitulo] = useState('');
  const [horas, setHoras] = useState<string>('1');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [selectedEixo, setSelectedEixo] = useState('');

  return {
    selectedAtividade,
    setSelectedAtividade,
    titulo,
    setTitulo,
    horas,
    setHoras,
    dataInicial,
    setDataInicial,
    dataFinal,
    setDataFinal,
    selectedEixo,
    setSelectedEixo
  };
};
