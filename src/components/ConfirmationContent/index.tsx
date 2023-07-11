'use client';

import React, { useState } from 'react';

import * as S from './styles';

export type ConfirmRequestProps = {
  id: number;
  title: string;
  educationAxis: string;
  activity: string;
  initialDate: string;
  finalDate: string;
  hours: number;
};

export const ConfirmationContent: React.FC<ConfirmRequestProps> = ({
  id,
  title,
  educationAxis,
  activity,
  initialDate,
  finalDate,
  hours
}) => {
  return (
    <div>
      <S.Container>
        <S.StepConfirmation>Etapa 3 de 3 - Confirmação</S.StepConfirmation>
        <S.Title> Confirmação de envio da Solicitação: {id}</S.Title>
        <S.Centered>
          <S.Certificates>a</S.Certificates>
          <S.DetailsGrid>
            <S.Div1>
              <S.Details>
                Título:
                <S.DetailsName>{title}</S.DetailsName>
              </S.Details>
            </S.Div1>
            <S.Div2>
              <S.Details>
                Data Inicial
                <S.DetailsName>{initialDate}</S.DetailsName>
              </S.Details>
            </S.Div2>
            <S.Div3>
              <S.Details>
                Data Final
                <S.DetailsName>{finalDate}</S.DetailsName>
              </S.Details>
            </S.Div3>
            <S.Div4>
              <S.Details>
                Eixo de Ensino
                <S.DetailsName>{educationAxis}</S.DetailsName>
              </S.Details>
            </S.Div4>
            <S.Div5>
              <S.Details>
                Quantidade de Horas
                <S.DetailsName>{hours}</S.DetailsName>
              </S.Details>
            </S.Div5>
            <S.Div6>
              <S.Details>
                Atividade
                <S.DetailsName>{activity}</S.DetailsName>
              </S.Details>
            </S.Div6>
          </S.DetailsGrid>
          <S.Buttons>
            <S.CancelConfirmButton buttonColor={false}>
              Cancelar
            </S.CancelConfirmButton>
            <S.CancelConfirmButton buttonColor={true}>
              Confirmar
            </S.CancelConfirmButton>
          </S.Buttons>
        </S.Centered>
      </S.Container>
    </div>
  );
};
