import Button from '../../components/Button';
import { Input } from '../../components/Input';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vw;
  gap: 16px;
  background: #f1efef;
`;

export const NavDiv = styled.div``;

export const ContentDiv = styled.div`
  width: 100%;
  margin-left: 100px;
  margin-right: 40px;
`;

export const TitleDiv = styled.div`
  width: 100%;
`;

export const Div = styled.div``;
export const Text = styled.p``;

export const H2Title = styled.h2``;

export const UserName = styled.h1`
  color: #1c3c78;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
`;

export const FunctionContainer = styled.div`
  background: #fff;
  padding: 12px;
  border-radius: 12px;
`;

export const RequestDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.span`
  background: #d9d9d9;
  width: max-content;
  color: #1c3c78;
  padding: 4px 8px 4px 8px;
  border-radius: 12px;
  align-items: center;
  box-shadow: 0 2px 2px 3px rgb(180 180 180 / 0.75);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  width: 250px;
  height: 40px;
  font-size: 16px;
`;

export const RegisterInput = styled(Input)`
  border-radius: 20px;
  background: #d9d9d9;
  height: 40px;
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.15);
  padding: 0px 10px;
  &::placeholder {
    font-size: 16px;
    color: #544d4f;
    padding-left: 5px;
    margin-top: 5px;
  }
`;
