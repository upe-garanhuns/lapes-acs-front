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
  position: relative; /* Adicionado */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px; /* Posicionado no topo com margem de 10px */
  right: 10px; /* Posicionado à direita com margem de 10px */
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
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
