import { ActiveLink } from '../../components/ActiveLink';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: #f1efef;
`;

export const Content = styled.div`
  width: 90%;
  margin-left: 100px;
`;
export const TitleDiv = styled.div`
  width: 100%;
`;
export const Title = styled.h1`
  color: #1c3c78;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
`;

export const FilterDiv = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputRequestDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
`;

export const RequestDiv = styled.div``;

export const BackButton = styled(Button)`
  background: '#fff';
  color: '#1C3C78';
  height: 5.5vh;
  width: 10vw;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.15);
  padding: 0 0.5em;
  border-radius: 20px;
  font-size: 1em;
  font-weight: bold;
`;

export const BackDiv = styled.div``;
