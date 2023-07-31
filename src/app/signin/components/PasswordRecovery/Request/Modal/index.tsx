'use client';

import React, { useState } from 'react';

import Content from '../Content/index';
import * as S from './styles';

import { XCircle } from '@phosphor-icons/react';

export default function PasswordRequestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModalArea = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <S.OpenRequest onClick={openModal}>Esqueceu a senha?</S.OpenRequest>
      <S.ModalContainer
        isOpen={isOpen}
        closeModalArea={closeModalArea}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop

        closeText={<XCircle size={30} color="#FF0000" />}
      >
        <Content />
      </S.ModalContainer>
    </div>
  );
}
