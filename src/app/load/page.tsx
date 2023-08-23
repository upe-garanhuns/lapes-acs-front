'use client';

import * as S from './styles';

export default function Load() {
  return (
    <S.Container>
      <S.Div>
        <S.Message>Carregando conteudo</S.Message>
      </S.Div>
      <S.Div>
        <S.Ball1 />
        <S.Ball2 />
        <S.Ball3 />
      </S.Div>
    </S.Container>
  );
}
