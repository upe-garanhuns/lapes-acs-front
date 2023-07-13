'use client';
import React, { useState } from 'react';

import {
  ConfirmRequestProps,
  ConfirmationContent
} from '../ConfirmationContent';
import { Pagination } from '../ConfirmationRequestPagination';
import * as S from './styles';

export function ConfirmationPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const mockData: ConfirmRequestProps[] = [
    {
      id: 1,
      title: 'Certificado de Conclusão de Curso',
      educationAxis: 'Ciências da Computação',
      activity: 'Desenvolvimento Web',
      initialDate: new Date('02-01-2024'),
      finalDate: new Date('3-2-2023'),
      hours: 40
    },
    {
      id: 2,
      title: 'Certificado de Participação',
      educationAxis: 'Engenharia Civil',
      activity: 'Projeto de Estruturas',
      initialDate: new Date('2022-03-15'),
      finalDate: new Date('2022-04-15'),
      hours: 60
    },
    {
      id: 3,
      title: 'Certificado de Conclusão de Curso',
      educationAxis: 'Administração de Empresas',
      activity: 'Gestão de Projetos',
      initialDate: new Date('2022-06-01'),
      finalDate: new Date('2022-07-01'),
      hours: 80
    },
    {
      id: 3,
      title: 'Certificado de Conclusão de Curso',
      educationAxis: 'Administração de Empresas',
      activity: 'Gestão de Projetos',
      initialDate: new Date('2022-06-01'),
      finalDate: new Date('2022-07-01'),
      hours: 80
    }
  ];

  const pageSize = 1;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedItems = mockData.slice(startIndex, endIndex);
  const requestId = displayedItems[0].id;

  return (
    <div>
      <S.StepConfirmation>Etapa 3 de 3 - Confirmação</S.StepConfirmation>
      <S.Title> Confirmação de envio da Solicitação: {requestId}</S.Title>
      <S.Centered>
        <Pagination
          onPageChange={handlePageChange}
          totalCount={mockData.length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </S.Centered>
      {displayedItems.map((item, index) => (
        <ConfirmationContent key={index} {...item} />
      ))}
    </div>
  );
}
