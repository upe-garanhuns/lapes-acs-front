import { colors } from '../../../../styles/colors';

import styled from 'styled-components';

export const Card = styled.div<{ cardcolor: boolean }>`
  display: grid;
  grid-template-columns: auto 0.5fr minmax(200px, 1.5fr) 0.5fr 0.5fr auto;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ cardcolor }) =>
    cardcolor ? colors.figmaColors[50] : colors.figmaColors[100]};
  border-radius: 20px;
  margin: 20px;
  padding: 7px;

  @media (max-width: 715px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(1, minmax(150px, 1fr));
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
export const ActionIcon = styled.span`
  margin-right: 5px;

  cursor: pointer;
  --icon-color: ${colors.figmaColors[200]};

  svg {
    color: var(--icon-color);
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.4);
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export const StatusIcon = styled.div`
  margin-left: 5px;
  margin-right: 10px;
`;
