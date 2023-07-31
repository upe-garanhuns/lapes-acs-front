import { Modal } from '../../../Modal';

import styled from 'styled-components';
export const ModalContainer = styled(Modal)`
  border-radius: 0.9rem;
  overflow: auto;
  justify-content: center;
  display: flex;
  background-color: #e4e4e4;
  border: #253555 0.0625rem solid;
  height: fit-content;
  &&(max-width:768) {
    width: 70vw;
  }
`;

export const OpenRequest = styled.button`
  }
`;
