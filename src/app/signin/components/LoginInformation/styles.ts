import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 4rem;
  font-size: 1.2vw;
  align-items: center;
  color: white;
  height: 84%;
  width: 100%;
  background-color: #1a2d57;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  gap: 1em;
  @media (max-width: 768px) {
    display: none;
  }
`;
