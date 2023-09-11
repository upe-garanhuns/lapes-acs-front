'use client';

import React, { useState } from 'react';

import { warnToast } from '../../../functions/warnToast';
import { ConfirmationPagination } from '../ConfirmationPagination';
import * as S from './styles';

import { XCircle } from '@phosphor-icons/react';

type ComponentProps = {
  handleIsCompleted: () => boolean;
  requestId: number;
};

export default function ConfirmationModal({
  handleIsCompleted,
  requestId
}: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    if (handleIsCompleted()) {
      setIsOpen(true);
    } else {
      warnToast('Você não preencheu os dados de todos os certificados!');
    }
  };
  const closeModalArea = () => {
    setIsOpen(false);
  };
  return (
    <S.Container>
      <S.OpenRequest onClick={openModal}>Enviar Solicitação</S.OpenRequest>
      <S.ModalContainer
        isOpen={isOpen}
        closeModalArea={closeModalArea}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop
        children={<ConfirmationPagination requestId={requestId} />}
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </S.Container>
  );
}
