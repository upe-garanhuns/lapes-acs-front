'use client';

import React, { useState } from 'react';

import { CertificateList, ComponentProps } from '../CertificateList';
import { Pagination } from '../Pagination';
import * as S from './styles';

export type ViewRequestProps = {
  id?: number;
  name?: string;
  date?: string;
  status?: string;
  note?: string;
  hours?: number;
};

export default function ViewRequestContent(props: ViewRequestProps) {
  const { name, date, status, note, hours } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const certificateListData: ComponentProps[] = [
    {
      status: 'Aceito',
      activity: 'Palestra',
      educationAxis: 'Pesquisa',
      hours: 2
    },
    {
      status: 'Em Andamento',
      activity: 'Curso',
      educationAxis: 'Ensino',
      hours: 4
    },
    {
      status: 'Negado',
      activity: 'Monitoria',
      educationAxis: 'Extensão',
      hours: 6
    },
    {
      status: 'Aceito',
      activity: 'Palestra',
      educationAxis: 'Ensino',
      hours: 3
    },
    {
      status: 'Em Andamento',
      activity: 'Curso',
      educationAxis: 'Extensão',
      hours: 5
    },
    {
      status: 'Negado',
      activity: 'Monitoria',
      educationAxis: 'Pesquisa',
      hours: 4
    },
    {
      status: 'Aceito',
      activity: 'Palestra',
      educationAxis: 'Extensão',
      hours: 2
    },
    {
      status: 'Em Andamento',
      activity: 'Curso',
      educationAxis: 'Pesquisa',
      hours: 6
    },
    {
      status: 'Negado',
      activity: 'Monitoria',
      educationAxis: 'Ensino',
      hours: 8
    },
    {
      status: 'Aceito',
      activity: 'Palestra',
      educationAxis: 'Pesquisa',
      hours: 1
    }
  ];
  const pageSize = 3;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedItems = certificateListData.slice(startIndex, endIndex);
  return (
    <div>
      <S.Title>{name}Solicitação XXX</S.Title>
      <S.Division />
      <S.GridContainer>
        <S.Content>
          <S.Description>Status: </S.Description>
          <S.Status>
            <S.StatusCircle status={'Aceito'}></S.StatusCircle>
            {status}
          </S.Status>
        </S.Content>
        <S.Content>
          <S.Description>Data da Solicitação:</S.Description>
          <S.RequestDate>{date}</S.RequestDate>
        </S.Content>
        <S.Content>
          <S.Description>Quantidade de horas:</S.Description>
          <S.RowAligner>
            <S.HoursAmount>{hours}</S.HoursAmount>
            <S.HoursName>hora(s)</S.HoursName>
          </S.RowAligner>
        </S.Content>
      </S.GridContainer>
      <S.Description>Observações do Coordenador:</S.Description>
      <S.CoordObservation>
        {note}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        gravida mi in convallis
      </S.CoordObservation>
      <S.Title>Certificados:</S.Title>
      <S.Division />
      {displayedItems.map((item, index) => (
        <CertificateList key={index} {...item} />
      ))}
      <Pagination
        onPageChange={handlePageChange}
        totalCount={certificateListData.length}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </div>
  );
}
