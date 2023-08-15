'use client';
import React, { useState } from 'react';

import { DeleteDraftButton } from '../DeleteDraftButton/index';
import * as S from './styles';

export type ComponentProps = {
  token: string;
  id: number;
  closeModal: () => void;
  updateRequests: () => void;
};

const DeleteDraftContent: React.FC<ComponentProps> = ({
  id,
  token,
  closeModal,
  updateRequests
}) => {
  const [warning, setWarninig] = useState(false);

  const setWarningText = () => {
    setWarninig(true);
  };
  return (
    <S.Container>
      <S.Message>Deseja excluir essa solicitação?</S.Message>
      <S.Warning>
        {warning ? 'Não foi possível deletar este rascunho' : null}
      </S.Warning>
      <S.Buttons>
        <S.CancelDeletion onClick={closeModal}>Cancelar</S.CancelDeletion>
        <DeleteDraftButton
          id={id}
          token={token}
          closeModal={closeModal}
          failureWarning={setWarningText}
          onSuccess={updateRequests}
        ></DeleteDraftButton>
      </S.Buttons>
    </S.Container>
  );
};

export default DeleteDraftContent;
