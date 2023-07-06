'use client';

import { RequestList } from '../../components/RequestList';
import SideNavBar from '../../components/sideNavBar';
import * as S from './style';

import { FileText, Funnel } from '@phosphor-icons/react';

export default function Home() {
  return (
    <S.Container>
      <S.NavDiv>
        <SideNavBar />
      </S.NavDiv>
      <S.ContentDiv>
        <S.TitleDiv>
          <S.UserName>Bem vindo, Fulano!</S.UserName>
          <S.Line />
        </S.TitleDiv>
        <S.FunctionContainer>
          <div>
            <p>Componente minhas horas</p>
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
              <S.NewRequestButton label="Nova Solicitação" />
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
            </S.Div>
          </S.Div>
        </S.FunctionContainer>
      </S.ContentDiv>
    </S.Container>
  );
}
