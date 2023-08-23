import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
  width: 100vw;
  padding-left: 0;
  margin-left: 0;
  background: #f1efef;
`;

export const Div = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Message = styled.p`
  color: #2980b9;
  font-weight: bold;
  font-size: 1.2em;
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const Ball1 = styled.div`
  background: #2980b9;
  height: 2vh;
  width: 1vw;
  border-radius: 50%;
  animation: ${bounceAnimation} 1s ease-in-out infinite;
  animation-delay: 0s; /* Nenhum atraso na primeira bola */
`;

export const Ball2 = styled.div`
  background: #2980b9;
  height: 2vh;
  width: 1vw;
  border-radius: 50%;
  animation: ${bounceAnimation} 1s ease-in-out infinite;
  animation-delay: 0.2s; /* Começa com 0.2 segundos de atraso */
`;

export const Ball3 = styled.div`
  background: #2980b9;
  height: 2vh;
  width: 1vw;
  border-radius: 50%;
  animation: ${bounceAnimation} 1s ease-in-out infinite;
  animation-delay: 0.4s; /* Começa com 0.4 segundos de atraso */
`;
