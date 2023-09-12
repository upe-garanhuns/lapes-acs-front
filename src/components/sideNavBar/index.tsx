'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getUserInformation } from '../../services/user';
import { UserInformation } from '../../services/user/types';
import * as S from './style';

import { User, Power, Archive, House, Question } from '@phosphor-icons/react';
import Cookies from 'js-cookie';

export default function SideNavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInformation>();
  // const [isEditProfileModalOpen, setIsEditProfileModalOpen] =
  //   useState<boolean>(false);

  const token = Cookies.get('token') || '';

  useEffect(() => {
    const userInfo = async () => {
      const userResponse = await getUserInformation(token);
      setUserInfo(userResponse);
    };
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    checkIsMobile();
    if (pathName !== '/signin') {
      userInfo();
    }

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [token, pathName]);

  const recoverPasswordRegex = /\/account\/reset\/(.+)/;

  if (
    pathName === '/signin' ||
    pathName === '/not-found' ||
    pathName === '/confirmacao-cadastro' ||
    recoverPasswordRegex.test(pathName)
  )
    return null;

  const openCloseNav = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  // const handleOpenEditProfileModal = () => {
  //   setIsEditProfileModalOpen(true);
  // };

  // const handleCloseEditProfileModal = () => {
  //   setIsEditProfileModalOpen(false);
  // };

  function handleLogOut() {
    Cookies.remove('token');
    setIsOpen(false);
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
    <S.Container isOpen={isOpen} ref={componentRef} isMobile={isMobile}>
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
                    <S.navBarLink href="/home">
                      <House size={24} />
                    </S.navBarLink>
                  </S.LiInsideDiv>
                )}
              </>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <S.navBarLink href="/home">
                  <House size={24} />
                  <S.PLink>Home</S.PLink>
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
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <>
                  {!isMobile && (
                    <S.navBarLink href="/perfil-usuario">
                      <User size={24} />
                    </S.navBarLink>
                  )}
                </>
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <S.navBarLink href="/perfil-usuario">
                  <User size={24} />
                  <S.PLink>Editar Perfil</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <>
                  {!isMobile && (
                    <S.navBarLink href="/duvidas-frequentes">
                      <Question size={24} />
                    </S.navBarLink>
                  )}
                </>
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} isMobile={isMobile}>
                <S.navBarLink href="/duvidas-frequentes">
                  <Question size={24} />
                  <S.PLink>Dúvidas</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
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
