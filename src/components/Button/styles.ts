import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }
`;
