import * as React from 'react';

import * as S from './styles'; // Importe seus estilos

interface FilterRequestsProps {
  isOpen: boolean;
  onFilterClick: (eixo: string) => void;
}

const FilterRequests: React.FC<FilterRequestsProps> = ({
  isOpen,
  onFilterClick
}) => {
  const handleFilterClick = (eixo: string) => {
    onFilterClick(eixo);
  };

  return isOpen ? (
    <S.FilterContainer>
      <S.FilterTitle>Filtro</S.FilterTitle>
      <S.FilterOption onClick={() => handleFilterClick('Extensão')}>
        Extensão
      </S.FilterOption>
      <S.FilterOption onClick={() => handleFilterClick('Pesquisa')}>
        Pesquisa
      </S.FilterOption>
      <S.FilterOption onClick={() => handleFilterClick('Ensino')}>
        Ensino
      </S.FilterOption>
      <S.FilterOption onClick={() => handleFilterClick('Gestão')}>
        Gestão
      </S.FilterOption>
    </S.FilterContainer>
  ) : null;
};

export default FilterRequests;
