import { colors } from '../../styles/colors';

import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: ${colors.grey[400]};
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
  padding: 6px 5px;

  background-color: ${colors.grey[100]};
  border: 1px solid ${colors.grey[400]};
  border-radius: 8px;

  &:focus-within {
    border-color: ${colors.blue[200]};
    outline: 1px solid ${colors.blue[100]};

    ${Adornment} {
      color: ${colors.blue[200]};
    }
  }
`;
