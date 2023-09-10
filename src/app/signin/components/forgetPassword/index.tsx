import React, { useState } from 'react';

import { sucessToast } from '../../../../functions/sucessToast';
import { sendRecovey } from '../../../../services/recovery';
import { checkEmail } from './functions/checkEmail';
import * as S from './styles';

interface ForgetPassWordInterface {
  closeModal: () => void;
}

export const ForgetPassForm = ({ closeModal }: ForgetPassWordInterface) => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(true);
  const [messageEmptyError, setMessageEmptyError] = useState<boolean>(false);

  const handleChangeEmail = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setEmail(value);
  };

  const submitPassRecovery = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email == '') {
      setMessageEmptyError(true);
      setEmailError(true);
    } else {
      setMessageEmptyError(false);
      setEmailError(checkEmail(email));
    }
    if (emailError === true && messageEmptyError === false) {
      try {
        await sendRecovey(email).then((res) => {
          if (res.status === 204) {
            sucessToast(
              `Email de verificação enviado com sucesso!, verifique o email ${email}`
            );
            closePassModal(e);
          }
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  const closePassModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <S.Container>
      <S.Content>
        <S.InfoDiv>
          <S.Title>Esqueci a senha</S.Title>
          <S.Line />
          <S.SubTitle>
            Digite seu e-mail e você receberá um link para alterar sua senha
          </S.SubTitle>
        </S.InfoDiv>
        <S.InputDiv>
          <S.InputRequest placeholder="Email:" onChange={handleChangeEmail} />
          {!emailError == false ? (
            <></>
          ) : (
            <S.ErrorMessage>*Digite um email de dominio da upe</S.ErrorMessage>
          )}
          {!messageEmptyError == false ? (
            <S.ErrorMessage>*Campo não pode ser vazio</S.ErrorMessage>
          ) : (
            <></>
          )}
        </S.InputDiv>
        {/* <S.ReCAPTCHADiv></S.ReCAPTCHADiv> */}
        <S.ButtonDiv>
          <S.Button
            color="#fff"
            background="#1c3c78"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              submitPassRecovery(e)
            }
          >
            Recuperar senha
          </S.Button>
          <S.Button
            color="#1c3c78"
            background="#fff"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              closePassModal(e)
            }
          >
            Voltar
          </S.Button>
        </S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};
