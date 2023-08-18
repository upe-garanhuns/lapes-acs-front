import { ActiveLink } from '../ActiveLink';
import { Input } from '../Input';

import styled from 'styled-components';

interface navOpen {
  isOpen: boolean;
  isMobile: boolean;
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
  top: 14vw
    ${({ isOpen }) =>
      isOpen &&
      ` box-shadow: 0 25px 50px 12px rgb(0 0 0 / 0.25); 
    `};

  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Line = styled.hr<navOpen>`
  border: none;
  border-top: 1px solid #fff;
  width: 100%;
`;

export const Div = styled.div``;

export const UlDiv = styled.div<navOpen>`
  display: flex;

  @media screen and (max-width: 767px) {
    ${({ isOpen }) =>
      !isOpen &&
      ` display: none; 
    `};
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

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

export const PerfilDivInside = styled.div<navOpen>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 12px;

  @media screen and (max-width: 767px) {
    ${({ isOpen }) =>
      isOpen &&
      `
      align-items:center; 
    `};
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const ItemsCounter = styled.p`
  font-weight: 100;
  font-size: 14px;
`;

export const UlItems = styled.ul`
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const LiItems = styled.li`
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
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

export const LogOutDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const UserInformation = styled.p`
  width: 100px;
  word-wrap: break-word;
`;

export const UserInfoDiv = styled.div`
  padding: 0.2em;
  display: flex;
  flex-direction: column;
  gap: 4;
`;
