import { useRouter } from 'next/navigation';
import React from 'react';

import * as S from './styles';

import { Eye } from '@phosphor-icons/react';

export type ComponentProps = {
  statusCertificado: string | undefined;
  titulo: string;
  hours: number | undefined;
  eixoAtividade: string;
  atividade: string;
  requestId: number | undefined;
  certificateId: number | undefined;
};

export const CertificateList: React.FC<ComponentProps> = ({
  eixoAtividade,
  statusCertificado,
  atividade,
  hours,
  requestId,
  certificateId
}) => {
  const router = useRouter();
  let statusDescription = '';
  statusCertificado === 'DEFERIDO'
    ? (statusDescription = 'Concluído')
    : statusCertificado === 'ENCAMINHADO_COORDENACAO'
    ? (statusDescription = 'Em análise')
    : statusCertificado === 'ENCAMINHADO_COMISSAO'
    ? (statusDescription = 'Em análise')
    : statusCertificado === 'ENCAMINHADO_ESCOLARIDADE'
    ? (statusDescription = 'Em análise')
    : (statusDescription = 'Sem status');
  const iconSize = 24;

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
