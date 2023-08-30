import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';

import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background: #f1efef;
  @media screen and (max-width: 767px) {
    height: max-content;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: max-content;
  }
`;

export const NavDiv = styled.div``;

export const ContentDiv = styled.div`
  width: 90%;
  margin-left: 100px;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Div = styled.div``;
export const Text = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const H2Title = styled.h2`
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const H3Title = styled.h3``;

export const UserName = styled.h1`
  color: #1c3c78;
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
`;

export const FunctionContainer = styled.div`
  background: #f3f3f3;
  padding: 2vw;
  border-radius: 12px;
  max-width: 95%;
  margin: 0 auto;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const RequestDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const IconButton = styled.span`
  background: #d9d9d9;
  width: max-content;
  color: #1c3c78;
  padding: 0.3em;
  border-radius: 12px;
  align-items: center;
  box-shadow: 0 2px 2px 3px rgb(180 180 180 / 0.75);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const NewRequestDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputRequestDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const NewRequestButton = styled(Button)`
  background: #1c3c78;
  color: #fff;

  border-radius: 32px;
  width: 15vw;
  height: 6vh;
  font-size: 1em;
  @media screen and (max-width: 767px) {
    font-size: 0.8em;
    width: 20vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const RegisterInput = styled(Input)`
  border-radius: 20px;
  background: #d9d9d9;
  height: 5.5vh;
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.15);
  padding: 0 0.5em;
  &::placeholder {
    font-size: 16px;
    color: #544d4f;
    padding-left: 0.2em;
    margin-top: 0.2em;
  }
  @media screen and (max-width: 767px) {
    width: 30vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const NewRequestModal = styled(Modal)`
  border-radius: 24px;
`;

export const PaginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`;

export const LeftArrow = styled(CaretCircleLeft)`
  cursor: pointer;
`;
export const RightArrow = styled(CaretCircleRight)`
  cursor: pointer;
`;

export const CurrentPageNumber = styled.div``;
export const PageNumber = styled.p`
  font-size: 1em;
  color: #5555ff;
`;

export const VerifyDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
export const VerifyMessage = styled.label`
  color: #e74c3c;
`;
export const VerifyBut = styled.button`
  color: #e74c3c;
  font-size: 1em;
  font-weight: bold;
  text-decoration: underline;
`;
export const SearchInput = styled(Input)`
  border-radius: 30px;
  background: #d9d9d9;
  height: 3rem;
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.15);
  padding: 0 0.5rem;
  &::placeholder {
    font-size: 16px;
    color: #544d4f;
    padding-left: 0.2em;
    margin-top: 0.2em;
  }
`;
