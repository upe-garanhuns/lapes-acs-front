import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-left: 110px;
  background-color: #d9d9d9;
  color: #1c3c78;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
  width: 151px;
  height: 33px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const FileInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const FileInputLabel = styled.label`
  font-size: 14px;
  color: #4a4747;
  background-color: #d9d9d9;
  border-radius: 15px;
  flex-direction: column;
  gap: 20px;
  width: 544px;
  height: 227px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileListContainer = styled.div`
  max-height: 150px;
  overflow-y: auto;
  margin-bottom: 10px;
`;

export const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const FileItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #264382;
  color: #fff;
  border-radius: 20px;
  height: 40px;
  gap: 10px;
`;

export const FileName = styled.span`
  font-size: 14px;
  margin-right: 5px;
  padding: 5px 10px;
`;

export const FileRemoveButton = styled.button`
  color: #fff;
  padding: 2px 8px;
  border: none;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CancelButton = styled.button`
  color: #253555;
  background-color: #ffffff;
  width: 156px;
  font-size: 16px;
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
  width: 156px;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;
