'use client';

import React from 'react';

import { Certificate } from '../../../services/request/types';
import * as S from './styles';

import moment from 'moment';

export const ConfirmationContent: React.FC<Certificate> = ({
  cargaHoraria,
  titulo,
  atividade,
  dataFinal,
  dataInicial,
  eixoAtividade
}) => {
  const formattedInitialDate = moment(dataInicial).format('DD/MM/YYYY');
  const formattedFinalDate = moment(dataFinal).format('DD/MM/YYYY');
  const formattedActivity =
    atividade.length > 79 ? `${atividade.substring(0, 79)}...` : atividade;
  return (
    <div>
      <S.Container>
        <S.Centered>
          <S.DetailsGrid>
            <S.Div1>
              <S.DetailsName>
                Título:
                <S.Details>{titulo}</S.Details>
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
                <S.Details>{eixoAtividade}</S.Details>
              </S.DetailsName>
            </S.Div4>
            <S.Div5>
              <S.DetailsName>
                Quantidade de Horas
                <S.Details>{cargaHoraria} hora(s)</S.Details>
              </S.DetailsName>
            </S.Div5>
            <S.Div6>
              <S.DetailsName>
                Atividade
                <S.Details>{formattedActivity}</S.Details>
              </S.DetailsName>
            </S.Div6>
          </S.DetailsGrid>
        </S.Centered>
      </S.Container>
    </div>
  );
};
