import { ActiveLink } from '../ActiveLink';
import { Input } from '../Input';

import styled from 'styled-components';

interface navOpen {
  isOpen: boolean;
}

export const Container = styled.aside<navOpen>`
  width: max-content;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 16px;
  margin: 0.3rem;
  background: linear-gradient(135deg, rgba(37, 53, 85, 0.75) 50%, #253555 100%);
  color: #fff;
  backdrop-filter: blur(8px);
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  position: absolute;

  ${({ isOpen }) =>
    isOpen &&
    ` box-shadow: 0 25px 50px 12px rgb(0 0 0 / 0.25); 
    `};
`;

export const Line = styled.hr<navOpen>`
  border: none;
  border-top: 1px solid #fff;
  width: 100%;
`;

export const Div = styled.div``;

export const BlankDiv = styled.div`
  height: 20vh;
`;

export const PerfilDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PerfilIcon = styled.span`
  background: #fff;
  width: max-content;
  height: max-content;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
`;

export const PerfilDivInside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 12px;
`;

export const ItemsCounter = styled.p`
  font-weight: 100;
  font-size: 14px;
`;

export const UlItems = styled.ul`
  width: 100%;
  justify-content: center;
`;

export const LiItems = styled.li`
  width: 100%;
`;

export const LiInsideDiv = styled.div<navOpen>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.3em 0;
  padding: 0.4rem;
  border-radius: 32px;

  ${({ isOpen }) =>
    isOpen &&
    `
    justify-content:flex-start; 
    width: max-content;
  `}

  &:hover {
    background: rgba(223, 228, 234, 0.5);
  }
`;

export const NavInput = styled(Input)``;

export const navBarLink = styled(ActiveLink)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-transform: lowercase;
`;

export const PLink = styled.p`
  margin: 0;
`;
