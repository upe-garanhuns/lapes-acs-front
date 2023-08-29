import React from 'react';

import * as S from './styles'; // Importe seus estilos

const FilterRequests = ({ isOpen, onFilterClick }) => {
  const handleFilterClick = (eixo) => {
    onFilterClick(eixo);
  };

  return isOpen ? (
    <S.FilterContainer>
      <S.FilterTitle>Filtro</S.FilterTitle>
      <S.FilterOption onClick={() => handleFilterClick('EXTENSAO')}>
        Extensão
      </S.FilterOption>
      <S.FilterOption onClick={() => handleFilterClick('PESQUISA')}>
        Pesquisa
      </S.FilterOption>
      <S.FilterOption onClick={() => handleFilterClick('ENSINO')}>
        Ensino
      </S.FilterOption>
      <S.FilterOption onClick={() => handleFilterClick('GESTAO')}>
        Gestão
      </S.FilterOption>
    </S.FilterContainer>
  ) : null;
};

export default FilterRequests;
