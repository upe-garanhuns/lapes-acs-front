import Link from 'next/link';

import styled from 'styled-components';

export const BaremaLink = styled(Link)`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;
