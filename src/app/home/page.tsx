'use client';

import { useEffect, useState } from 'react';

import { request } from '../../services/request';
import HourCount from './components/HourCount';
import { NewRequest } from './components/NewRequest';
import { RequestList } from './components/RequestList';
import * as S from './style';

import { FileText, Funnel, XCircle } from '@phosphor-icons/react';
import Cookies from 'js-cookie';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState({});
  const token = Cookies.get('token');

  async function getRequests() {
    const response = await request(token);
    setRequests(response);
  }

  useEffect(() => {
    getRequests();
    console.log(requests);
  }, []);

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
              <RequestList
                status={''}
                isDraft={false}
                label={''}
                initialDate={''}
                hours={0}
              />
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
