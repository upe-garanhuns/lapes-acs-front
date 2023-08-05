'use client';

import LoginFooter from './../signin/components/LoginFooter';
import LoginInformation from './../signin/components/LoginInformation';
import ConfirmarForm from './components/ConfirmarForm';
import * as S from './style';

export default function ConfirmacaoCadastro() {
  return (
    <S.Container>
      <S.GridArea>
        <LoginInformation />
        <ConfirmarForm />
      </S.GridArea>
      <LoginFooter />
    </S.Container>
  );
}
