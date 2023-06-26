import Button from '../Button';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 1067px;
  height: max-content;
`;

export const BlueBarContainer = styled.div`
  background: #253555;
  width: 20px;
  border-radius: 4px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 32px;
  margin-right: 32px;
`;

export const Div = styled.div``;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #253555;
  margin: 20px 0;
  width: 100%;
`;

export const RegisterTitle = styled.p<{ $principal?: boolean }>`
  color: #253451;
  font-size: ${(props) => (props.$principal ? '30px' : '25px')};
  font-weight: bold;
`;

export const RegisterButton = styled(Button)`
  background: #253555;
  color: #fff;
  border-radius: 45px;
  width: 250px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
