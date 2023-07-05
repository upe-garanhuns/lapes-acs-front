import { Input } from '../Input';

import styled from 'styled-components';

interface navOpen {
  isOpen: boolean;
}

export const Container = styled.aside<navOpen>`
  width: max-content;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 16px;
  margin: 4px 4px 4px 4px;
  background: linear-gradient(135deg, rgba(37, 53, 85, 0.75) 50%, #253555 100%);
  color: #fff;
  backdrop-filter: blur(8px);
  padding: 20px;
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
  height: 160px;
`;

export const PerfilDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  margin: 4px 0px;
  padding: 6px;
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

export const NavInput = styled(Input)`
    background = red;
`;

export const navBarLink = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`;

export const PLink = styled.p`
  margin: 0px;
`;
