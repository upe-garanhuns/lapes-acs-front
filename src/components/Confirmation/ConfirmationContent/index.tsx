'use client';

import React from 'react';

import * as S from './styles';

export type ConfirmRequestProps = {
  id: number;
  title: string;
  educationAxis: string;
  activity: string;
  initialDate: Date;
  finalDate: Date;
  hours: number;
};

export const ConfirmationContent: React.FC<ConfirmRequestProps> = ({
  title,
  educationAxis,
  activity,
  initialDate,
  finalDate,
  hours
}) => {
  const formattedInitialDate = initialDate.toLocaleDateString('en-GB');
  const formattedFinalDate = finalDate.toLocaleDateString('en-GB');
  return (
    <div>
      <S.Container>
        <S.Centered>
          <S.DetailsGrid>
            <S.Div1>
              <S.DetailsName>
                Título:
                <S.Details>{title}</S.Details>
              </S.DetailsName>
            </S.Div1>
            <S.Div2>
              <S.DetailsName>
                Data Inicial
                <S.Details>{formattedInitialDate}</S.Details>
              </S.DetailsName>
            </S.Div2>
            <S.Div3>
              <S.DetailsName>
                Data Final
                <S.Details>{formattedFinalDate}</S.Details>
              </S.DetailsName>
            </S.Div3>
            <S.Div4>
              <S.DetailsName>
                Eixo de Ensino
                <S.Details>{educationAxis}</S.Details>
              </S.DetailsName>
            </S.Div4>
            <S.Div5>
              <S.DetailsName>
                Quantidade de Horas
                <S.Details>{hours} hora(s)</S.Details>
              </S.DetailsName>
            </S.Div5>
            <S.Div6>
              <S.DetailsName>
                Atividade
                <S.Details>{activity}</S.Details>
              </S.DetailsName>
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
