import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { sucessToast } from '../../../../../functions/sucessToast';
import { warnToast } from '../../../../../functions/warnToast';
import { sendNewPass } from '../../../../../services/passRecovery';
import { checkPassWord } from './functions/checkPassword';
import { checkSamePass } from './functions/checkSamePass';
import * as S from './styles';

import { Eye, EyeSlash, LockSimple } from '@phosphor-icons/react';

export type AuthenticationProps = {
  authCode: string;
};
export function Authentication({ authCode }: AuthenticationProps) {
  const [newPass, setNewPass] = useState<string>('');
  const [newPassConfirmation, setNewPassConfirmation] = useState<string>('');
  const [passError, setPassError] = useState<boolean>(true);
  const [samePassError, setSamePassError] = useState<boolean>(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const router = useRouter();
  const handleCancel = () => {
    router.push('/signin');
  };

  const handleChangePass = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setNewPass(value);
  };

  const handleChangeConfirmPass = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setNewPassConfirmation(value);
  };

  const handleConfirmation = async () => {
    setPassError(checkPassWord(newPass));
    setSamePassError(checkSamePass(newPass, newPassConfirmation));
    if (passError && samePassError === true) {
      try {
        await sendNewPass(authCode, { novaSenha: newPassConfirmation }).then(
          (res) => {
            if (res.status === 204) {
              sucessToast('Senha redefinida com sucesso!');
              router.push('/signin');
            }
            if (res.status === 403) {
              warnToast('Email expirado, solicite novamente.');
              router.push('/signin');
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  function handlePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const iconEye = isPasswordVisible ? (
    <Eye size={20} onClick={handlePasswordVisibility} />
  ) : (
    <EyeSlash size={20} onClick={handlePasswordVisibility} />
  );

  return (
    <S.Container>
      <S.Title>Recuperação de senha</S.Title>
      <S.Division />
      <S.Message>Digite e confirme sua nova senha</S.Message>
      <S.Column>
        <S.InputDiv>
          <S.InputRequest
            placeholder="Nova Senha:"
            onChange={handleChangePass}
            type={!isPasswordVisible ? 'password' : 'text'}
            endAdornment={iconEye}
          />
          {!passError == false ? (
            <></>
          ) : (
            <S.ErrorMessage>
              *Insira uma senha entre 8 e 16 caracteres, que possua pelo menos
              um número, uma letra maiúscula, uma minúsucla e um símbolo
              {' (!@#$%^&*()_+-)'}
            </S.ErrorMessage>
          )}
          <S.InputRequest
            placeholder="Confirme nova senha:"
            onChange={handleChangeConfirmPass}
            type={!isPasswordVisible ? 'password' : 'text'}
            endAdornment={<LockSimple size={20} />}
          />
          {!samePassError == false ? (
            <></>
          ) : (
            <S.ErrorMessage>*Os campos precisam ser iguais</S.ErrorMessage>
          )}
        </S.InputDiv>
      </S.Column>
      <S.Row>
        <S.Button isCancel={true} onClick={handleCancel}>
          Cancelar
        </S.Button>
        <S.Button isCancel={false} onClick={handleConfirmation}>
          Confirmar
        </S.Button>
      </S.Row>
    </S.Container>
  );
}
