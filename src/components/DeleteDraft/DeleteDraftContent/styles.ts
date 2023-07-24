import styled from 'styled-components';
export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 3.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;
export const Message = styled.h2`
  color: #000;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CancelDeletion = styled.button`
  padding: 10px;
  width: 10rem;
  height: 2.5rem;
  border-radius: 15px;
  background-color: #fff;
  color: #253555;
  font-weight: Bold;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0.6rem;
`;

export const Warning = styled.h4`
  color: red;
  text-align: center;
`;
