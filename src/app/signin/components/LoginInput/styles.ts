import { colors } from '../../../../styles/colors';

import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  font-size: 15px;

  &::placeholder {
    color: ${colors.grey[400]};
  }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;

export const Label = styled.label``;

export const Adornment = styled.span`
  font-size: 14px;
  color: ${colors.grey[500]};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 22rem;
  background-color: #ebeced;
  border-radius: 45px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 1rem 1rem;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus-within {
    border-color: ${colors.blue[200]};
    outline: 1px solid ${colors.blue[100]};

    ${Adornment} {
      color: ${colors.blue[200]};
    }
  }
`;
