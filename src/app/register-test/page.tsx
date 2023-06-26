'use client';

import { useState } from 'react';

import { Modal } from '../../components/Modal';
import { Register } from '../../components/Register';

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
      <Modal
        isOpen={OpenRegister}
        closeModal={registerClose}
        // eslint-disable-next-line react/no-children-prop
        children={<Register></Register>}
      ></Modal>
    </div>
  );
}
