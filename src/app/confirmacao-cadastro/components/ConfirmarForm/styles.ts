import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Cima = styled.div`
  gap: 2rem;
  align-items: left;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: #000;
`;

export const Paragraph = styled.p`
  font-size: 1.32w;
`;

export const ButtonEnviar = styled.button`
  background-color: #fff;
  color: #253555;
  border-radius: 20px;
  padding: 8px 16px;
`;

export const Input = styled.input`
  max-width: 100px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #ccc;
  padding: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const CancelButton = styled.button`
  color: #253555;
  background-color: #ffffff;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

export const ConfirmButton = styled.button`
  color: #ffffff;
  background-color: #253555;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
