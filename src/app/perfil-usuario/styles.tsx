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
  flex-direction: column;
  height: 235px;
  padding: 15px 0px 15px 0px;
`;

export const FormContainerAddress = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 235px;
  padding: 15px 0px 15px 0px;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 40px;
  color: #1c3c78;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const InputArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 10px;
  max-width: 900px;
  flex-wrap: wrap;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
`;

export const Label = styled.label`
  display: flex;
  font-size: 16px;
  margin-bottom: 30px;
  color: #253555;
  font-weight: bold;
`;

export const LabelMinor = styled.label`
  font-size: 16px;
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
  margin-top: 16px;
  bottom: 80px;
  position: absolute;
  flex-direction: column;
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
  /* Propriedades para fixar o container no lado direito */
  position: fixed;
  right: 0;
  top: 0;
  bottom: 84px;

  /* Estilo do container */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;
  min-width: 11.5rem;
  overflow-y: auto;
  background-color: #d9d9d9;
`;

export const TitleAnexados = styled.h2`
  font-size: 16px;
  color: #253555;
  text-align: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #253555;
  padding-bottom: 8px;
  width: 100%;
`;

export const ContainerCertificates = styled.div`
  padding: 0px 10px;
`;

export const CertificateItem = styled.div`
  display: flex;
  background-color: ${(props) => (props.color ? props.color : '#253555')};
  font-size: 16px;
  text-align: start;
  color: #ffffff;
  border-radius: 20px;
  padding: 8px 12px;
  margin-bottom: 10px;
  max-width: 16rem;
  min-width: 150px;
`;

export const ButtonsContainerCertificates = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  max-width: 300px;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 20px;
`;

export const Button = styled.button`
  color: #253555;
  background-color: #fff;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  min-width: 150px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ButtonEnviar = styled.button`
  color: #fff;
  background-color: #253555;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  min-width: 150px;
  margin-bottom: 20px;
`;

export const EditButton = styled.button`
  color: #fff;
  background-color: #253555;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  min-width: 150px;
  margin-bottom: 20px;
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 10px;
  margin-top: 6px;
  margin-left: 5px;
`;

export const ContainerPdf = styled.div`
  display: flex;
`;
