//import OtpInput from 'react-otp-input';

import styled from 'styled-components';

export const Container = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Cima = styled.div`
  gap: 2rem;
  align-items: left;
  width: 80%;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #253451;
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #000;
  margin: 30px 0 30px 0;
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Paragraph = styled.p`
  font-size: 15pt;
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
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

// export const OtpInputs = styled(OtpInput)`
//   display: flex;
//   flex-direction: column;
// `;
