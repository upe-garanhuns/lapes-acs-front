import Button from '../Button';
import { Pagination } from '../Pagination';

import styled from 'styled-components';
export const StepConfirmation = styled.p`
  color: #1c3c78;
  font-size: 0.875rem;
  margin: 1rem;
`;
export const Title = styled.h2`
  color: #1c3c78;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 3.7rem;
  margin-top: 1.8rem;
  margin-right: 0rem;
  @media (max-width: 1024px) {
    margin-right: 0rem;
    margin-left: 0rem;
    text-align: center;
  }
`;
export const CertificatesPagination = styled(Pagination)`
  ul {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonPagination = styled(Button)`
  background: blue;

  li {
    bac
  }
`;
