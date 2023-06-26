import { colors } from '../../styles/colors';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div<{ cardColor: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${({ cardColor }) =>
    cardColor ? colors.figmaColors[50] : colors.figmaColors[100]};
  border-radius: 20px;
  margin-bottom: 18px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
  width: 100px;
`;
export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 3px;
  margin-top: 3px;
  font-size: 13px;
`;

export const Text = styled.p`
  margin-bottom: 3px;
  margin-top: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
`;
