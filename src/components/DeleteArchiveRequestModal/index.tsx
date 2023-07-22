import React, { useState } from 'react';

import { DeleteRequest } from '../DeleteArchiveRequest';
import * as S from './styles';
export type ComponentProps = {
  type: boolean;
  onArchive: () => void;
  token: string;
  id: number;
};

const ArchiveRequest: React.FC<ComponentProps> = ({
  type,
  onArchive,
  id,
  token
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleArchive = () => {
    onArchive();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.PopUpContainer>
        <S.CloseIcon onClick={handleClose} />
        <h2>Deseja {type ? 'excluir' : 'arquivar'} essa solicitação?</h2>
        <S.ButtonContainer>
          <S.CloseButton onClick={handleClose}>Cancelar</S.CloseButton>
          <DeleteRequest id={id} token={token} type={type} />
        </S.ButtonContainer>
      </S.PopUpContainer>
    </S.Overlay>
  );
};

export default ArchiveRequest;
