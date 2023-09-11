'use client';
import * as React from 'react';
import { useRef } from 'react';

import * as S from './styles'; // Importe seus estilos

interface FilterRequestsProps {
  isOpen: boolean;
  onFilterClick: (eixo: string) => void;
}

const FilterRequests: React.FC<FilterRequestsProps> = ({
  isOpen,
  onFilterClick
}) => {
  const componentRef = useRef(null);

  const handleFilterClick = (eixo: string) => {
    onFilterClick(eixo);
  };

  return isOpen ? (
    <S.FilterContainer ref={componentRef}>
      <S.FilterTitle>Filtros</S.FilterTitle>
      <S.DivisionLine />
      <S.FilterOption
        backgroundColor="#00798C"
        onClick={() => handleFilterClick('GESTAO')}
      >
        Gestão
      </S.FilterOption>
      <S.FilterOption
        backgroundColor="#EC2026"
        onClick={() => handleFilterClick('EXTENSAO')}
      >
        Extensão
      </S.FilterOption>
      <S.FilterOption
        backgroundColor="#004D00"
        onClick={() => handleFilterClick('PESQUISA')}
      >
        Pesquisa
      </S.FilterOption>
      <S.FilterOption
        backgroundColor="#3B0086"
        onClick={() => handleFilterClick('ENSINO')}
      >
        Ensino
      </S.FilterOption>
      <S.FilterOption
        backgroundColor="#FFA500"
        onClick={() => handleFilterClick(null || '')} // Quando "Todos" é clicado limpa o filtro
      >
        Todos
      </S.FilterOption>
    </S.FilterContainer>
  ) : null;
};

export default FilterRequests;
