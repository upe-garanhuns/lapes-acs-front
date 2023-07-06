'use client';

import { RequestList } from '../../components/RequestList';
import SideNavBar from '../../components/sideNavBar';
import * as S from './style';

import { FileText } from '@phosphor-icons/react';

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
          <div>
            <S.RequestDiv>
              <h2>Solicitações em Andamento</h2>
              <S.BaremaButton>
                <FileText size={24} weight="bold" />
                <p>Barema</p>
              </S.BaremaButton>
            </S.RequestDiv>
            <div>
              <p>Botao nova solicitacao</p>
              <p>input pesquisa</p>
              <p>Botao filtro</p>
            </div>
            <div>
              <RequestList
                status={''}
                isDraft={false}
                label={''}
                initialDate={''}
                hours={0}
              />
            </div>
          </div>
        </S.FunctionContainer>
      </S.ContentDiv>
    </S.Container>
  );
}
