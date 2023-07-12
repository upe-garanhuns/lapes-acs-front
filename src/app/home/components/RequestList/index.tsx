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
  label: number;
  initialDate: string;
  hours: number;
};

export const RequestList: React.FC<ComponentProps> = ({
  status,
  label,
  initialDate,
  hours
}) => {
  let isDraft = false;
  if (status === 'RASCUNHO') {
    isDraft = true;
  }
  const iconSize = 24;
  let statusDescription = '';
  status === 'DEFERIDO'
    ? (statusDescription = 'Concluído')
    : status === 'ENCAMINHADO_COORDENACAO'
    ? (statusDescription = 'Em análise')
    : status === 'ENCAMINHADO_COMISSAO'
    ? (statusDescription = 'Em análise')
    : status === 'INDEFERIDO'
    ? (statusDescription = 'Indeferido')
    : status === 'RASCUNHO'
    ? (statusDescription = 'Rascunho')
    : (statusDescription = 'Sem status');
  return (
    <div>
      <S.Card cardColor={isDraft}>
        <S.StatusIcon>
          {isDraft ? (
            <NotePencil size={iconSize} />
          ) : status === 'DEFERIDO' ? (
            <CheckCircle size={iconSize} />
          ) : status === 'ENCAMINHADO_COORDENACAO' ? (
            <Clock size={iconSize} />
          ) : status === 'ENCAMINHADO_COMISSAO' ? (
            <Clock size={iconSize} />
          ) : (
            <WarningCircle size={iconSize} />
          )}
        </S.StatusIcon>
        <S.Content>
          <S.Title>Status:</S.Title>
          <S.Text>{statusDescription}</S.Text>
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
