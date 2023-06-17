import Link from 'next/link';

import { colors } from '../../styles/colors';

import styled from 'styled-components';

export const Anchor = styled(Link)<{ isCurrentPath: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.blueGrey[900]};
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: ${(props) => (props.isCurrentPath ? 'underline' : 'none')};
  text-decoration-color: ${colors.red.logo};
  text-decoration-thickness: 2px;

  &:hover {
    filter: brightness(1.7);
    transition: 0.2s;
  }
`;
