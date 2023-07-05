'use client';

import React, { useState } from 'react';

import ViewRequest from '../ViewRequestContent';
import * as S from './styles';

import { XCircle } from '@phosphor-icons/react';
export default function ModalViewRequest() {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <S.OpenRequest onClick={openModal}>Visualizar</S.OpenRequest>
      <S.ModalContainer
        isOpen={IsOpen}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop
        children={<ViewRequest></ViewRequest>}
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
