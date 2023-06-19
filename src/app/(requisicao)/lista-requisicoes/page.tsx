'use client';

import { useRouter } from 'next/navigation';

import Button from '../../../components/Button';
import Table from '../../../components/Table';
import * as S from './styles';

import { Pencil, PlusCircle, Trash } from '@phosphor-icons/react';

export default async function TablePage() {
  const router = useRouter();
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const result = await data.json();

  const onClickAddButton = () => {
    router.push('/adicionar-requisicao');
  };

  return (
    <S.Container>
      <Table
        addButton={
          <S.ButtonAddReq
            startAdornment={<PlusCircle size={24} />}
            onClick={() => onClickAddButton()}
            label="Requisição"
          />
        }
        data={result}
        options={
          <>
            <Button startAdornment={<Pencil />} />
            <Button startAdornment={<Trash />} />
          </>
        }
      />
    </S.Container>
  );
}
