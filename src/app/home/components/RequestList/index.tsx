import React from 'react';

import * as S from './styles';

import {
  Trash,
  Eye,
  NotePencil,
  Clock,
  WarningCircle,
  CheckCircle
} from '@phosphor-icons/react';

export type ComponentProps = {
  status: string;
  isDraft: boolean;
  label: string;
  initialDate: string;
  hours: number;
};

export const RequestList: React.FC<ComponentProps> = ({
  status,
  isDraft,
  label,
  initialDate,
  hours
}) => {
  const iconSize = 24;
  return (
    <div>
      <S.Card cardColor={isDraft}>
        <S.StatusIcon>
          {isDraft ? (
            <NotePencil size={iconSize} />
          ) : status === 'Concluído' ? (
            <CheckCircle size={iconSize} />
          ) : status === 'Em análise' ? (
            <Clock size={iconSize} />
          ) : (
            <WarningCircle size={iconSize} />
          )}
        </S.StatusIcon>
        <S.Content>
          <S.Title>Status:</S.Title>
          <S.Text>{status}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Label:</S.Title>
          <S.Text>{label}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Data da solicitação:</S.Title>
          <S.Text>{initialDate}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Quantidade de horas:</S.Title>
          <S.Text>{hours} horas</S.Text>
        </S.Content>
        <S.IconsContainer>
          <S.ActionIcon>
            <Eye size={iconSize} />
          </S.ActionIcon>
          <S.ActionIcon>
            {!isDraft ? null : <Trash size={iconSize} />}
          </S.ActionIcon>
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
