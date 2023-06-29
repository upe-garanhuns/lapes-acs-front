import { useState } from 'react';

import { checkCourse } from './functions/checkCourse';
import { checkCPF } from './functions/checkCpf';
import { checkEmail } from './functions/checkEmail';
import { checkGrade } from './functions/checkGrade';
import { checkName } from './functions/checkName';
import { checkNumber } from './functions/checkNumber';
import { checkPassWord } from './functions/checkPassword';
import { checkPhone } from './functions/checkPhone';
import { checkSamePass } from './functions/checkSamePass';
import * as S from './style';

import { MapPin, User, Eye, EyeSlash } from '@phosphor-icons/react';

export function Register() {
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorCpf, setErrorCpf] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);
  const [errorGrade, setErrorGrade] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorCourse, setErrorCourse] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);
  const [errorSamePass, setErrorSamePass] = useState<boolean>(false);
  const [errorNumber, setErrorNumber] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>('');
  const [userCpf, setUserCpf] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userCourse, setUserCourse] = useState<string>('');
  const [userPass, setUserPass] = useState<string>('');
  const [userSamePass, setUserSamePass] = useState<string>('');
  const [userNumber, setUserNumber] = useState<string>('');
  const [userCep, setUserCep] = useState<string>('');

  const [visibility, setVisibility] = useState<boolean>(false);

  const handleChangeName = (e) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handleChangeCpf = (e) => {
    const { value } = e.target;

    setUserCpf(value);
  };

  const handleChangePhone = (e) => {
    const { value } = e.target;
    setUserPhone(value);
  };

  const handleChangeGrade = (e) => {
    const { value } = e.target;
    setUserGrade(value);
    setErrorGrade(checkGrade(parseInt(userGrade)));
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setUserEmail(value);
  };

  const handleChangePass = (e) => {
    const { value } = e.target;
    setUserPass(value);
  };

  const handleChangeSamePass = (e) => {
    const { value } = e.target;
    setUserSamePass(value);
  };

  const handleChangeNumber = (e) => {
    const { value } = e.target;
    setUserNumber(value);
  };

  const handleChangeCEP = (e) => {
    const { value } = e.target;
    setUserCep(value);
  };

  const handleTogglePassVisibility = () => {
    setVisibility(!visibility);
  };

  function registerUser() {
    setErrorName(!checkName(userName));
    setErrorCourse(checkCourse(userCourse));
    setErrorCpf(checkCPF(userCpf));
    setErrorPhone(checkPhone(userPhone));
    setErrorEmail(checkEmail(userEmail));
    setErrorGrade(checkGrade(parseInt(userGrade)));
    setErrorPass(checkPassWord(userPass));
    setErrorSamePass(checkSamePass(userPass, userSamePass));
    setErrorNumber(checkNumber(parseInt(userNumber)));
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
              {!errorName && (
                <S.ErroMessage>
                  *Insira um nome entre 2 e 80 letras
                </S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.ComponentsContainer>
                <S.Label>Cpf:</S.Label>
                <S.RegisterInputMask
                  mask="999.999.999-99"
                  placeholder="___.___.___.__"
                  onChange={handleChangeCpf}
                />
                {!errorCpf && (
                  <S.ErroMessage>*Insira um CPF válido</S.ErroMessage>
                )}
              </S.ComponentsContainer>
            </S.InsideDiv>
            <S.InsideDiv>
              <S.ComponentsContainer>
                <S.Label>Telefone:</S.Label>
                <S.RegisterInputMask
                  mask="(99) 9999-9999"
                  placeholder="(__) ____-____"
                  onChange={handleChangePhone}
                />
                {!errorPhone && (
                  <S.ErroMessage>*Insira um telefone brasileiro</S.ErroMessage>
                )}
              </S.ComponentsContainer>
            </S.InsideDiv>
            <S.InsideDiv>
              <S.ComponentsContainer>
                <S.Label>Cursos:</S.Label>
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
              </S.ComponentsContainer>
              {!errorCourse && (
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
              {!errorGrade && (
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
              {!errorEmail && (
                <S.ErroMessage>
                  *Insira um email de domínio da upe
                </S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Senha:"
                placeholder="Senha"
                type={visibility ? 'text' : 'password'}
                onChange={handleChangePass}
                endAdornment={
                  <button onClick={handleTogglePassVisibility}>
                    {visibility ? <Eye size={32} /> : <EyeSlash size={32} />}
                  </button>
                }
              />
              {!errorPass && (
                <S.ErroMessage>
                  *Insira uma senha entre 8 e 16 caracteres
                </S.ErroMessage>
              )}
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Confirme Sua Senha:"
                placeholder="Senha"
                type={visibility ? 'text' : 'password'}
                onChange={handleChangeSamePass}
                endAdornment={
                  <button onClick={handleTogglePassVisibility}>
                    {visibility ? <Eye size={32} /> : <EyeSlash size={32} />}
                  </button>
                }
              />
              {!errorSamePass && (
                <S.ErroMessage>*Insira a mesma senha</S.ErroMessage>
              )}
            </S.InsideDiv>
          </S.InputDiv>
        </S.Div>

        <S.Div>
          {/* Registro do endereço*/}
          <S.TitleDiv>
            <MapPin size={32} weight="bold" />
            <S.RegisterTitle>Endereco:</S.RegisterTitle>
          </S.TitleDiv>
          <S.InputDiv>
            <S.InsideDiv>
              <S.ComponentsContainer>
                <S.Label>CEP:</S.Label>
                <S.RegisterInputMask
                  mask="99999-999"
                  placeholder="_____-___"
                  onChange={handleChangeCEP}
                />
              </S.ComponentsContainer>
            </S.InsideDiv>
            <S.InsideDiv>
              <S.ComponentsContainer>
                <S.Label>Cidade:</S.Label>
                <S.RegisterSelect
                  onChange={(e) => setUserCourse(e.target.value)}
                >
                  <S.SelectOption value="">Cidade</S.SelectOption>
                  <S.SelectOption value="ga">Garanhuns</S.SelectOption>
                  <S.SelectOption value="re">Recife</S.SelectOption>
                  <S.SelectOption value="ca">Caruaru</S.SelectOption>
                </S.RegisterSelect>
              </S.ComponentsContainer>
            </S.InsideDiv>
            <S.InsideDiv>
              <S.ComponentsContainer>
                <S.Label>UF:</S.Label>
                <S.RegisterSelect
                  onChange={(e) => setUserCourse(e.target.value)}
                >
                  <S.SelectOption value="">Estado</S.SelectOption>
                  <S.SelectOption value="pe">PE</S.SelectOption>
                  <S.SelectOption value="pb">PB</S.SelectOption>
                  <S.SelectOption value="ba">BA</S.SelectOption>
                </S.RegisterSelect>
              </S.ComponentsContainer>
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Bairro:" placeholder="Bairro" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput label="Rua:" placeholder="Rua" />
            </S.InsideDiv>
            <S.InsideDiv>
              <S.RegisterInput
                label="Número:"
                placeholder="Número"
                onChange={handleChangeNumber}
              />
              {!errorNumber && (
                <S.ErroMessage>*Insira um número valido</S.ErroMessage>
              )}
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
