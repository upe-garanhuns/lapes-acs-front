'use client';

import React, { useState } from 'react';

import { ConfirmationContent } from '../ConfirmationContent';
import * as S from './styles';

import { Eye, XCircle } from '@phosphor-icons/react';

export default function ConfirmationModal() {
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
      <S.OpenRequest onClick={openModal}>Enviar Solicitação</S.OpenRequest>
      <S.ModalContainer
        isOpen={isOpen}
        closeModalArea={closeModalArea}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop
        children={
          <ConfirmationContent
            id={42353}
            title={'XXXX'}
            educationAxis={'Ensino'}
            activity={'Titulo da atividade'}
            initialDate={'DD/MM/AA'}
            finalDate={'DD/MM/AA'}
            hours={0}
          />
        }
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
