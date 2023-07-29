'use client';

import { useEffect, useState } from 'react';

import { getRequest } from '../../services/request';
import { UserRequest } from '../../services/request/types';
import { CertificateView } from './components/CertificateView';
import { SideCertificateView } from './components/SideCertificateView';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function VisualizarCertificado() {
  const token = Cookies.get('token');
  const [selectId, setSelectId] = useState<UserRequest>();
  const [certificateId, setCertificateId] = useState<number>();

  useEffect(() => {
    const requestIdFetch = async () => {
      const requestResponse = await getRequest(152, token);
      setSelectId(requestResponse);
    };
    requestIdFetch();
  }, [setSelectId, token]);

  const handleCertificateClick = (id: number) => {
    setCertificateId(id);
  };

  return (
    <S.Container>
      <S.ContentDiv>
        <S.PrincipalDiv>
          <CertificateView token={token} id={certificateId} />
          <S.Div>previewe</S.Div>
        </S.PrincipalDiv>
        {selectId && (
          <SideCertificateView
            certificate={selectId.certificados}
            onCertificateClick={handleCertificateClick}
          />
        )}
      </S.ContentDiv>
    </S.Container>
  );
}
