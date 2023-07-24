import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f1efef;
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: rown;
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

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  margin-top: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: #253555;
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
  width: 170px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const SaveButton = styled.button`
  color: #fff;
  background-color: #264382;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

export const ViewButton = styled.button`
  color: #ffffff;
  background-color: #b9b9b9;
  font-size: 14px;
  border-radius: 20px;
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
  background-color: #d9d9d9;
`;

export const CertificateItem = styled.div`
  background-color: #253555;
  color: #ffffff;
  border-radius: 20px;
  padding: 8px;
  margin-bottom: 10px;
  max-width: 300px;
`;
