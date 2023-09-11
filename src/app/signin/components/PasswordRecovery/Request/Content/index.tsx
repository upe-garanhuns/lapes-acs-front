'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import * as S from './styles';

import { User } from '@phosphor-icons/react';
export default function PasswordRequestContent() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail: string = ev.target.value;
    setEmail(inputEmail);
  };
  const handleSendAuthCode = () => {
    setIsValidEmail(validateEmail(email));
    console.log(validateEmail(email));
    if (validateEmail(email)) {
      // TODO Colocar o POST para mandar o enredeço de email para o back
      // Coloquei um warning para se o email não estiver registrado no sistema dar um aviso,
      // comentei porque não sei se isso fere alguma norma de segurança
      router.push('/authentication');
      // } else {
      //   if (validateEmail(email)) {
      //     setWarning(true);
      //   }
    }
  };
  return (
    <S.Container>
      <S.Title>Recuperação de senha</S.Title>
      <S.Division />
      <S.Centered>
        <S.Message>
          Digite seu email para receber o código de redefinição de senha
        </S.Message>
        <div>
          <S.EmailInput
            placeholder="E-mail"
            startAdornment={<User size={20} />}
            onChange={handleEmailChange}
          />
        </div>
        {!isValidEmail ? (
          <S.ErrorSpan>E-mail inválido {'(Ex.: email@email.com)'}</S.ErrorSpan>
        ) : (
          <></>
        )}
        {/* {warning ? (
          <S.ErrorSpan>Ocorreu um erro ao recuperar a senha</S.ErrorSpan>
        ) : (
          <></>
        )} */}
        <S.SendCodeButton onClick={handleSendAuthCode}>
          Enviar código
        </S.SendCodeButton>
      </S.Centered>
    </S.Container>
  );
}
