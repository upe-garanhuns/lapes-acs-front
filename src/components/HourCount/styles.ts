import styled from 'styled-components';

export const Component = styled.div`
  margin: 10px;
  background-color: #F3F3F3;
  border-radius: 8px;
  padding: 10px;
  max-width:90%;
  margin-left:8%;
  
  flex-wrap: nowrap;
  
`;

export const Name = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 32px;
  color: #1C3C78;
`;

export const Hr = styled.hr`
  border: 1px solid #1C3C78;;
  margin: 20px 0;
  color: #1C3C78;
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
  color: #00798C;
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
  color: #EC2026;
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
  color: #D8F793;
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
  color: #3B0086;
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  font-size: 15px;
  white-space: nowrap;
  border-radius: 3px 3px 3px 3px;

`;
export const TotalHoursDatas = styled.div`
display: flex; 
alignItems: center;`;

export const TotalString = styled.p`
margin-left: 40px;
`;

export const TotalBarComponent = styled.div`
  margin: 5px;
  border: 2px solid #D9D9D9;
  border-radius: 25px;
  background: #D9D9D9;
 
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
  min-width: 75%;
  position: absolute;

`;


export const TotalBarBackgroundColor = styled.div`
  background-color: #FFFFFF;
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
  background-color: #00798C;
  width: ${(props) => props.width};
  border-radius: 10px 0 0 10px;
`;

export const TotalBarExt = styled.div<TotalBarProps>`
  background-color: #EC2026;
  width: ${(props) => props.width};
  border-radius: 0px 0 0 0px;
`;

export const TotalBarPes = styled.div<TotalBarProps>`
  background-color: #D8F793;
  width: ${(props) => props.width};
  border-radius: 0px 0 0 0px;
`;

export const TotalBarEns = styled.div<TotalBarProps>`
  background-color: #3B0086;
  width: ${(props) => props.width};
  border-radius: 0px 10px 10px 0px;
`;

