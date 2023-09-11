import { useRouter } from 'next/navigation';
import React from 'react';

import { ComponentProps, CertificateStatus } from './interface/types';
import * as S from './styles';

import { Eye } from '@phosphor-icons/react';
export const CertificateList: React.FC<ComponentProps> = ({
  eixoAtividade,
  statusCertificado,
  atividade,
  hours,
  requestId,
  certificateId
}) => {
  const router = useRouter();
  const iconSize = 24;

  const certificateStatusObject: CertificateStatus = {
    DEFERIDO: 'Concluído',
    ENCAMINHADO_COORDENACAO: 'Em análise',
    ENCAMINHADO_COMISSAO: 'Em análise',
    ENCAMINHADO_ESCOLARIDADE: 'Em análise'
  };
  const statusDescription = certificateStatusObject[statusCertificado];

  const nextCertificateScreen = () => {
    router.push(`/visualizar-certificado/${requestId}/${certificateId}`);
  };
  return (
    <div>
      <S.Card>
        <S.Content>
          <S.Title>Status:</S.Title>
          <S.Text>{statusDescription}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Atividade:</S.Title>
          <S.Text>{atividade}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Eixo de ensino:</S.Title>
          <S.Text>{eixoAtividade}</S.Text>
        </S.Content>
        <S.Content>
          <S.Title>Quantidade de horas:</S.Title>
          <S.Text>{hours} horas</S.Text>
        </S.Content>
        <S.IconsContainer>
          <Eye size={iconSize} onClick={nextCertificateScreen} />
        </S.IconsContainer>
      </S.Card>
    </div>
  );
};
