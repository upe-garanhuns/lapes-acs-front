import React from 'react';

import * as S from './styles';

export const ForgetPassForm = () => {
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
          <S.InputRequest placeholder="Email:" />
        </S.InputDiv>
        {/* <S.ReCAPTCHADiv></S.ReCAPTCHADiv> */}
        <S.ButtonDiv>
          <S.Button color="#fff" background="#1c3c78">
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
