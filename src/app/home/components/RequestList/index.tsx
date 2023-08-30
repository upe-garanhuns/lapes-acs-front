import React from 'react';

import ArchiveModal from '../../../../components/ArchiveDraft/ArchiveModal';
import DeleteDraftModal from '../../../../components/DeleteDraft/DeleteDraftModal';
import ViewRequestModal from '../../../../components/ViewRequest/ViewRequestModal';
import { NewRequestModal } from '../NewRequest/NewRequestModal';
import {
  RequestCardInfo,
  DeleteOrArchive,
  ComponentProps
} from './interface/types';
import * as S from './styles';

import {
  NotePencil,
  Clock,
  WarningCircle,
  CheckCircle
} from '@phosphor-icons/react';

export const RequestList: React.FC<ComponentProps> = ({
  token,
  status,
  id,
  initialDate,
  hours,
  type,
  reloadRequestDelete,
  reloadRequestArchive
}) => {
  const iconSize = 24;
  // Objeto para armazenar as informações da aparência do card de acordo com o status
  const requestCardInfoObj: Record<string, RequestCardInfo> = {
    RASCUNHO: {
      icon: <NotePencil size={iconSize} />,
      description: 'Rascunho',
      viewOrEdit: <NewRequestModal token={token} id={id} />,
      deleteOrArchive: 'delete'
    },
    ACEITO: {
      icon: <CheckCircle size={iconSize} />,
      description: 'Concluído',
      viewOrEdit: <ViewRequestModal id={id} token={token} />,
      deleteOrArchive: 'archive'
    },
    TRANSITO: {
      icon: <Clock size={iconSize} />,
      description: 'Em análise',
      viewOrEdit: <ViewRequestModal id={id} token={token} />,
      deleteOrArchive: 'none'
    },
    NEGADO: {
      icon: <WarningCircle size={iconSize} />,
      description: 'Indeferido',
      viewOrEdit: <ViewRequestModal id={id} token={token} />,
      deleteOrArchive: 'archive'
    },
    PROBLEMA: {
      icon: <WarningCircle size={iconSize} />,
      description: 'Problema',
      viewOrEdit: <></>,
      deleteOrArchive: 'none'
    }
  };
  // Objeto que determina se o card terá o botão de deletar ou arquivar ou nenhum dos dois
  const deleteOrArchiveObj: DeleteOrArchive = {
    delete: (
      <DeleteDraftModal
        token={token}
        id={id}
        updateRequestsDelete={reloadRequestDelete}
      />
    ),
    archive: (
      <ArchiveModal
        token={token}
        id={id}
        type={type}
        updateRequestsArchive={reloadRequestArchive}
      />
    ),
    none: <></>
  };

  const requestCardInfo = requestCardInfoObj[status];
  const deleteOrArchive = deleteOrArchiveObj[requestCardInfo.deleteOrArchive];
  return (
    <div>
      <S.Card cardcolor={status}>
        <S.StatusIcon>{requestCardInfo.icon}</S.StatusIcon>
        <S.Content>
          <S.Title>Status:</S.Title>
          <S.Text>{requestCardInfo.description}</S.Text>
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
          {requestCardInfo.viewOrEdit}
          {deleteOrArchive}
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
