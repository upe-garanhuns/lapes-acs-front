import React from 'react';

import * as S from './styles';

type ComponentProps = {
  width?: number;
  height?: number;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({
  width,
  height,
  isOpen,
  closeModal,
  children,
  className
}: ComponentProps) => {
  if (isOpen) {
    return (
      <S.Overlay>
        <S.Container width={width} height={height} className={className}>
          {children}
          <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
        </S.Container>
      </S.Overlay>
    );
  }

  return;
};
