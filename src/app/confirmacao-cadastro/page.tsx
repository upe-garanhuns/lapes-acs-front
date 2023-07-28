'use client';

import LoginFooter from './../signin/components/LoginFooter';
import LoginInformation from './../signin/components/LoginInformation';
import * as S from './style';

export default function ConfirmacaoCadastro() {
  return (
    <S.Container>
      <S.GridArea>
        <LoginInformation />
      </S.GridArea>
      <LoginFooter />
    </S.Container>
  );
}
