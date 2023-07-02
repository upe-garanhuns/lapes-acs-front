'use client';
import { useState } from 'react';

import { Modal } from '../../components/Request';
import * as S from './style';

import { XCircle } from '@phosphor-icons/react';

export default function RegistePageTest() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Cadastrar</button>
      <Modal
        width={800}
        height={700}
        isOpen={isOpen}
        closeModal={closeModal}
        className="register-modal"
      >
        <S.Title>Etapa 1 de 2 - Anexar certificados</S.Title>
        <S.CloseButton onClick={closeModal}>
          <XCircle size={32} />
        </S.CloseButton>
        <S.Subtitle>Barema</S.Subtitle>
        <S.FileInput type="file" />
        <S.FileList>
          <S.FileName>Nome do Arquivo 1</S.FileName>
          <S.FileName>Nome do Arquivo 2</S.FileName>
        </S.FileList>
      </Modal>
    </div>
  );
}
