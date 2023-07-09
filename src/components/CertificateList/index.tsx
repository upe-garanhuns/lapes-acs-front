import React from 'react';

import * as S from './styles';

import { Eye } from '@phosphor-icons/react';

export type ComponentProps = {
  status: string;
  activity: string;
  educationAxis: string;
  hours: number;
};

export const CertificateList: React.FC<ComponentProps> = ({
  status,
  activity,
  educationAxis,
  hours
}) => {
  const iconSize = 24;
  return (
    <div>
      <S.Card>
        <S.Content>
          <S.Title>Status:</S.Title>
          <S.Text>{status}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Atividade:</S.Title>
          <S.Text>{activity}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Eixo de ensino:</S.Title>
          <S.Text>{educationAxis}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Quantidade de horas:</S.Title>
          <S.Text>{hours} horas</S.Text>
        </S.Content>
        <S.IconsContainer>
          <Eye size={iconSize} />
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
