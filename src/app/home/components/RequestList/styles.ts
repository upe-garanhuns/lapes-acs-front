import { Modal } from '../../../../components/Modal';
import { colors } from '../../../../styles/colors';

import styled from 'styled-components';

export const Card = styled.div<{ cardcolor: string }>`
  display: grid;
  grid-template-columns: 0.1fr 0.5fr 1fr 0.5fr 0.5fr 70px;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ cardcolor }) =>
    cardcolor === 'RASCUNHO'
      ? colors.figmaColors[50]
      : colors.figmaColors[100]};
  border-radius: 20px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 7px;
  box-shadow: 0px 9px 15px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: 850px) {
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

export const NewRequestModal = styled(Modal)`
  border-radius: 24px;
`;

export const Text = styled.p`
  margin-bottom: 3px;
  margin-top: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
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
