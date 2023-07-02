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

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  if (isOpen) {
    return (
      <S.Overlay>
        <S.Container
          width={width}
          height={height}
          className={className}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
          <S.Title>Etapa 1 de 2 - Anexar certificados</S.Title>
          <S.Subtitle>Barema</S.Subtitle>
          <S.FileInputContainer>
            <S.FileInputLabel htmlFor="selecao-arquivo">
              Arraste aqui o(s) arquivo(s) desejado(s)
            </S.FileInputLabel>
            <S.FileInput
              id="selecao-arquivo"
              type="file"
              onChange={handleFileUpload}
              multiple
            />
          </S.FileInputContainer>
          <S.FileListContainer>
            <S.FileList>
              {uploadedFiles.map((file, index) => (
                <S.FileItem key={index}>
                  <S.FileName>{file.name}</S.FileName>
                  <S.FileRemoveButton onClick={() => handleRemoveFile(index)}>
                    X
                  </S.FileRemoveButton>
                </S.FileItem>
              ))}
            </S.FileList>
          </S.FileListContainer>

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
