'use client';

import { RequestList } from '../../components/RequestList';
import SideNavBar from '../../components/sideNavBar';
import * as S from './style';

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
        <div>
          <div>
            <p>Componente minhas horas</p>
          </div>
          <div>
            <div>
              <h2>Solicitacoes em andamento</h2>
              <p>Barema</p>
            </div>
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
        </div>
      </S.ContentDiv>
    </S.Container>
  );
}
