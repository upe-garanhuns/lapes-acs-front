import * as S from './styles';

import { FileText } from '@phosphor-icons/react';

export const Barema = () => {
  return (
    <S.BaremaLink
      target="_blank"
      href={
        'https://www.upe.br/garanhuns/graduacao/cursos-presenciais/bacharelado-em-engenharia-de-software/atividades-complementares-acs/'
      }
    >
      <FileText size={24} weight="bold" />
      <S.Text>Barema</S.Text>
    </S.BaremaLink>
  );
};
