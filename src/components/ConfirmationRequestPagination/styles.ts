import { colors } from '../../styles/colors';

import { styled } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
  font-size: 12px;
  width: 80%;
  max-width: 600px;
`;

export const Arrow = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Page = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7px;
  min-width: 10rem;
  height: 1.6rem;
  background-color: ${({ isSelected }) => (isSelected ? '#4B629C' : '#B9B9B9')};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
`;
export const PagesBackground = styled.div`
  display: flex;
  border-radius: 15px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey[300]};
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.grey[400]};
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.grey[100]};
    border-radius: 15px;
  }
`;
export const CertificateName = styled.h4`
  color: black;
`;
