import { colors } from '../../styles/colors';

import styled from 'styled-components';

export const Input = styled.input`
  height: 100%;
  width: 100%;
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
  padding: 6px 5px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus-within {
    border-color: ${colors.blue[200]};

    ${Adornment} {
      color: ${colors.blue[200]};
    }
  }
`;
