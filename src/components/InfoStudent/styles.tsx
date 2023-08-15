import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
`;

export const Container = styled.div`
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  width: 280px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const Name = styled.h2`
  font-size: 20px;

  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

export const HorizontalLine = styled.hr`
  border-top: 2px solid #1c3c78;
`;

export const InfoText = styled.p`
  font-size: 15px;
  font-weight: regular;
  text-align: center;
  padding: 5px;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  border: none;

  cursor: pointer;

  & > svg {
    font-size: 20px;

    color: #253555;
  }
`;
