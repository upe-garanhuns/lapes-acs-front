import Button from '../../../../components/Button';

import styled from 'styled-components';

export const Container = styled.div`
  background: #d9d9d9;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Content = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;

export const Title = styled.p`
  color: #253555;
  font-size: 1rem;
  font-weight: bold;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #253555;
  width: 100%;
`;
export const ListDiv = styled.div``;

export const CertificateSelect = styled.div`
  background: #253555;
  padding: 0.8em;
  border-radius: 20px;
  font-size: 0.7em;
  margin: 0.8em;
  width: 90%;
  cursor: pointer;
`;
export const Label = styled.p`
  color: #fff;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Printer = styled(Button)`
  background: #476aad;
  color: #fff;
  padding: 0.8em;
  border-radius: 20px;
  font-size: 0.7em;
  margin: 0.8em;
  width: 90%;
`;

export const Back = styled(Button)`
  background: #f5f5f5;
  color: #1c3c78;
  padding: 0.8em;
  border-radius: 20px;
  font-size: 0.7em;
  width: 90%;
  margin: 0.8em;
`;
