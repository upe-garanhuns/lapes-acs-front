import { LoginInput } from '../../../LoginInput/index';

import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;
export const Title = styled.h1`
    font-size: 30px;
    color: #253555;
    font-weight: 700;
    margin-left: 20px;
  }
`;

export const Message = styled.h2`
  font-size: 25px;
  color: #253555;
  font-weight: 400;
  text-align: center;
  margin: 2rem;
  margin-top: 2rem;
`;

export const EmailInput = styled(LoginInput)`
  height: 2.5rem;
  padding-top: 5px
  width: 100%;
  border-radius: 45px;
  background: #ebeced;
  &::placeholder {
    color: #8e8a8a;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const SendCodeButton = styled.button`
  height: 3.75rem;
  width: 35%;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  margin: 2rem;
  margin-top: 5rem;
  border-radius: 45px;
  background: #22385e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
`;
export const ErrorSpan = styled.span`
  color: red;
  font-size: 12px;
  padding-left: 15px;
`;
