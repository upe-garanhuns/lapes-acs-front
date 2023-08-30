import { Modal } from '../../Modal';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalContainer = styled(Modal)`
  width: 80vw;
  height: 80vh;
  border-radius: 0.9375rem;
  overflow: auto;
  justify-content: center;
  display: flex;
  background-color: #e4e4e4;
  border: #253555 0.0625rem solid;
  margin-top: 0;
  @media (max-width: 880px) {
    width: 90vw;
    height: 90vh;
    max-height: 980px;
  }
`;

export const OpenRequest = styled.button`
  font-size: 0.875rem;
  background-color: #253555;
  border-radius: 1.25rem;
  padding: 8px 16px;
  min-width: 9.375rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: 400;
  font-style: normal;
`;
