import { Input } from '../../Input';

import styled from 'styled-components';
export const Container = styled.div`
  padding: 2rem;
  margin-right: 3rem;
`;
export const Row = styled.div`
  flex-direction: row;
`;
export const Title = styled.h1``;
export const Subtitle = styled.h2``;
export const PersonaldataContainer = styled.div``;
export const Adresscontainer = styled.div``;
export const GridPersonalData = styled.div``;
export const GridAdress = styled.div``;
export const InputContainer = styled.div``;
export const InputName = styled.h3``;
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
