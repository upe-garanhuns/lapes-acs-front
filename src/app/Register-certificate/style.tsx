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
`;

export const Title = styled.h2`
  font-size: 14px;
  margin-bottom: 10px;
  color: #1c3c78;
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
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 4px;
  background-color: #d9d9d9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Select = styled.select`
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 4px;
  background-color: #d9d9d9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
  flex-direction: column;
  align-self: flex-end;
  max-width: 500px;
  max-height: 500px;
  overflow-y: auto;
  margin-top: 20px;
  align-items: flex-end;
`;

export const CertificateItem = styled.div`
  background-color: #d9d9d9;
  color: #1c3c78;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
  max-width: 300px;
`;
