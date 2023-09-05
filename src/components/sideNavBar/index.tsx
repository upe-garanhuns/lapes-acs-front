'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getUserInformation } from '../../services/user';
import { UserInformation } from '../../services/user/types';
import * as S from './style';

import { User, Bell, Power, Archive } from '@phosphor-icons/react';
import Cookies from 'js-cookie';

export default function SideNavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInformation>();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState<boolean>(false);


  const token = Cookies.get('token') || '';

  useEffect(() => {
    const userInfo = async () => {
      const userResponse = await getUserInformation(token);
      setUserInfo(userResponse);
      console.log(userResponse);
    };
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    checkIsMobile();
    userInfo();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [token]);

  if (
    pathName === '/signin' ||
    pathName === '/not-found' ||
    pathName === '/confirmacao-cadastro'
  )
    return null;

  const openCloseNav = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
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
    <S.Container isOpen={isOpen} isMobile={isMobile}>
      <S.PerfilDiv>
        {!isOpen ? (
          <S.PerfilDivInside isOpen={isOpen} isMobile={isMobile}>
            <S.PerfilIcon onClick={openCloseNav}>
              <User size={24} weight="bold" color="#000" />
            </S.PerfilIcon>
          </S.PerfilDivInside>
        ) : (
          <S.PerfilDivInside isOpen={isOpen} isMobile={isMobile}>
            <S.PerfilIcon onClick={openCloseNav}>
              <User size={32} weight="bold" color="#000" />
            </S.PerfilIcon>
            {!isMobile && (
              <S.Div>
                {userInfo && (
                  <S.UserInfoDiv>
                    <S.UserInformation>
                      {userInfo.nomeCompleto.split(' ')[0]}
                    </S.UserInformation>
                    <S.UserInformation>{userInfo.curso.nome}</S.UserInformation>
                  </S.UserInfoDiv>
                )}
              </S.Div>
            )}
          </S.PerfilDivInside>
        )}
      </S.PerfilDiv>
      {!isMobile && <S.Line isOpen={isOpen} isMobile={isMobile} />}
      <S.UlDiv isOpen={isOpen} isMobile={!isMobile}>
        <S.UlItems id="ul1">
          <S.LiItems>
            {!isOpen ? (
              <>
                {!isMobile && (
                  <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                    <Bell size={24} />
                  </S.LiInsideDiv>
                )}
              </>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <S.navBarLink href="/">
                  <Bell size={24} />
                  <S.PLink>notificação</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <>
                  {!isMobile && (
                    <S.navBarLink href="/solicitacoes-arquivadas">
                      <Archive size={24} />
                    </S.navBarLink>
                  )}
                </>
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <S.navBarLink href="/solicitacoes-arquivadas">
                  <Archive size={24} />
                  <S.PLink>Arquivadas</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
            <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
              <S.navBarLink href="/perfil-usuario">
                <User size={24} />
                <S.PLink>Editar Perfil</S.PLink>
              </S.navBarLink>
            </S.LiInsideDiv>
          </S.LiItems>
        </S.UlItems>
      </S.UlDiv>
      <>
        {!isMobile && (
          <S.BlankDiv>
            <S.UlItems>
              <S.LiItems></S.LiItems>
            </S.UlItems>
          </S.BlankDiv>
        )}
      </>

      {!isMobile && <S.Line isOpen={isOpen} isMobile={isMobile} />}
      <S.LogOutDiv>
        <S.UlItems>
          <S.LiItems>
            {!isOpen ? (
              <>
                {!isMobile && (
                  <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                    <Power size={24} onClick={handleLogOut} />
                  </S.LiInsideDiv>
                )}
              </>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <Power size={24} onClick={handleLogOut} />
                <p>Sair</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.LogOutDiv>
    </S.Container>
  );
}
