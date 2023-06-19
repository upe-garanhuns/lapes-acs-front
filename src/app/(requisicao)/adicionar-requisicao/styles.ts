import { colors } from '../../../styles/colors';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  padding: 0.3rem 0.5rem;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  height: 70vh;
`;

export const DragDropContainer = styled.div`
  padding: 2rem 12rem;
  background-color: #c44d56;
  border: 2px dashed ${colors.black};
  border-radius: 1.2rem;
  color: ${colors.white};
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const CertificadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 60%;
  overflow: scroll;
  margin: 1rem;
`;

export const CertificadoItem = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blueGrey[200]};
  color: ${colors.blueGrey[900]};
  margin-bottom: 0.5rem;
  border-radius: 0.6rem;
  padding: 0.4rem;
`;

export const CertificadoItemTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button``;
