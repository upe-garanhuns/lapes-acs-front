'use client';

import LoginFooter from '../signin/components/LoginFooter';
import LoginInformation from '../signin/components/LoginInformation';
import { Authentication } from '../signin/components/PasswordRecovery/Authentication';
import * as S from './styles';

export default function SignIn() {
  return (
    <S.Container>
      <S.GridArea>
        <LoginInformation />
        <Authentication />
      </S.GridArea>
      <LoginFooter />
    </S.Container>
  );
}
