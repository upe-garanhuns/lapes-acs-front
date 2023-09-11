import styled from 'styled-components';

export const CertificateList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  border-radius: 12px;
  gap: 25;
  background: #ededed;
  border: 1px solid #000;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column; /* Altere para coluna em dispositivos móveis */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  margin-bottom: 10px; /* Espaçamento inferior entre os elementos */
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const TextContent = styled.p``;
