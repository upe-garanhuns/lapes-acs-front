import * as S from './styles';

import { FileText } from '@phosphor-icons/react';

export const Barema = () => {
  return (
    <S.BaremaLink href={'http://www.upe.br/garanhuns/Barema'}>
      <FileText size={24} weight="bold" />
      <S.Text>Barema</S.Text>
    </S.BaremaLink>
  );
};
