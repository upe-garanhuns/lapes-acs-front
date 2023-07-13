'use client';

import { useEffect, useState } from 'react';

import { request } from '../../services/request';
import { UserRequest } from '../../services/request/types';
import HourCount from './components/HourCount';
import { NewRequest } from './components/NewRequest';
import { RequestList } from './components/RequestList';
import { sumRequestHours } from './functions/sumRequestHours';
import * as S from './style';

import { FileText, Funnel, XCircle } from '@phosphor-icons/react';
import Cookies from 'js-cookie';
import moment from 'moment';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState<UserRequest[]>([]);
  const token = Cookies.get('token');

  useEffect(() => {
    const userRequest = async () => {
      const requestResponse = await request(token);
      setRequests(requestResponse);
    };

    userRequest();
  }, [token]);

  function openNewRequestModal() {
    setIsOpen(true);
  }

  function closeNewRequestModal() {
    setIsOpen(false);
  }

  return (
    <S.Container>
      <S.ContentDiv>
        <S.TitleDiv>
          <S.UserName>Bem vindo, Fulano!</S.UserName>
          <S.Line />
        </S.TitleDiv>
        <S.FunctionContainer>
          <div>
            <HourCount />
          </div>
          <S.Div>
            <S.RequestDiv>
              <S.H2Title>Solicitações em Andamento</S.H2Title>
              <S.IconButton>
                <FileText size={24} weight="bold" />
                <S.Text>Barema</S.Text>
              </S.IconButton>
            </S.RequestDiv>
            <S.NewRequestDiv>
              <S.NewRequestButton
                label="Nova Solicitação"
                onClick={openNewRequestModal}
              />
              <S.InputRequestDiv>
                <S.RegisterInput placeholder="Pesquisar" />
                <S.IconButton>
                  <Funnel size={28} weight="fill" />
                </S.IconButton>
              </S.InputRequestDiv>
            </S.NewRequestDiv>
            <S.Div>
              {requests.length > 0 ? (
                requests.map((item) => (
                  <RequestList
                    status={item.requisicaoStatus}
                    id={item.id}
                    initialDate={moment(item.data).format('DD/MM/YYYY')} //new Date(item.data).toLocaleDateString('pt-br')
                    hours={sumRequestHours(item.certificados)}
                    key={item.id}
                  />
                ))
              ) : (
                <S.H3Title>Nenhuma solicitação registrada...</S.H3Title>
              )}
              <S.NewRequestModal
                closeModalArea={closeNewRequestModal}
                isOpen={isOpen}
                closeModal={closeNewRequestModal}
                // eslint-disable-next-line react/no-children-prop
                children={<NewRequest cancelRequest={closeNewRequestModal} />}
                closeText={<XCircle size={32} color="#FF0000" />}
              ></S.NewRequestModal>
            </S.Div>
          </S.Div>
        </S.FunctionContainer>
      </S.ContentDiv>
    </S.Container>
  );
}
