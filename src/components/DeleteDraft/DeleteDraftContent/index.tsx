'use client';
import React, { useState } from 'react';

import { DeleteDraftButton } from '../../DeleteDraftButton/index';
import * as S from './styles';

export type ComponentProps = {
  type: boolean;
  token: string;
  id: number;
  closeModal: () => void;
};

const DeleteDraftContent: React.FC<ComponentProps> = ({
  type,
  id,
  token,
  closeModal
}) => {
  const [warning, setWarninig] = useState(false);

  const setWarningText = () => {
    setWarninig(true);
  };
  console.log(warning);
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
          type={type}
          closeModal={closeModal}
          failureWarning={setWarningText}
        ></DeleteDraftButton>
      </S.Buttons>
    </S.Container>
  );
};

export default DeleteDraftContent;
