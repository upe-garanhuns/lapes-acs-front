import React, { useState } from 'react';
import * as S from './styles';

export type ComponentProps = {
  title: string;
  archiveButtonText: string;
  onArchive: () => void;
};

const ArchiveRequest: React.FC<ComponentProps> = ({ title, archiveButtonText, onArchive }) => {
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
        <h2>{title}</h2>
        <S.ButtonContainer>
          <S.CloseButton onClick={handleClose}>Cancelar</S.CloseButton>
          <S.ArchiveButton onClick={handleArchive}>{archiveButtonText}</S.ArchiveButton>
        </S.ButtonContainer>
      </S.PopUpContainer>
    </S.Overlay>
  );
};

export default ArchiveRequest;
