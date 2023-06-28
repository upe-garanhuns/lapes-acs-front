import { useState } from 'react';

import { checkCourse } from './functions/checkCourse';
import { checkCPF } from './functions/checkCpf';
import { checkEmail } from './functions/checkEmail';
import { checkGrade } from './functions/checkGrade';
import { checkName } from './functions/checkName';
import { checkNumber } from './functions/checkNumber';
import { checkPassWord } from './functions/checkPassword';
import { checkSamePass } from './functions/checkSamePass';
import { cpfMask } from './functions/cpfMask';
import * as S from './style';

import { MapPin, User } from '@phosphor-icons/react';

export function Register() {
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorCpf, setErrorCpf] = useState<boolean>(false);
  const [errorNumber, setErrorNumber] = useState<boolean>(false);
  const [errorGrade, setErrorGrade] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorCourse, setErrorCourse] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);
  const [errorSamePass, setErrorSamePass] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>('');
  const [userCpf, setUserCpf] = useState<string>('');
  const [userNumber, setUserNumber] = useState<string>('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userCourse, setUserCourse] = useState<string>('');
  const [userPass, setUserPass] = useState<string>('');
  const [userSamePass, setUserSamePass] = useState<string>('');

  const handleChangeName = (e) => {
    const { value } = e.target;
    setUserName(value);
    setErrorName(!checkName(userName));
  };

  const handleChangeCpf = (e) => {
    const { value } = e.target;
    setErrorCpf(checkCPF(userCpf));
    setUserCpf(cpfMask(value));
  };

  const handleChangeNumber = (e) => {
    const { value } = e.target;
    setUserNumber(value);
    setErrorNumber(checkNumber(userNumber));
  };

  const handleChangeGrade = (e) => {
    const { value } = e.target;
    setUserGrade(value);
    setErrorGrade(checkGrade(parseInt(userGrade)));
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setUserEmail(value);
    setErrorEmail(checkEmail(userEmail));
  };

  const handleChangePass = (e) => {
    const { value } = e.target;
    setUserPass(value);
    setErrorPass(checkPassWord(userPass));
  };

  const handleChangeSamePass = (e) => {
    const { value } = e.target;
    setUserSamePass(value);
    setErrorSamePass(checkSamePass(userPass, userSamePass));
  };

  function registerUser() {
    setErrorCourse(checkCourse(userCourse));
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
          {/* Registro do usuário*/}
          <S.TitleDiv>
            <User size={25} weight="bold" />
            <S.RegisterTitle>Dados Pessoais:</S.RegisterTitle>
          </S.TitleDiv>
          <S.InputDiv>
            <S.InsideDiv $col="span 2 / span 2">
              <S.RegisterInput
                label="Nome Completo:"
                placeholder="Nome Completo"
                onChange={handleChangeName}
              />
              {errorName && (
                <S.ErroMessage>
                  *Insira um nome entre 2 e 80 letras
                </S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="CPF:"
                placeholder="___.___.___.__"
                onChange={handleChangeCpf}
              />
              {errorCpf && <S.ErroMessage>*Insira um CPF válido</S.ErroMessage>}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Telefone:"
                placeholder="(__) ____-____"
                type="number"
                onChange={handleChangeNumber}
              />
              {errorNumber && (
                <S.ErroMessage>*Insira um telefone brasileiro</S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.SelectContainer>
                <S.SelectLabel>Cursos:</S.SelectLabel>
                <S.RegisterSelect
                  onChange={(e) => setUserCourse(e.target.value)}
                >
                  <S.SelectOption value="">Cursos</S.SelectOption>
                  <S.SelectOption value="es">
                    Engenharia de software
                  </S.SelectOption>
                  <S.SelectOption value="lc">
                    Licenciatura de computação
                  </S.SelectOption>
                </S.RegisterSelect>
              </S.SelectContainer>
              {errorCourse && (
                <S.ErroMessage>*Selecione um curso</S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Período:"
                placeholder="Período"
                type="number"
                onChange={handleChangeGrade}
              />
              {errorGrade && (
                <S.ErroMessage>*Insira um período válido</S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv $col="span 2 / span 2">
              <S.RegisterInput
                label="E-mail:"
                placeholder="Ex: exemplo@upe.br"
                type="email"
                onChange={handleChangeEmail}
              />
              {errorEmail && (
                <S.ErroMessage>
                  *Insira um email de domínio da upe
                </S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Senha:"
                placeholder="Senha"
                type="password"
                onChange={handleChangePass}
              />
              {errorPass && (
                <S.ErroMessage>
                  *Insira uma senha entre 8 e 16 caracteres
                </S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Confirme Sua Senha:"
                placeholder="Senha"
                type="password"
                onChange={handleChangeSamePass}
              />
              {errorSamePass && (
                <S.ErroMessage>*Insira a mesma senha</S.ErroMessage>
              )}
            </S.InsideDiv>
          </S.InputDiv>
        </S.Div>

        <S.Div>
          {' '}
          {/* Registro do endereço*/}
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
