'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { errorToast } from '../../../functions/errorToast';
import { sucessToast } from '../../../functions/sucessToast';
import { getRequest, submitRequest } from '../../../services/request';
import { Certificate } from '../../../services/request/types';
import { CertificateCard } from '../../CertificateCard';
import { CertificateList } from '../../CertificateCard/Style';
import * as S from './styles';

import Cookies from 'js-cookie';
import moment from 'moment';

type ComponentProps = {
  requestId: number;
};

export function ConfirmationPagination({ requestId }: ComponentProps) {
  const router = useRouter();
  const token = Cookies.get('token') ?? '';

  const [certificateData, setCertificateData] = useState<Certificate[]>([]);

  useEffect(() => {
    const request = async () => {
      const requestResponse = await getRequest(requestId, token);
      setCertificateData(requestResponse.certificados ?? []);
    };
    request();
  }, [requestId, token]);

  const submit = async () => {
    try {
      await submitRequest(requestId, token);
      sucessToast('Requisição enviada com sucesso!');
      router.push('/home');
    } catch (error) {
      errorToast('Ocorreu um erro! Tente novamente mais tarde!');
    }
  };

  return (
    <S.Container>
      <S.titleContainer>
        <S.StepConfirmation>Etapa 3 de 3 - Confirmação</S.StepConfirmation>
        <S.Title> Confirmação de envio da Solicitação: {requestId}</S.Title>
      </S.titleContainer>

      <CertificateList>
        {certificateData.map((item, index) => (
          <CertificateCard
            key={index}
            eixo={item.eixoAtividade}
            activity={`${item.atividade.slice(0, 20)}...`}
            dInicial={moment(item.dataInicial).format('DD/MM/YYYY')}
            dFinal={moment(item.dataFinal).format('DD/MM/YYYY')}
            hours={item.cargaHoraria.toString()}
          />
        ))}
      </CertificateList>

      <S.Centered>
        <S.Buttons>
          <S.CancelConfirmButton buttonColor={false}>
            Cancelar
          </S.CancelConfirmButton>
          <S.CancelConfirmButton buttonColor={true} onClick={submit}>
            Confirmar
          </S.CancelConfirmButton>
        </S.Buttons>
      </S.Centered>
    </S.Container>
  );
}
