import React, { useState } from 'react';

import ArchiveModal from '../../../../components/ArchiveDraft/ArchiveModal';
import DeleteDraftModal from '../../../../components/DeleteDraft/DeleteDraftModal';
import ViewRequestModal from '../../../../components/ViewRequest/ViewRequestModal';
import { NewRequest } from '../NewRequest/NewRequestContent';
import { NewRequestModal } from '../NewRequest/NewRequestModal';
import * as S from './styles';

import {
  NotePencil,
  Clock,
  WarningCircle,
  CheckCircle,
  PencilSimpleLine,
  XCircle
} from '@phosphor-icons/react';

export type ComponentProps = {
  status: string;
  id: number;
  initialDate: string;
  hours: number;
  token: string;
  isDraft: boolean;
  type: boolean;
  reloadRequestDelete: () => void;
  reloadRequestArchive: () => void;
};

export const RequestList: React.FC<ComponentProps> = ({
  token,
  status,
  id,
  initialDate,
  hours,
  isDraft,
  type,
  reloadRequestDelete,
  reloadRequestArchive
}) => {
  isDraft = false;
  if (status === 'RASCUNHO') {
    isDraft = true;
  }

  const iconSize = 24;
  let statusDescription = '';
  status === 'ACEITO'
    ? (statusDescription = 'Concluído')
    : status === 'TRANSITO'
    ? (statusDescription = 'Em análise')
    : status === 'NEGADO'
    ? (statusDescription = 'Indeferido')
    : status === 'RASCUNHO'
    ? (statusDescription = 'Rascunho')
    : (statusDescription = 'Sem status');
  return (
    <div>
      <S.Card cardcolor={isDraft}>
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
            <NewRequestModal token={token} id={id} />
          ) : (
            <ViewRequestModal id={id} token={token} />
          )}
          {!isDraft ? (
            <ArchiveModal
              type={type}
              token={token}
              id={id}
              updateRequestsArchive={reloadRequestArchive}
            ></ArchiveModal>
          ) : (
            <DeleteDraftModal
              token={token}
              id={id}
              updateRequestsDelete={reloadRequestDelete}
            ></DeleteDraftModal>
          )}
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
