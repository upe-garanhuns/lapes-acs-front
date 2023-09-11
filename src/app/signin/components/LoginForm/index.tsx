'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { login } from '../../../../services/signIn';
import { Login } from '../../../../services/signIn/types';
import { checkEmail } from '../../functions/checkEmail';
import { checkPassWord } from '../../functions/checkPassword';
import { ForgetPassForm } from '../forgetPassword';
import LoginButton from '../LoginButton';
import { LoginInput } from '../LoginInput';
import { Register } from '../Register';
import { useSetData } from './hooks/useSetData';
import { useSetValid } from './hooks/useSetValid';
import * as S from './styles';

import {
  Eye,
  EyeSlash,
  LockSimple,
  User,
  XCircle
} from '@phosphor-icons/react';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const router = useRouter();
  const [OpenRegister, setOpenRegister] = useState(false);
  const [OpenPass, setOpenPass] = useState(false);
  const { email, setEmail, password, setPassword } = useSetData();
  const {
    isPasswordVisible,
    setIsPasswordVisibility,
    isValidEmailAndPassword,
    setIsValidEmailAndPassword,
    isValidEmail,
    setIsValidEmail,
    isValidPassword,
    setIsValidPassword
  } = useSetValid();

  const iconEye = isPasswordVisible ? (
    <Eye size={20} onClick={handlePasswordVisibility} />
  ) : (
    <EyeSlash size={20} onClick={handlePasswordVisibility} />
  );

  const signInData: Login = {
    email: email,
    senha: password
  };

  function onChangeEmail(e: { target: { value: string } }) {
    const { value } = e.target;
    setEmail(value);
    setIsValidEmail(checkEmail(value));
  }

  function onChangePassword(e: { target: { value: string } }) {
    const { value } = e.target;
    setPassword(value);
    setIsValidPassword(checkPassWord(value));
  }

  function handlePasswordVisibility() {
    setIsPasswordVisibility(!isPasswordVisible);
  }

  function registerOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOpenRegister(true);
  }

  function registerClose() {
    setOpenRegister(false);
  }

  function passOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOpenPass(true);
  }

  function passClose() {
    setOpenPass(false);
  }

  async function handleLogin(ev: React.FormEvent<EventTarget>) {
    ev.preventDefault();

    setIsValidEmail(checkEmail(email));
    setIsValidPassword(checkPassWord(password));

    if (isValidEmail && isValidPassword && password !== '' && email != '') {
      try {
        const response = await login(signInData);
        const tokenDuration = new Date(Date.now() + 1000 * 60 * 48); //48min

        Cookies.set('token', response.token, {
          expires: tokenDuration
        });

        router.push('/home');
      } catch (error) {
        setIsValidEmailAndPassword(false);
      }
    }
  }

  return (
    <S.Container onSubmit={handleLogin}>
      <Image
        src={'/logo-blue.png'}
        alt={'Logo da UPE com fundo azul'}
        width={180}
        height={180}
      />
      {!isValidEmailAndPassword ? (
        <S.Error>Email e/ou senha inválidos</S.Error>
      ) : (
        <></>
      )}
      <S.InputContainer>
        <div>
          <LoginInput
            placeholder="E-mail"
            startAdornment={<User size={20} />}
            onChange={onChangeEmail}
          />
          {!isValidEmail ? (
            <S.Error>E-mail inválido {'(Ex.: email@upe.br)'}</S.Error>
          ) : (
            <></>
          )}
        </div>
        <div>
          <LoginInput
            placeholder="Senha"
            type={!isPasswordVisible ? 'password' : 'text'}
            startAdornment={<LockSimple size={20} />}
            endAdornment={iconEye}
            onChange={onChangePassword}
          />
          {!isValidPassword ? (
            <S.Error>
              Senha inválida! É necessário ter pelo menos 8 digitos, uma letra
              maiúscula, um número e um caractere especial.
            </S.Error>
          ) : (
            <></>
          )}
        </div>
      </S.InputContainer>
      <S.ButtonContainer>
        <LoginButton label="Entrar" type="submit" />
        <S.LinkContainer>
          <S.PasswordRecovery
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => passOpen(e)}
          >
            Esqueceu a senha?
          </S.PasswordRecovery>
          <S.SignUp
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              registerOpen(e)
            }
          >
            Cadastrar
          </S.SignUp>
          <S.ModalContainer
            closeModalArea={registerClose}
            isOpen={OpenRegister}
            closeModal={registerClose}
            // eslint-disable-next-line react/no-children-prop
            children={<Register close={registerClose} />}
            closeText={<XCircle size={32} />}
          ></S.ModalContainer>
        </S.LinkContainer>
      </S.ButtonContainer>
      <S.ModalPassContainer
        closeModalArea={passClose}
        isOpen={OpenPass}
        closeModal={passClose}
        // eslint-disable-next-line react/no-children-prop
        children={<ForgetPassForm closeModal={passClose} />}
        closeText={<XCircle size={32} />}
      ></S.ModalPassContainer>
    </S.Container>
  );
}
