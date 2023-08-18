'use client';
import React, { useState } from 'react';

import { NewRequest } from '../NewRequestContent/index';
import * as S from './style';

import { PencilSimple, XCircle } from '@phosphor-icons/react';
type NewRequestModal = {
  id: number;
  token: string;
};

export function NewRequestModal({ token, id }: NewRequestModal) {
  const [isOpen, setIsOpen] = useState(false);
  const iconSize = 24;
  function openNewRequestModal() {
    setIsOpen(true);
  }

  function closeNewRequestModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <S.OpenRequest onClick={openNewRequestModal}>
        <PencilSimple size={iconSize} />
      </S.OpenRequest>
      <S.NewRequestModal
        closeModalArea={closeNewRequestModal}
        isOpen={isOpen}
        closeModal={closeNewRequestModal}
        // eslint-disable-next-line react/no-children-prop
        children={
          <NewRequest
            cancelRequest={closeNewRequestModal}
            requestId={id}
            token={token}
            isNewRequest={false}
          />
        }
        closeText={<XCircle size={32} color="#FF0000" />}
      ></S.NewRequestModal>
    </div>
  );
}
