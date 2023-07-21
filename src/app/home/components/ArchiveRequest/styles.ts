import styled from 'styled-components';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

export const PopUpContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #EEEDED;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #253555;
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  font-size: 12px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;

`;

export const CloseButton = styled.button`
padding: 10px;
border-radius: 15px;
background-color: white;
margin: 0 10px;
padding-left:30px;
padding-right:30px;
color: #253555;
font-family: 'Montserrat', sans-serif;
font-weight: regular;
box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
`;

export const ArchiveButton = styled.button`
padding: 10px;
border-radius: 15px;
background-color: #253555;
margin: 0 10px;
padding-left:30px;
padding-right:30px;
color:white;
font-family: 'Montserrat', sans-serif;
font-weight: regular;
box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
`;


export const CloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #EEEDED;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 12px;
    background-color: red;
    border-radius:2px
}
  
&:before {
    transform: rotate(45deg);
}
  
&:after {
    transform: rotate(-45deg);
}
`;
