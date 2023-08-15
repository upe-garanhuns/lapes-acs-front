import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  color: #333;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
  }
`;
