'use client';

import SideNavBar from '../../components/sideNavBar';
import * as S from './style';

export default function navbar() {
  return (
    <S.Container>
      <S.NavDiv>
        <SideNavBar />
      </S.NavDiv>
      <S.ContentDiv>
        <h1>Tela de usuario</h1>
        <h1>Tela de usuario</h1>
        <h1>Tela de usuario</h1>
        <h1>Tela de usuario</h1>
      </S.ContentDiv>
    </S.Container>
  );
}
