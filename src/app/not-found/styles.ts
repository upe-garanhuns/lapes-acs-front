import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding-left: 0;
  margin-left: 0;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px;
  background-color: #d9d9d9;
  width: 40rem;
  height: 25rem;
  padding: 45px;
  text-align: center;
  gap: 2rem;

  @media (max-width: 890px) {
    width: 30rem;
  }

  @media (max-width: 650px) {
    width: 16.5rem;
    height: 30rem;
  }
`;

export const ErrorTitle = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 55px;
  line-height: 15px;

  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

export const ErrorSubTitle = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  font-size: 30px;
  line-height: normal;

  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ErrorButton = styled.button`
  background-color: #ebebec;
  border-radius: 10px;
  color: #253555;
  padding: 8px 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  font-weight: 600;
  margin-top: 3rem;
`;
