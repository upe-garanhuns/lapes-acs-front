'use client';

import { CertificateView } from './components/CertificateView';
import * as S from './styles';

export default function SignIn() {
  return (
    <S.Container>
      <S.ContentDiv>
        <S.PrincipalDiv>
          <S.Div>
            <CertificateView />
          </S.Div>
          <S.Div>previewe</S.Div>
        </S.PrincipalDiv>
        <S.Div>side</S.Div>
      </S.ContentDiv>
    </S.Container>
  );
}
