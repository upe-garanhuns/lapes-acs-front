import React from 'react';

import * as S from './styles';

export default function ViewRequestContent() {
  return (
    <div>
      <S.Title>Solicitação XXX</S.Title>
      <S.Division />
      <S.GridContainer>
        <S.Content>
          <S.Description>Status: </S.Description>
          <S.Status>Aceito</S.Status>
        </S.Content>
        <S.Content>
          <S.Description>Data da Solicitação:</S.Description>
          <S.RequestDate>DD/MM/AA</S.RequestDate>
        </S.Content>
        <S.Content>
          <S.Description>Quantidade de Horas:</S.Description>
          <S.HoursAmount>000</S.HoursAmount>
        </S.Content>
      </S.GridContainer>
      <S.Description>Observações do Coordenador:</S.Description>
      <S.CoordObservation>djsfhksdh</S.CoordObservation>
      <S.Title style={{ fontSize: 24 }}>Certificados:</S.Title>
      <S.Division />
    </div>
  );
}
