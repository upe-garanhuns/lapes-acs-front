import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;
`;

export const Title = styled.h2`
  font-size: 14px;
  margin-bottom: 10px;
  color: #1c3c78;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const FileInput = styled.input`
  margin-bottom: 10px;
`;

export const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FileName = styled.li`
  font-size: 14px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  color: #253555;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const NextButton = styled.button`
  color: #ffffff;
  background-color: #253555;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;
