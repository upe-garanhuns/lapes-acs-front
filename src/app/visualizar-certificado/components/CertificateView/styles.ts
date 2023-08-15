import Button from '../../../../components/Button';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0px 8px 0px;
`;

export const DataDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const RequestDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const RequestId = styled.p`
  color: #1c3c78;
  font-size: 1rem;
`;

export const ButtonDiv = styled.div`
  width: 50%;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
`;

export const DownloadCertificate = styled(Button)`
  background: #283d69;
  color: #fff;
  padding: 0.8em;
  border-radius: 20px;
  font-size: 0.7em;
`;

export const ViewCertificate = styled(Button)`
  background: #b9b9b9;
  color: #fff;
  padding: 0.8em;
  border-radius: 20px;
  font-size: 0.7em;
`;
