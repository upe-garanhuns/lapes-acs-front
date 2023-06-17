import { colors } from '../../styles/colors';
import { ActiveLink } from '../ActiveLink';

import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 5vh;
  align-items: center;
  padding: 0.4rem;
  color: ${colors.white};
`;

export const LogoLapes = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export const LogoTypeUser = styled.span`
  position: absolute;
  top: 20px;
  left: 0px;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${colors.red.logo};
  text-transform: uppercase;
`;

export const LogoTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: ${colors.blueGrey[900]};
  margin: 0;
`;

export const LogoSpan = styled.span`
  color: ${colors.red.logo};
  font-size: 0.7rem;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled(ActiveLink)``;

export const MenuPerfil = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  background-color: ${colors.blueGrey[100]};
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    background-color: ${colors.blueGrey[200]};
    transition: 0.2s;
  }

  &:active {
    background-color: ${colors.blueGrey[300]};
    transition: 0.2s;
  }
`;
