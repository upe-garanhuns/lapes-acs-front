import { Input } from '../../../../components/Input';

import styled from 'styled-components';

interface colorType {
  color: string;
  background: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const InfoDiv = styled.div``;

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

export const SubTitle = styled.p``;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
`;

export const InputDiv = styled.div``;

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

export const ReCAPTCHADiv = styled.div``;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Button = styled.button<colorType>`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: 1px solid #1c3c78;
  border-radius: 10px;
  padding: 0.5em;
`;
