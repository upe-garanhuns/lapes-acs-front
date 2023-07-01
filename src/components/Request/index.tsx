import React, { useState } from 'react';

import * as S from './styles';

type ComponentProps = {
  width?: number;
  height?: number;
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
};

export const Modal = ({
  width,
  height,
  isOpen,
  closeModal,
  className
}: ComponentProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadedFiles(Array.from(files));
    }
  };

  if (isOpen) {
    return (
      <S.Overlay>
        <S.Container width={width} height={height} className={className}>
          <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
          <S.Title>Etapa 1 de 2 - Anexar certificados</S.Title>
          <S.Subtitle>Barema</S.Subtitle>
          <S.FileInput type="file" onChange={handleFileUpload} multiple />
          <S.FileList>
            {uploadedFiles.map((file, index) => (
              <S.FileName key={index}>{file.name}</S.FileName>
            ))}
          </S.FileList>
        </S.Container>
      </S.Overlay>
    );
  }

  return null;
};
