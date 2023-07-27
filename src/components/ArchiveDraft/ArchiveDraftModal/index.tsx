'use client';

import React, { useState } from 'react';

import ArchiveDraftContent from '../ArchiveDraftContent';
import * as S from './styles';

import { XCircle, Archive } from '@phosphor-icons/react';

export type ComponentProps = {
  type: boolean;
  token: string;
  id: number;
};

export default function ArchiveDraftModal(props: ComponentProps) {
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
        <Archive size={iconSize} />
      </S.OpenRequest>
      <S.ModalContainer
        isOpen={isOpen}
        closeModalArea={closeModalArea}
        closeModal={closeModal}
        
        children={
          <ArchiveDraftContent
            type={props.type}
            token={props.token}
            id={props.id}
            closeModal={closeModal}
          />
        }
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
