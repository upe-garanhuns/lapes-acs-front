'use client';

import LoginFooter from './components/LoginFooter';
import LoginForm from './components/LoginForm';
import LoginInformation from './components/LoginInformation';
import * as S from './styles';

export default function SignIn() {
  return (
    <S.Container>
      <S.GridArea>
        <LoginInformation />
        <LoginForm />
      </S.GridArea>
      <LoginFooter />
    </S.Container>
  );
}
