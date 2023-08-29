import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 84px;
  background-color: #1a2d57;
  border-top: 10px solid #f00;
  padding: 7px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;
export const ImageContainer = styled.div`
  padding: 10px 0;
`;
export const BoldParagraph = styled.p`
  color: #fff;
  text-align: right;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const Paragraph = styled(BoldParagraph)`
  font-weight: 400;
`;
