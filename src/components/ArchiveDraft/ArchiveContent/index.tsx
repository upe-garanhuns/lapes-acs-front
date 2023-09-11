'use client';
import React, { useState } from 'react';

import { ArchiveButton } from '../ArchiveButton/index';
import * as S from './styles';

export type ComponentProps = {
  type: boolean;
  token: string;
  id: number;
  closeModal: () => void;
  updateRequests: () => void;
};

const ArchiveContent: React.FC<ComponentProps> = ({
  id,
  token,
  type,
  closeModal,
  updateRequests
}) => {
  const [warning, setWarninig] = useState(false);

  const setWarningText = () => {
    setWarninig(true);
  };

  const actionType = type ? 'desarquivar' : 'arquivar';

  return (
    <S.Container>
      <S.Message>Deseja {actionType} essa solicitação?</S.Message>
      <S.Warning>
        {warning ? 'Não foi possível realizar essa ação' : null}
      </S.Warning>
      <S.Buttons>
        <S.CancelArchive onClick={closeModal}>Cancelar</S.CancelArchive>
        <ArchiveButton
          id={id}
          token={token}
          closeModal={closeModal}
          failureWarning={setWarningText}
          onSuccess={updateRequests}
          type={type}
        ></ArchiveButton>
      </S.Buttons>
    </S.Container>
  );
};

export default ArchiveContent;
