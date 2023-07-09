import React, { ReactNode } from 'react';

import * as S from './styles';

type ComponentProps = {
  width?: number;
  height?: number;
  isOpen: boolean;
  closeModal: () => void;
  closeModalArea: () => void;
  children: React.ReactNode;
  className?: string;
  closeText?: ReactNode;
};

export const Modal = ({
  width,
  height,
  isOpen,
  closeModal,
  closeModalArea,
  children,
  className,
  closeText = 'Fechar'
}: ComponentProps) => {
  const handleContainerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  if (isOpen) {
    return (
      <S.Overlay onClick={closeModalArea}>
        <S.Container
          width={width}
          height={height}
          className={className}
          onClick={handleContainerClick}
        >
          {children}
          <S.CloseButton onClick={closeModal}>{closeText}</S.CloseButton>
        </S.Container>
      </S.Overlay>
    );
  }

  return;
};
