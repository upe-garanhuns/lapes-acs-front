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
            <S.InsideDiv $col="span 2 / span 2">
              <S.RegisterInput
                label="Nome Completo:"
                placeholder="Nome Completo"
              />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="CPF:" placeholder="___.___.___.___" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Telefone:" placeholder="(__) ____-____" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Curso:" placeholder="Curso" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Período:" placeholder="Período" />
            </S.InsideDiv>
            <S.InsideDiv $col="span 2 / span 2">
              <S.RegisterInput
                label="E-mail:"
                placeholder="Ex: exemplo@upe.br"
              />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Senha:" placeholder="Senha" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Confirme Sua Senha:"
                placeholder="Senha"
              />
            </S.InsideDiv>
          </S.InputDiv>
        </S.Div>
        <S.Div>
          <S.TitleDiv>
            <MapPin size={32} weight="bold" />
            <S.RegisterTitle>Endereco:</S.RegisterTitle>
          </S.TitleDiv>
          <S.InputDiv>
            <S.InsideDiv>
              <S.RegisterInput label="CEP:" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Cidade:" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="UF:" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Bairro:" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Rua:" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Número:" />
            </S.InsideDiv>
            <S.InsideDiv $col="span 3 / span 3">
              <S.RegisterInput label="Complemento:" />
            </S.InsideDiv>
          </S.InputDiv>
        </S.Div>

        <S.RegisterButton label="Cadastrar" />
      </S.RegisterContainer>
    </S.Container>
  );
}
