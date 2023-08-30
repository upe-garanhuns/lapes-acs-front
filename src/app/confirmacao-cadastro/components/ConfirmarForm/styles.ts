import styled from 'styled-components';

export const Container = styled.form`
  height: 84%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Cima = styled.div`
  gap: 2rem;
  align-items: left;
  width: 80%;
`;

export const Title = styled.h2`
  font-size: 22pt;
  color: #253451;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #000;
  margin: 30px 0 30px 0;
`;

export const Paragraph = styled.p`
  font-size: 15pt;
`;

export const ButtonEnviar = styled.button`
  background-color: #fff;
  color: #253555;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 30px 0 30px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const OtpInputField = styled.input`
  width: 40px;
  height: 40px;
  font-size: 30px;
  text-align: center;
  margin: 0 5px;
  border: 2px solid #ccc;
  border-radius: 15px;
  outline: none;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
