import Button from '../../../components/Button';
import { colors } from '../../../styles/colors';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const ButtonAddReq = styled(Button)`
  padding: 0.5rem;
  background-color: ${colors.green[400]};
  gap: 4px;
  color: ${colors.white};
  align-self: flex-end;
  font-weight: 600;
  font-size: 16px;
`;
