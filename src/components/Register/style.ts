import Button from '../Button';
import { Input } from '../Input';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const BlueBarContainer = styled.div`
  background: #253555;
  width: 20px;
  border-radius: 4px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  width: 100%;
  margin-left: 32px;
  margin-right: 32px;
`;

export const Div = styled.div``;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #253555;
  width: 100%;
`;

export const RegisterTitle = styled.p<{ $principal?: boolean }>`
  color: #253451;
  font-size: ${(props) => (props.$principal ? '30px' : '25px')};
  font-weight: bold;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const InputDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 10px;
`;

export const InsideDiv = styled.div<{ $col?: string }>`
  grid-column: ${(props) => props.$col || 'auto'};
`;

export const RegisterInput = styled(Input)``;

export const RegisterButton = styled(Button)`
  background: #253555;
  color: #fff;
  border-radius: 45px;
  width: 250px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;
