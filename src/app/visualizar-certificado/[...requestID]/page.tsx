'use client';

import { useEffect, useState } from 'react';

import { getRequest } from '../../../services/request';
import { UserRequest } from '../../../services/request/types';
import { CertificateView } from '../components/CertificateView';
import { SideCertificateView } from '../components/SideCertificateView';
import * as S from './styles';

import Cookies from 'js-cookie';

interface idProps {
  params: { requestID: string; certificateId: string };
}

export default function VisualizarCertificado({ params }: idProps) {
  const token = Cookies.get('token');
  const [selectId, setSelectId] = useState<UserRequest>();
  const [requestIdSelect, setRequestIdSelect] = useState<number>();
  const [certificateId, setCertificateId] = useState<number>(
    parseInt(params.requestID[1])
  );

  useEffect(() => {
    setRequestIdSelect(parseInt(params.requestID));
    const requestIdFetch = async () => {
      const requestResponse = await getRequest(requestIdSelect, token);
      setSelectId(requestResponse);
    };
    requestIdFetch();
  }, [params, requestIdSelect, setSelectId, token]);

  const handleCertificateClick = (id: number) => {
    setCertificateId(id);
  };

  return (
    <S.Container>
      <S.ContentDiv>
        <S.PrincipalDiv>
          <CertificateView
            token={token}
            id={certificateId}
            requestId={requestIdSelect}
          />
          <S.Div>preview</S.Div>
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
