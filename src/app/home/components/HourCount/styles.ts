import styled from 'styled-components';

export const Component = styled.div`
  border-radius: 8px;
  padding: 10px;

  flex-wrap: nowrap;
`;

export const Name = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 32px;
  color: #1c3c78;
`;

export const Hr = styled.hr`
  border: 1px solid #1c3c78;
  margin: 20px 0;
  color: #1c3c78;
`;

export const SubComponent = styled.div`
  text-align: match-parent;
`;

export const MinhasHorasString = styled.span`
  display: inline-block;
  margin-right: 5%;

  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 25px;
  white-space: nowrap;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const GesBar = styled.p`
  display: inline-block;
  margin-right: 10%;
  border-bottom: 4px solid;
  color: #00798c;
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  white-space: nowrap;
  font-size: 15px;
  border-radius: 3px 3px 3px 3px;
`;

export const ExtBar = styled.p`
  display: inline-block;
  margin-right: 10%;
  border-bottom: 4px solid;
  color: #ec2026;
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  font-size: 15px;
  white-space: nowrap;
  border-radius: 3px 3px 3px 3px;
`;

export const PesBar = styled.p`
  display: inline-block;
  margin-right: 10%;
  border-bottom: 4px solid;
  color: #d8f793;
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  font-size: 15px;
  white-space: nowrap;
  border-radius: 3px 3px 3px 3px;
`;

export const EnsBar = styled.p`
  display: inline-block;
  margin-right: 10%;
  border-bottom: 4px solid;
  color: #3b0086;
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  font-size: 15px;
  white-space: nowrap;
  border-radius: 3px 3px 3px 3px;
`;
export const TotalHoursDatas = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalString = styled.p`
  margin-left: 40px;
`;

export const TotalBarComponent = styled.div`
  margin: 5px;
  border: 2px solid #d9d9d9;
  border-radius: 25px;
  background: #d9d9d9;
`;

export const TotalBarBorde = styled.p`
  border: 0px;
  margin-left: 4%;
  margin-right: 0%;
  margin-bottom: 0px;
  border-top: 25px solid;
  max-height: 50%;
  display: flex;
  align-items: center;
`;

export const TotalBarLine = styled.span`
  margin-left: 75%;
`;

export const TotalBarBackgroundColor = styled.div`
  background-color: #ffffff;
  height: 20px;
  border-radius: 10px;
  display: flex;
  margin-bottom: 15px;
  max-width: 95%;
  margin-left: 35px;
`;

interface TotalBarProps {
  width: string;
}

export const TotalBarGes = styled.div<TotalBarProps>`
  background-color: #00798c;
  width: ${(props) => props.width};
  border-radius: 10px 0 0 10px;
`;

export const TotalBarExt = styled.div<TotalBarProps>`
  background-color: #ec2026;
  width: ${(props) => props.width};
  border-radius: 0px 0 0 0px;
`;

export const TotalBarPes = styled.div<TotalBarProps>`
  background-color: #d8f793;
  width: ${(props) => props.width};
  border-radius: 0px 0 0 0px;
`;

export const TotalBarEns = styled.div<TotalBarProps>`
  background-color: #3b0086;
  width: ${(props) => props.width};
  border-radius: 0px 10px 10px 0px;
`;
