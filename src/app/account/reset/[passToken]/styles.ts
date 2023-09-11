import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  width: 100vw;
  height: 84vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;

    justify-items: center;
  }
`;
