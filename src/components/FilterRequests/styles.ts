import styled from 'styled-components';
interface FilterOptionProps {
  backgroundColor?: string;
}
export const FilterContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  transition: 0.3s;
  position: relative;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
export const DivisionLine = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
  margin: 10px 0;
`;
export const FilterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #1c3c78;
`;

export const FilterOption = styled.button<FilterOptionProps>`
  background-color: ${(props) => props.backgroundColor || '#ec2026'};
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 16px;
  color: #fff;
  transition: 0.3s;
  border-radius: 999px;
  margin: 0.3rem;
  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.2);
  }
`;
