import { Input } from '../Input';

import styled from 'styled-components';

interface navOpen {
  isOpen: boolean;
  screen: boolean;
}

export const Container = styled.aside<navOpen>`
  width: max-content;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 10px;
  border-radius: 16px;
  margin: 8px;
  position: fixed;

  ${({ isOpen }) => isOpen && `box-shadow: 0 25px 50px 12px rgb(0 0 0 / 0.25);`}

  ${({ screen }) => screen && `background:#253555; color:#fff;`}
`;

export const Line = styled.hr<navOpen>`
  border: none;
  border-top: 1px solid #253555;
  width: 100%;

  ${({ screen }) => screen && `border-top: 1px solid #fff;`}
`;

export const Div = styled.div``;

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
    margin: 2px 6px 2px 2px;
    padding: 0px 2px;

   
    
  `}

  &:hover {
    background: #f1f2f6;
    ${({ isOpen }) => isOpen && `background: rgba(223, 228, 234,0.5);`}
  }
`;

export const NavInput = styled(Input)`
    background = red;
`;
