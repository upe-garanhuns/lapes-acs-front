'use client';
import { useState } from 'react';

import { Register } from '../../components/Register';
import * as S from './style';

import { XCircle } from '@phosphor-icons/react';

export default function RegistePageTest() {
  const [OpenRegister, setOpenRegister] = useState(false);

  function registerOpen() {
    setOpenRegister(true);
  }

  function registerClose() {
    setOpenRegister(false);
  }

  return (
    <div>
      <button onClick={registerOpen}>Cadastrar</button>
      <S.ModalContainer
        isOpen={OpenRegister}
        closeModal={registerClose}
        // eslint-disable-next-line react/no-children-prop
        children={<Register></Register>}
        closeText={<XCircle size={32} />}
      ></S.ModalContainer>
    </div>
  );
}
