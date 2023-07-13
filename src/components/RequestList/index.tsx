import React from 'react';
import { Icons } from 'react-toastify';

import ViewRequestModal from '../ViewRequestModal';
import * as S from './styles';

import {
  Trash,
  NotePencil,
  Clock,
  WarningCircle,
  CheckCircle,
  Printer,
  Archive,
  PencilSimpleLine
} from '@phosphor-icons/react';

type ComponentProps = {
  status: string;
  isDraft: boolean;
  id: string;
  initialDate: string;
  hours: number;
};

export const RequestList: React.FC<ComponentProps> = ({
  status,
  isDraft,
  id,
  initialDate,
  hours
}) => {
  const iconSize = 24;
  return (
    <div>
      <S.Card cardcolor={isDraft}>
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
          <S.Title>ID:</S.Title>
          <S.Text>{id}</S.Text>
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
          {isDraft ? (
            <S.ActionIcon>
              <PencilSimpleLine size={iconSize} />
            </S.ActionIcon>
          ) : (
            <ViewRequestModal />
          )}
          <S.ActionIcon>
            {!isDraft ? null : <Trash size={iconSize} />}
            {(() => {
              switch (status) {
                case 'Concluído':
                case 'Em análise':
                  return <Printer size={iconSize} />;
                case 'Indeferido':
                  return <Archive size={iconSize} />;
                default:
                  return null;
              }
            })()}
          </S.ActionIcon>
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
