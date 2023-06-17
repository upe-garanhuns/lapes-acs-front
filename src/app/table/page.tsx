'use client';

import Button from '../../components/Button';
import Table from '../../components/Table';

import { Pencil, Trash } from '@phosphor-icons/react';

export default async function TablePage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const result = await data.json();

  // console.log(result);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <Table
        data={result}
        options={
          <>
            <Button startAdornment={<Pencil />} />
            <Button startAdornment={<Trash />} />
          </>
        }
      />
    </div>
  );
}
