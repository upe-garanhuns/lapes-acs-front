import { colors } from '../../../styles/colors';
import { Modal } from '../../Modal';

import styled from 'styled-components';
export const ModalContainer = styled(Modal)`
  border-radius: 15px;
  height: 100vh;
  overflow: auto;
  width: 100vw;
  padding: 5rem;
  justify-content: center;
  display: flex;
  background-color: #e4e4e4;
  border: #253555 1px solid;
`;

export const OpenRequest = styled.button`
  cursor: pointer;
  --icon-color: ${colors.figmaColors[200]};

  svg {
    color: var(--icon-color);
  }
`;
