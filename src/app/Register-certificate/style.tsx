import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 4px;
`;

export const Select = styled.select`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SaveButton = styled.button`
  color: #fff;
  background-color: #253555;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

export const ViewButton = styled.button`
  color: #253555;
  background-color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

export const CertificatesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

export const CertificateItem = styled.div`
  background-color: #d9d9d9;
  color: #1c3c78;
  border-radius: 4px;
  padding: 8px;
  margin-right: 10px;
`;
