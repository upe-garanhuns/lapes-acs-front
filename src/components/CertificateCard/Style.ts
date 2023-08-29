import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  border-radius: 12px;
  gap: 15;
  background: #ededed;
  border: 1px solid #000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const TextContent = styled.p``;
