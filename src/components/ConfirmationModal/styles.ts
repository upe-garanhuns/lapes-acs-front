import { colors } from '../../styles/colors';
import { Modal } from '../Modal';

import styled from 'styled-components';
export const ModalContainer = styled(Modal)`
  border-radius: 0.9375rem;
  height: 80vh;
  overflow: auto;
  width: 75vw;
  justify-content: center;
  display: flex;
  background-color: #e4e4e4;
  border: #253555 0.0625rem solid;
  @media (max-width: 426px) {
    width: 90vw;
  }
`;

export const OpenRequest = styled.button`
  font-size: 0.875rem;
  background-color: #253555;
  border-radius: 1.25rem;
  height: 2.5rem;
  width: 10rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: 400;
  line-height: 1.5rem;
  font-style: normal;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
