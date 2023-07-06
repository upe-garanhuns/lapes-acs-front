import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 16px;
  background: #f1efef;
`;

export const NavDiv = styled.div``;

export const ContentDiv = styled.div`
  width: 100%;
  margin-left: 100px;
  margin-right: 40px;
`;

export const TitleDiv = styled.div`
  width: 100%;
`;

export const UserName = styled.h1`
  color: #1c3c78;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #1c3c78;
  width: 100%;
`;

export const FunctionContainer = styled.div`
  background: #fff;
  padding: 12px;
  border-radius: 12px;
`;

export const RequestDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BaremaButton = styled.span`
  background: #d9d9d9;
  width: max-content;
  color: #1c3c78;
  padding: 4px 8px 4px 8px;
  border-radius: 12px;
  align-items: center;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
