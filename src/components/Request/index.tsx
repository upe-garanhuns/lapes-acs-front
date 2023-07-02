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
      setUploadedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleNext = () => {
    // Lógica para avançar para a próxima etapa
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
              <S.FileItem key={index}>
                <S.FileName>{file.name}</S.FileName>
                <S.FileRemoveButton onClick={() => handleRemoveFile(index)}>
                  x
                </S.FileRemoveButton>
              </S.FileItem>
            ))}
          </S.FileList>
          <S.ButtonsContainer>
            <S.CancelButton onClick={handleCancel}>Cancelar</S.CancelButton>
            <S.NextButton onClick={handleNext}>Próximo</S.NextButton>
          </S.ButtonsContainer>
        </S.Container>
      </S.Overlay>
    );
  }

  return null;
};

export default Modal;
