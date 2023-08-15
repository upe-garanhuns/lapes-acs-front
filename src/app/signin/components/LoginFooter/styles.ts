import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  background-color: #1a2d57;
  justify-content: space-between;
  padding: 4rem 2rem;
  align-items: center;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  color: white;
  width: 30rem;
  font-weight: 300;
  font-size: 13px;
`;
