import { colors } from '../../../styles/colors';
import { Modal } from '../../Modal';

import styled from 'styled-components';
export const ModalContainer = styled(Modal)`
  border-radius: 15px;
  overflow: auto;
  width: fit-content;
  padding-top: 15px;
  justify-content: center;
  display: flex;
  background-color: #e4e4e4;
  border: #253555 1px solid;
  @media (max-width: 426px) {
    width: 90vw;
  }
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
