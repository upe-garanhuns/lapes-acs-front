import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const Container = styled.div<{ width?: number; height?: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  ${({ width }) => width && `width: ${width}px`};
  ${({ height }) => height && `height: ${height}px`};
  transform: translate(-50%, -50%);
  padding: 2px;
  background-color: #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
`;
