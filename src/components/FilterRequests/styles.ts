import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FilterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FilterOption = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 16px;
  margin: 5px 0;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;
