import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
`;
export const RequestTitle = styled.h1`
  color: #253451;
  margin-bottom: 0px;
  margin-top: 10px;
  text-align: center;
  font-size: 1.8em;
  @media (max-width: 370px) {
    font-size: 1.5em;
  }
  @media (max-width: 300px) {
    font-size: 1.3em;
  }
`;
export const CertificateTitle = styled(RequestTitle)`
  font-size: 1.5em;
  @media (max-width: 370px) {
    font-size: 1.2;
  }
  @media (max-width: 300px) {
    font-size: 1em;
  }
`;

export const Division = styled.hr`
  border-color: #1c3c78;
  border-style: solid;
  height: 1px;
  width: 95%;
  border-radius: 5px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-column-gap: 10vw;
  max-width: 650px;
  @media (max-width: 600px){
    grid-column-gap: 5vw;
  }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  @media (max-width: 480px) {
    justify-content: flex-end;
    width: 35vw;
  }
`;
export const Description = styled.p`
  color: #253555;
  margin-bottom: 0px;
  margin-top: 10px;
  margin-left: 15px;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

type CircleProps = {
  status: string;
};
export const StatusCircle = styled.div<CircleProps>`
  width: 20px;
  height: 20px;
  align-content: center;
  margin-right: 11px;
  margin-left: 5px;
  display: flex;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.status) {
      case 'Aceito':
        return 'green';
      case 'Negado':
        return 'red';
      case 'Em andamento':
        return 'yellow';
      default:
        return 'gray';
    }
  }};
`;
export const Status = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  color: #544d4f;
  flex-wrap: wrap;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #d9d9d9;
  box-shadow: 0px 6px 7px -3px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
`;
export const RequestDate = styled(Status)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const HoursAmount = styled(Status)`
  display: flex;
  flex-direction: row;
  width: 80px;
  justify-content: center;
  padding-left: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

export const HoursName = styled.div`
  margin-left: 10px;
`;

export const RowAligner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CoordObservation = styled(Status)`
  padding: 10px;
  align-content: flex-start;
  width: 80vw;
  max-width: 650px;
  height: fit-content;
  min-height: 40px;
  max-height: 100px;
  overflow-y: auto;
  word-break: break-all;
  white-space: pre-wrap;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

export const PageSelection = styled.div`
  margin-bottom: 10px;
  padding-botton: 10px;
`;
