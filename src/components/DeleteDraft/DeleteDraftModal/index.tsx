'use client';

import React, { useState } from 'react';

import DeleteDraftContent from '../DeleteDraftContent';
import * as S from './styles';

import { XCircle, Trash } from '@phosphor-icons/react';
export type ComponentProps = {
  token: string;
  id: number;
  updateRequestsDelete: () => void;
};
export default function DeleteDraftModal(props: ComponentProps) {
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
  const iconSize = 24;
  return (
    <div>
      <S.OpenRequest onClick={openModal}>
        <Trash size={iconSize} />
      </S.OpenRequest>
      <S.ModalContainer
        isOpen={isOpen}
        closeModalArea={closeModalArea}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop
        children={
          <DeleteDraftContent
            token={props.token}
            id={props.id}
            closeModal={closeModal}
            updateRequests={props.updateRequestsDelete}
          />
        }
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
