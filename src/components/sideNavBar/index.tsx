'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './style';

import { User, Bell, Trash, Power, Archive } from '@phosphor-icons/react';
import Cookies from 'js-cookie';

export default function SideNavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (pathName === '/signin' || pathName === '/not-found') return null;

  const openCloseNav = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  function handleLogOut() {
    Cookies.remove('token');
    toast.error('Sua sessão expirou!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });
    router.push('/signin');
  }

  return (
    <S.Container isOpen={isOpen}>
      <S.PerfilDiv>
        {!isOpen ? (
          <S.PerfilDivInside>
            <S.PerfilIcon onClick={openCloseNav}>
              <User size={24} weight="bold" color="#000" />
            </S.PerfilIcon>
          </S.PerfilDivInside>
        ) : (
          <S.PerfilDivInside>
            <S.PerfilIcon onClick={openCloseNav}>
              <User size={32} weight="bold" color="#000" />
            </S.PerfilIcon>
            <S.Div>
              <p>Nome Aluno</p>
              <p>curso upe</p>
            </S.Div>
          </S.PerfilDivInside>
        )}
      </S.PerfilDiv>
      <S.Line isOpen={isOpen} />
      <S.Div>
        <S.UlItems id="ul1">
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <Bell size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/">
                  <Bell size={24} />
                  <S.PLink>notificação</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/solicitacoes-arquivadas">
                  <Archive size={24} />
                </S.navBarLink>
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/solicitacoes-arquivadas">
                  <Archive size={24} />
                  <S.PLink>Arquivadas</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/">
                  <Trash size={24} />
                </S.navBarLink>
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/">
                  <Trash size={24} />
                  <S.PLink>lixeira</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.Div>

      <S.BlankDiv>
        <S.UlItems>
          <S.LiItems></S.LiItems>
        </S.UlItems>
      </S.BlankDiv>
      <S.Line isOpen={isOpen} />
      <S.Div>
        <S.UlItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <Power size={24} onClick={handleLogOut} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <Power size={24} onClick={handleLogOut} />
                <p>Sair</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.Div>
    </S.Container>
  );
}
