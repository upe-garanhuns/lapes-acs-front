import styled from 'styled-components';

interface TotalBarProps {
  width: string;
  color: string;
}

interface colorType {
  color: string;
}

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 20;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const MinhasHorasString = styled.span`
  display: inline-block;
  margin-right: 5%;

  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 25px;
  white-space: nowrap;
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const Bar = styled.p<colorType>`
  display: inline-block;
  margin-right: 10%;
  border-bottom: 4px solid;
  color: ${(props) => props.color};
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  white-space: nowrap;
  font-size: 15px;
  border-radius: 3px 3px 3px 3px;
  @media screen and (max-width: 767px) {
    width: 50%;
    padding: 0.2em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const TotalBarComponent = styled.div`
  margin: 5px;
  border-radius: 25px;
  background: #d9d9d9;
  padding: 0.5em;
  width: 75vw;
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const TotalHoursDatas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const TotalString = styled.p``;

export const TotalBarLine = styled.span``;

export const TotalBarBackgroundColor = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 20px;
  border-radius: 10px;
  display: flex;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

export const TotalBar = styled.div<TotalBarProps>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  border-radius: 10px 0 0 10px;
`;
