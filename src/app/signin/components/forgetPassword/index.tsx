import React, { useState } from 'react';

import { checkEmail } from './functions/checkEmail';
import * as S from './styles';

export const ForgetPassForm = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(true);
  const [messageEmptyError, setMessageEmptyError] = useState<boolean>(false);

  const handleChangeEmail = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setEmail(value);
  };

  const submitPassRecovery = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email == '') {
      setMessageEmptyError(true);
      setEmailError(true);
    } else {
      setMessageEmptyError(false);
      setEmailError(checkEmail(email));
    }
  };

  console.log(email);
  console.log(emailError);

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
          {emailError == false ? (
            <S.ErrorMessage>*Digite um email de dominio da upe</S.ErrorMessage>
          ) : (
            <></>
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
          <S.Button color="#1c3c78" background="#fff">
            Voltar
          </S.Button>
        </S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};
