import React, { Component } from 'react';

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
  return (
    <div>
      <S.Title>{name}</S.Title>
      <S.Division />
      <S.GridContainer>
        <S.Content>
          <S.Description>Status: </S.Description>
          <S.Status>
            <S.StatusCircle status={status}></S.StatusCircle>
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
      <S.CoordObservation>{note}</S.CoordObservation>
      <S.Title style={{ fontSize: 24 }}>Certificados:</S.Title>
      <S.Division />
      <S.Certification></S.Certification>
      <Pagination
        onPageChange={function (page: number): void {
          throw new Error('Function not implemented.');
        }}
        totalCount={5}
        currentPage={1}
        pageSize={3}
      ></Pagination>
    </div>
  );
}
