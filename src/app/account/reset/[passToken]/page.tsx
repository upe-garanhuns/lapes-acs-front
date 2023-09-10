'use client';

import LoginFooter from '../../../signin/components/LoginFooter';
import LoginInformation from '../../../signin/components/LoginInformation';
import { Authentication } from '../../../signin/components/PasswordRecovery/Authentication';
import * as S from './styles';

interface tokenProps {
  params: { passWordToken: string };
}

export default function SignIn({ params }: tokenProps) {
  const token = params.passWordToken;
  return (
    <S.Container>
      <S.GridArea>
        <LoginInformation />
        <Authentication authCode={''} id={0} />
      </S.GridArea>
      <LoginFooter />
    </S.Container>
  );
}
