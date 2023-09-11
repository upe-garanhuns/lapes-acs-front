import { Input } from '../../../../../components/Input';

import styled from 'styled-components';

type ButtonProps = {
  isCancel: boolean;
};

export const Container = styled.div`
  padding: 1rem;
`;
export const Title = styled.h1`
  font-size: 30px;
  color: #253555;
  font-weight: 700;
  margin-left: 20px;
`;

export const Message = styled.h2`
  font-size: 25px;
  color: #253555;
  font-weight: 400;
  text-align: center;
  margin: 2rem;
  margin-top: 2rem;
`;

export const CodeInput = styled.input`
  height: 4rem;
  padding-top: 5px;
  width: 30%;
  border-radius: 45px;
  background: #ebeced;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  text-align: center;
  &::placeholder {
    font-size: 30px;
  }
`;
export const Button = styled.button<ButtonProps>`
  height: 3.75rem;
  width: 25%;
  color: ${(props) => (props.isCancel ? '#22385e' : '#ebeced')};
  font-weight: 700;
  font-size: 18px;
  margin: 2rem;
  margin-top: 5rem;
  border-radius: 45px;
  background-color: ${(props) => (props.isCancel ? '#ebeced' : '#22385e')};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const SendAgainButton = styled(Button)`
  margin-top: 0px;
  background-color: #f1efef;
  color: #22385e;
  width: 25%;
`;
export const Division = styled.hr`
  border-color: #1c3c78;
  border-style: solid;
  height: 1px;
  width: 90%;
  border-radius: 5px;
`;
export const Centered = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const ErrorSpan = styled.span`
  color: red;
  font-size: 12px;
  padding-left: 15px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputDiv = styled.div`
  width: 50%;
`;

export const InputRequest = styled(Input)`
  padding: 1em;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  color: #1c3c78;
  &:focus {
    border: 1px solid #1c3c78;
  }
  &::placeholder {
    color: #d9d9d9;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8em;
  padding: 0.5em;
`;
