import { Modal } from '../../../../../components/Modal';
import { colors } from '../../../../../styles/colors';

import styled from 'styled-components';

export const NewRequestModal = styled(Modal)`
  border-radius: 24px;
`;
export const OpenRequest = styled.button`
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
