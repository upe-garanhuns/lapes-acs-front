import { colors } from '../../styles/colors';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  gap: 1rem;
  padding: 1rem 1rem 0rem 1rem;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(50vh - 10rem);
  background-color: ${colors.grey[50]};
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const TableHead = styled.thead`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${colors.blue.logo};
  border-radius: 0.5rem 0.5rem 0 0;
  color: ${colors.grey[50]};
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 100%;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 4rem;
  border-bottom: 1px solid ${colors.grey[300]};
  padding: 0.2rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeadCell = styled.th`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TableDataCell = styled.td`
  display: flex;
  gap: 3px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0.2rem;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;

  &:only-child {
    height: 20vh;
    align-items: center;
  }
`;

export const SpanCell = styled.span`
  display: inline-block;
  text-align: start;
`;

export const SpanOrder = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Pagination = styled.div``;

export const AnchorPagination = styled.a``;
