'use client';

import React, { useState } from 'react';

import * as S from './styles';

import { User } from '@phosphor-icons/react';
export default function Content() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  return (
    <S.Container>
      <S.Title>Recuperação de senha</S.Title>
      <S.Division />
      <S.Centered>
        <S.Message>
          Digite seu email para receber o código de redefinição de senha
        </S.Message>
        <S.Wrapper>
          {/* <S.Icon>
            <User size={24} />
          </S.Icon> */}
          <S.EmailInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
        </S.Wrapper>
        <S.SendCodeButton>Enviar código</S.SendCodeButton>
      </S.Centered>
    </S.Container>
  );
}
