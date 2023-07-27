'use client';
import React, { useState } from 'react';

import { ArchiveDraftButton } from '../ArchiveDraftButton/index';
import * as S from './styles';

export type ComponentProps = {
  type: boolean;
  token: string;
  id: number;
  closeModal: () => void;
};

const ArchiveDraftContent: React.FC<ComponentProps> = ({
 
  id,
  token,
  closeModal
}) => {
  const [warning, setWarninig] = useState(false);

  const setWarningText = () => {
    setWarninig(true);
  };
  return (
    <S.Container>
      <S.Message>Deseja arquivar essa solicitação?</S.Message>
      <S.Warning>
        {warning ? 'Não foi possível arquivar este rascunho' : null}
      </S.Warning>
      <S.Buttons>
        <S.CancelArchive onClick={closeModal}>Cancelar</S.CancelArchive>
        <ArchiveDraftButton
          id={id}
          token={token}
          
          closeModal={closeModal}
          failureWarning={setWarningText}
        ></ArchiveDraftButton>
      </S.Buttons>
    </S.Container>
  );
};

export default ArchiveDraftContent;
