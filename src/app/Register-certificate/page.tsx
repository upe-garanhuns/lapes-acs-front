'use client';
import { useState } from 'react';

import * as S from './style';

export default function RegistePageTest() {
  const [selectedEixo, setSelectedEixo] = useState('');
  const [selectedAtividade, setSelectedAtividade] = useState('');

  const handleEixoChange = (event) => {
    setSelectedEixo(event.target.value);
  };

  const handleAtividadeChange = (event) => {
    setSelectedAtividade(event.target.value);
  };

  return (
    <div>
      <S.FormContainer>
        <S.Title>Etapa 2 de 3 - Preencher formulário</S.Title>
        <S.InputContainer>
          <S.Label>Titulo:</S.Label>
          <S.Input type="text" />

          <S.Label>Data inicial:</S.Label>
          <S.Input type="date" />

          <S.Label>Data final:</S.Label>
          <S.Input type="date" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>Eixo de ensino:</S.Label>
          <S.Select value={selectedEixo} onChange={handleEixoChange}>
            <option value="">Selecione</option>
            <option value="eixo1">Eixo 1</option>
            <option value="eixo2">Eixo 2</option>
            <option value="eixo3">Eixo 3</option>
          </S.Select>
          <S.Label>Quantidade de horas:</S.Label>
          <S.Input type="number" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>Atividade:</S.Label>
          <S.Select value={selectedAtividade} onChange={handleAtividadeChange}>
            <option value="">Selecione</option>
            <option value="atividade1">Atividade 1</option>
            <option value="atividade2">Atividade 2</option>
            <option value="atividade3">Atividade 3</option>
          </S.Select>

          <S.ButtonsContainer>
            <S.SaveButton>Salvar certificado</S.SaveButton>
            <S.ViewButton>Visualizar certificado</S.ViewButton>
          </S.ButtonsContainer>
        </S.InputContainer>
      </S.FormContainer>

      <S.CertificatesContainer>
        <S.CertificateItem>Nome do Arquivo 1</S.CertificateItem>
        <S.CertificateItem>Nome do Arquivo 2</S.CertificateItem>
      </S.CertificatesContainer>
    </div>
  );
}
