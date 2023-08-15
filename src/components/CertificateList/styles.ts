import { colors } from '../../styles/colors';

import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 100%)) 1.5fr auto;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.figmaColors[100]};
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  padding-left: 20px;
  align-items: center;

  @media (max-width: 680px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;
export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 3px;
  margin-top: 3px;
  font-size: 12px;
`;

export const Text = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
`;
export const ActionIcon = styled.span`
  margin-right: 10px;
  cursor: pointer;
  --icon-color: ${colors.figmaColors[200]};

  svg {
    color: var(--icon-color);
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-right: 10px;
  justify-content: flex-end;
  @media (max-width: 680px) {
    justify-content: flex-start;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.4);
  }
`;
