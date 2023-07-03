import { useEffect, useState } from 'react';

import { Input } from '../Input';
import * as S from './style';

import {
  UserCircle,
  MagnifyingGlass,
  EnvelopeSimple,
  CalendarBlank,
  Bell,
  Trash,
  Cube,
  Sun,
  Moon,
  Power
} from '@phosphor-icons/react';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [screen, setScreen] = useState<boolean>(false);

  const openCloseNav = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    console.log(isOpen);
  };

  const dayNightScreen = () => {
    if (screen == false) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  return (
    <S.Container screen={screen} isOpen={isOpen}>
      <S.PerfilDiv>
        {!isOpen ? (
          <S.PerfilDivInside>
            <p onClick={openCloseNav}>
              <UserCircle size={32} weight="bold" />
            </p>
          </S.PerfilDivInside>
        ) : (
          <S.PerfilDivInside>
            <p onClick={openCloseNav}>
              <UserCircle size={32} weight="bold" />
            </p>
            <S.Div>
              <p>Nome Aluno</p>
              <p>curso upe</p>
            </S.Div>
          </S.PerfilDivInside>
        )}
      </S.PerfilDiv>
      <S.Line screen={screen} isOpen={isOpen} />
      <S.Div>
        <S.ItemsCounter>Menu:</S.ItemsCounter>
        <S.UlItems id="ul1">
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <MagnifyingGlass size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <MagnifyingGlass size={24} />
                <S.NavInput placeholder="buscar" />
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <CalendarBlank size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <CalendarBlank size={24} />
                <p>calendario</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <EnvelopeSimple size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <EnvelopeSimple size={24} />
                <p>requisicoes</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Bell size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Bell size={24} />
                <p>notificacoes</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Trash size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Trash size={24} />
                <p>lixeira</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.Div>
      <S.Line screen={screen} isOpen={isOpen} />
      <S.Div>
        <S.ItemsCounter>Serviços:</S.ItemsCounter>
        <S.UlItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Cube size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Cube size={24} />
                <p>notificacoes</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Cube size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Cube size={24} />
                <p>notificacoes</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Cube size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Cube size={24} />
                <p>notificacoes</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.Div>
      <S.Line screen={screen} isOpen={isOpen} />
      <S.Div>
        <S.UlItems>
          <S.LiItems>
            <S.LiInsideDiv
              isOpen={isOpen}
              screen={screen}
              onClick={dayNightScreen}
            >
              {!screen ? <Sun size={24} /> : <Moon size={24} />}
            </S.LiInsideDiv>
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Power size={24} color="#ff0000" />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen} screen={screen}>
                <Power size={24} color="#ff0000" />
                <p>Sair</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.Div>
    </S.Container>
  );
}
