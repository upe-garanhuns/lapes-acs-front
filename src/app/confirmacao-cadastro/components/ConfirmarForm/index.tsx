import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

import { errorToast } from '../../../../functions/errorToast';
import { sucessToast } from '../../../../functions/sucessToast';
import {
  sendVerificationEmail,
  verificarCodigo
} from './../../../../services/verification';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function ConfirmarForm() {
  const [codigoVerificacao, setCodigoVerificacao] = useState('');

  const router = useRouter();

  const handleCodigoChange = (otp: string) => {
    setCodigoVerificacao(otp);
  };
  const token = Cookies.get('token') || ''; // Obtém o código de verificação do cookie "token"

  const handleConfirmarClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      if (!token) {
        // Caso o código de verificação não esteja presente no cookie, trate o erro
        throw new Error('Código de verificação não encontrado no cookie.');
      }
      await verificarCodigo(codigoVerificacao, token).then((res) => {
        if (res.status === 200) {
          sucessToast('Cadastro confirmado com sucesso!');
          router.push('/home');
        } else {
          errorToast('Código de verificação inválido.');
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleCancelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/home');
  };

  const reSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await sendVerificationEmail(token).then((res) => {
        if (res.status === 200) {
          sucessToast('Codigo reinviado novamente');
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <S.Container>
      <S.Cima>
        <S.Title>Confirmar cadastro</S.Title>
        <S.Line />
        <S.Paragraph>
          Preencha o campo indicado com código de ativação da conta enviado para
          seu e-mail, caso não tenha recebido, aperte no botão de enviar o
          código novamente.
        </S.Paragraph>
        <S.ButtonEnviar
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            reSendEmail(e);
          }}
        >
          Enviar novamente
        </S.ButtonEnviar>
      </S.Cima>
      <OtpInput
        value={codigoVerificacao}
        onChange={handleCodigoChange}
        numInputs={10}
        inputStyle={{ width: '50px', height: '50px' }}
        renderInput={(props) => <S.OtpInputField {...props} />}
        containerStyle={'flex-direction: column'}
      />
      <S.ButtonsContainer>
        <S.CancelButton onClick={handleCancelClick}>Cancelar</S.CancelButton>
        <S.ConfirmButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleConfirmarClick(event);
          }}
        >
          Confirmar
        </S.ConfirmButton>
      </S.ButtonsContainer>
    </S.Container>
  );
}
