import { useState } from 'react';

import { colors } from '../../styles/colors';
import * as S from './style';

import { MapPin, User } from '@phosphor-icons/react';

export function Register() {
  const [error, setError] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  function checkName(): boolean {
    return userName.length < 2 || userName.length > 80;
  }

  function registerUser() {
    setError(checkName());
  }

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
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setUserName(e.target.value);
                }}
              />
              {error && <p>adicionar nome entre 2 e 80 caracteres</p>}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="CPF:"
                placeholder="___.___.___.__"
                type="number"
              />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Telefone:"
                placeholder="(__) ____-____"
                type="number"
              />
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
                type="email"
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
              <S.RegisterInput label="CEP:" placeholder="_____-___" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Cidade:" placeholder="cidade" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="UF:" placeholder="Estado" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Bairro:" placeholder="Bairro" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Rua:" placeholder="Rua" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Número:" placeholder="Número" />
            </S.InsideDiv>
            <S.InsideDiv $col="span 3 / span 3">
              <S.RegisterInput
                label="Complemento:"
                placeholder="Ex: Apartamento 10"
              />
            </S.InsideDiv>
          </S.InputDiv>
        </S.Div>
        <S.ButtonDiv>
          <S.RegisterButton label="Cadastrar" onClick={registerUser} />
        </S.ButtonDiv>
      </S.RegisterContainer>
    </S.Container>
  );
}
