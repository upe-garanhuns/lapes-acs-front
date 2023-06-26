import React from 'react';

import * as S from './styles';

import { Trash, Eye, NotePencil, Note } from '@phosphor-icons/react';
import { styled } from 'styled-components';

type ComponentProps = {
  status: string;
  isDraft: boolean;
  label: string;
  initialDate: string;
  hours: number;
};

export const Solicitacao: React.FC<ComponentProps> = ({
  status,
  isDraft,
  label,
  initialDate,
  hours
}) => {
  return (
    <div>
      <S.Container>
        <S.Card cardColor={isDraft}>
          <NotePencil size={24} style={{ marginLeft: '10px' }} />
          <S.Content>
            <S.Title>Status</S.Title>
            <S.Text>{status}</S.Text>
          </S.Content>
          <S.Content>
            <S.Title>Label:</S.Title>
            <S.Text>{label}</S.Text>
          </S.Content>
          <S.Content>
            <S.Title>Data da solicitação</S.Title>
            <S.Text>{initialDate}</S.Text>
          </S.Content>
          <S.Content>
            <S.Title>Quantidade de horas:</S.Title>
            <S.Text>{hours} horas</S.Text>
          </S.Content>
          <Eye size={24} style={{ marginRight: '10px' }} />
          <Trash size={24} style={{ marginRight: '10px' }} />
        </S.Card>
      </S.Container>
    </div>
  );
};
