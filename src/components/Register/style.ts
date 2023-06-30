import InputMask from 'react-input-mask';

import Button from '../Button';
import { Input } from '../Input';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: max-content;
  background: #eaeaea;
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
  padding: 20px 40px;
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
  width: 100%;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
`;

export const InputDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 10px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const InsideDiv = styled.div<{ $col?: string }>`
  grid-column: ${(props) => props.$col || 'auto'};
  @media screen and (max-width: 767px) {
    grid-column: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-column: ${(props) => props.$col || 'auto'};
  }
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

export const RegisterInputMask = styled(InputMask)`
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

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 7px;
`;

export const RegisterSelect = styled.select`
  border-radius: 20px;
  background: #d9d9d9;
  height: 40px;
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.15);
  padding: 0px 10px;
  border: none;
  color: #544d4f;
`;

export const SelectOption = styled.option``;

export const Label = styled.label``;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0px;
`;

export const RegisterButton = styled(Button)`
  background: #253555;
  color: #fff;
  border-radius: 45px;
  width: 250px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
`;

export const ErroMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 100%;

  margin: 0px 10px;
`;
