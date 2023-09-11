import Button from '../../../../components/Button';

import styled from 'styled-components';
interface CertificateSelectProps {
  selected: boolean;
}

export const Container = styled.div`
  padding-top: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;
  min-width: 11.5rem;
  overflow-y: auto;
  background-color: #d9d9d9;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleDiv = styled.div`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;

export const Title = styled.p`
  color: #253555;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #253555;
  width: 100%;
`;
export const ListDiv = styled.div``;

export const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CertificateSelect = styled.div<CertificateSelectProps>`
  background-color: ${(props) => (props.selected ? '#e74c3c' : '#253555')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
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
