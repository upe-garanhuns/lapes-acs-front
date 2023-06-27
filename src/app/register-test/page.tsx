'use client';

import { useState } from 'react';

import { Modal } from '../../components/Modal';
import { Register } from '../../components/Register';
import * as S from './style';

export default function RegistePageTest() {
  const [OpenRegister, setOpenRegister] = useState(false);

  function registerOpen() {
    setOpenRegister(true);
  }

  function registerClose() {
    setOpenRegister(false);
  }

  console.log(OpenRegister);

  return (
    <div>
      <button onClick={registerOpen}>Cadastrar</button>
      <S.ModalContainer
        isOpen={OpenRegister}
        closeModal={registerClose}
        width={1067}
        height={906}
        // eslint-disable-next-line react/no-children-prop
        children={<Register></Register>}
      ></S.ModalContainer>
    </div>
  );
}
