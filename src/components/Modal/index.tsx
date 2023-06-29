import React, { ReactNode } from 'react';

import * as S from './styles';

type ComponentProps = {
  width?: number;
  height?: number;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
  closeText?: ReactNode;
};

export const Modal = ({
  width,
  height,
  isOpen,
  closeModal,
  children,
  className,
  closeText = 'Fechar'
}: ComponentProps) => {
  if (isOpen) {
    return (
      <S.Overlay>
        <S.Container width={width} height={height} className={className}>
          {children}
          <S.CloseButton onClick={closeModal}>{closeText}</S.CloseButton>
        </S.Container>
      </S.Overlay>
    );
  }

  return;
};
