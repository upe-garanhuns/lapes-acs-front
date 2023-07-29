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
export const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const CancelConfirmButton = styled.button<{ buttonColor: boolean }>`
  font-size: 0.875rem;
  background-color: ${({ buttonColor }) => (buttonColor ? '#253555' : '#fff')};
  color: ${({ buttonColor }) => (buttonColor ? '#fff' : '#253555')};
  border-radius: 1.25rem;
  height: 2.5rem;
  width: 10rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  line-height: 1.5rem;
  font-style: normal;
  transition: transform 0.3s ease-in-out;
  margin: 0.5rem;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Buttons = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 826px) {
    flex-direction: column-reverse;
  }
`;
