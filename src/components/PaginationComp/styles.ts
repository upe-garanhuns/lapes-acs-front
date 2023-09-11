import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import styled from 'styled-components';

export const LeftArrow = styled(CaretCircleLeft)`
  cursor: pointer;
`;
export const RightArrow = styled(CaretCircleRight)`
  cursor: pointer;
`;

export const PaginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  width: 105px;
  max-width: 105px;
`;

export const CurrentPageNumber = styled.div``;
export const PageNumber = styled.p`
  font-size: 1em;
  color: #5555ff;
`;
export const Div = styled.div``;
