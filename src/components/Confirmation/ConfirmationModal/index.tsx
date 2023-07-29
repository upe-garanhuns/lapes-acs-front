'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ConfirmationPagination } from '../ConfirmationPagination';
import * as S from './styles';

import { XCircle } from '@phosphor-icons/react';

type ComponentProps = {
  handleIsCompleted: () => boolean;
};
export default function ConfirmationModal({
  handleIsCompleted
}: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(handleIsCompleted);
  const openModal = () => {
    if (handleIsCompleted()) {
      setIsOpen(true);
    } else {
      toast.warn('Você não preencheu os dados de todos os certificados!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    }
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
        children={<ConfirmationPagination />}
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
