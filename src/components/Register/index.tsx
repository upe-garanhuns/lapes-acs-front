import { Input } from '../Input';
import * as S from './style';

import { MapPin, User } from '@phosphor-icons/react';

export function Register() {
  return (
    <S.Container>
      <S.BlueBarContainer />
      <S.RegisterContainer>
        <S.Div>
          <S.RegisterTitle $principal>Cadastro</S.RegisterTitle>
        </S.Div>

        <S.Line />

        <S.Div>
          <S.TitleDiv>
            <User size={25} weight="bold" />
            <S.RegisterTitle>Dados Pessoais:</S.RegisterTitle>
          </S.TitleDiv>
          <S.InputDiv>
            <S.RegisterInput label="Nome Completo:" />
            <S.RegisterInput label="CPF:" />
            <S.RegisterInput label="Telefone:" />
            <S.RegisterInput label="Curso:" />
            <S.RegisterInput label="Período:" />
            <S.RegisterInput label="E-mail:" />
            <S.RegisterInput label="Senha:" />
            <S.RegisterInput label="Confirme Sua Senha:" />
          </S.InputDiv>
        </S.Div>
        <S.Div>
          <S.TitleDiv>
            <MapPin size={32} weight="bold" />
            <S.RegisterTitle>Endereco:</S.RegisterTitle>
          </S.TitleDiv>
        </S.Div>

        <S.RegisterButton label="Cadastrar" />
      </S.RegisterContainer>
    </S.Container>
  );
}
