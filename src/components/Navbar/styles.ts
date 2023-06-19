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
  margin-bottom: 2rem;
`;

export const LogoLapes = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  margin-left: 0.5rem;
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled(ActiveLink)`
  cursor: pointer;

  &:hover {
    color: ${colors.red.logo};
    transition: 0.2s;
  }
`;

export const MenuPerfil = styled.div`
  position: relative;
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

export const Dropdown = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5vh;
  right: 0;
  min-width: 8rem;
  padding: 0.4rem;
  background-color: ${colors.grey[50]};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  border-radius: 0.4rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
`;

export const DropdownItem = styled(ActiveLink)`
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 2px solid ${colors.grey[200]};
  text-transform: capitalize;

  &:last-child {
    border-bottom: none;
    color: ${colors.red.logo};
  }
`;
