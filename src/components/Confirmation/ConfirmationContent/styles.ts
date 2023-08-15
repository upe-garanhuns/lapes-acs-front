import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.8rem;
  padding-top: 1.1rem;
  width: 55vw;
  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 100%;
  }
`;

export const Certificates = styled.div`
  background-color: #d9d9d9;
  width: 80%;
  height: 2rem;
  border-radius: 0.9375rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const DetailsName = styled.div`
  display: flex;
  flex-direction: column;
  color: #253555;
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 0.625rem;
`;

export const Details = styled.div`
  color: rgba(84, 77, 79, 0.85);
  font-size: 1rem;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1rem;
  width: 80%;
  @media (max-width: 768px) {
    display: block;
    width: 90%;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
export const Div3 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
export const Div4 = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;
export const Div5 = styled.div`
  grid-area: 2 / 3 / 3 / 5;
`;
export const Div6 = styled.div`
  grid-area: 3 / 1 / 4 / 3;
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
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 826px) {
    flex-direction: column-reverse;
  }
`;
