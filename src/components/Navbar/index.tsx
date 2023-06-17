'use client';

import { usePathname } from 'next/navigation';

import * as S from './styles';

import { User } from '@phosphor-icons/react';

export default function Navbar() {
  const pathName = usePathname();

  if (pathName === '/registrar' || pathName === '/') return null;
  return (
    <S.Container>
      <S.LogoLapes>
        <S.LogoTitle>
          LAPES <S.LogoSpan>ACEs</S.LogoSpan>
        </S.LogoTitle>
        <S.LogoTypeUser>Discente</S.LogoTypeUser>
      </S.LogoLapes>
      <S.Menu>
        <S.Link href="/axios">inicio</S.Link>
        <S.Link href="/table">requisições</S.Link>
        <S.Link href="/dashboard">dashboard</S.Link>
        <S.Link href="/ajuda">ajuda</S.Link>
        <S.MenuPerfil>
          <User />
        </S.MenuPerfil>
      </S.Menu>
    </S.Container>
  );
}
