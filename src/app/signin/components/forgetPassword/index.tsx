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
        <S.InfoDiv></S.InfoDiv>
        <S.ReCAPTCHADiv></S.ReCAPTCHADiv>
        <S.ButtonDiv></S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};
