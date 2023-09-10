import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

import { authenticateUser } from '../../../../../services/request';
import * as S from './styles';
export type AuthenticationProps = {
  authCode: string;
  id: number;
};
export function Authentication({ authCode, id }: AuthenticationProps) {
  const router = useRouter();
  const handleCancel = () => {
    router.push('/home');
  };
  const handleConfirmation = async () => {
    try {
      await authenticateUser(id, authCode); // Esses parametros podem mudar porque o back ainda tá sendo feito
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendCode = async () => {
    try {
      await null; // Pra mandar o código de autenticação pro email novamente
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Container>
      <S.Title>Recuperação de senha</S.Title>
      <S.Division />
      <S.Message>
        Digite o código de redifinição de senha enviado ao seu email
      </S.Message>
      <S.Column>
        <S.SendAgainButton isCancel={false} onClick={handleSendCode}>
          Enviar novamente
        </S.SendAgainButton>
        <S.Centered>
          <S.CodeInput placeholder="0-0-0-0" />
        </S.Centered>
      </S.Column>
      <S.Row>
        <S.Button isCancel={true} onClick={handleCancel}>
          Cancelar
        </S.Button>
        <S.Button isCancel={false} onClick={handleConfirmation}>
          Confirmar
        </S.Button>
      </S.Row>
    </S.Container>
  );
}
