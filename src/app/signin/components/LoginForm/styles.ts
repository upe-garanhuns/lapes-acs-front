import { Modal } from '../../../../components/Modal';

import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
  width: 360px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
`;

export const PasswordRecovery = styled.button`
  font-weight: 300;
  font-size: 12px;
`;

export const SignUp = styled.button`
  font-weight: 700;
  font-size: 12px;
`;

export const ModalContainer = styled(Modal)`
  border-top-left-radius: 4px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 4px;
  height: 90%;
  overflow: auto;
`;

export const ModalPassContainer = styled(Modal)`
  border-radius: 12px;
  height: 40%;
  overflow: auto;
`;
