import { colors } from '../../styles/colors';

import { styled } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
  font-size: 12px;
`;

export const Arrow = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Page = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ isSelected }) =>
    isSelected ? colors.grey[50] : colors.blueGrey[100]};
  padding: 0.5rem;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s;
`;
