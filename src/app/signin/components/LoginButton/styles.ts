import styled from 'styled-components';

interface ButtonProps {
  padding?: string;
  fontWeight?: string;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: #22385e;
  border-radius: 2.813rem;
  color: #fff;
  cursor: pointer;

  font-size: 0.9rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem 7rem;

  &:hover {
    background-color: #335795;
    transition: 200ms;
  }

  span {
    display: flex;
    align-items: center;
  }
`;
