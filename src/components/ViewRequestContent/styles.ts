import styled from 'styled-components';

export const Title = styled.h1`
  color: #253451;
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
  grid-column-gap: 5vw;
  max-width: 650px;
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
export const Status = styled.div`
  display: flex;
  align-content: center;
  color: #544d4f;
  flex-wrap: wrap;
  width: 30vw;
  max-width: 250px;
  height: 40px;
  border-radius: 20px;
  background-color: #d9d9d9;
  box-shadow: 0px 6px 7px -3px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
`;
export const RequestDate = styled(Status)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  padding-left: 5px;
`;
export const HoursAmount = styled(Status)`
  width: 80px;
  justify-content: center;
  padding-left: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const CoordObservation = styled(Status)`
  padding: 10px;
  align-content: flex-start;
  width: 80vw;
  max-width: 650px;
  height: 100px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
