import { Input } from '../../components/Input';

import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5em;
  font-style: normal;
  font-weight: 700;
  align-self: start;
`;

export const InputRequestDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  align-self: flex-end;
  margin-bottom: 10px;
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

export const Empty = styled.div``;

export const TitleDiv = styled.div`
  width: 100%;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
`;

export const UserName = styled.h1`
  color: #1c3c78;
`;
