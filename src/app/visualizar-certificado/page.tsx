'use client';

import { CertificateView } from './components/CertificateView';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function VisualizarCertificado() {
  const token = Cookies.get('token');
  return (
    <S.Container>
      <S.ContentDiv>
        <S.PrincipalDiv>
          <CertificateView token={token} />
          <S.Div>previewe</S.Div>
        </S.PrincipalDiv>
        <S.Div>side</S.Div>
      </S.ContentDiv>
    </S.Container>
  );
}
