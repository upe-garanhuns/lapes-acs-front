'use client';

import LoginFooter from '../../../signin/components/LoginFooter';
import LoginInformation from '../../../signin/components/LoginInformation';
import { Authentication } from '../../../signin/components/PasswordRecovery/Authentication';
import * as S from './styles';

interface tokenProps {
  params: { passToken: string };
}

export default function SignIn({ params }: tokenProps) {
  const token = params.passToken || '';
  return (
    <S.Container>
      <S.GridArea>
        <LoginInformation />
        <Authentication authCode={token} />
      </S.GridArea>
      <LoginFooter />
    </S.Container>
  );
}
