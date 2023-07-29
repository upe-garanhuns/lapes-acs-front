'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { newCertificate } from '../../../../services/newCertificate';
import * as S from './style';

import { XCircle, FileText, FilePlus } from '@phosphor-icons/react';

type ComponentProps = {
  cancelRequest: () => void;
  requestId: number;
  token: string;
};

export const NewRequest = ({
  cancelRequest,
  requestId,
  token
}: ComponentProps) => {
  const router = useRouter();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const certifacatesId = [];

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

  const handleNext = () => {
    // Lógica para avançar para a próxima etapa
    fetchCertificate(token, requestId);
    router.push('/Register-certificate');
  };

  const fetchCertificate = async (userToken: string, id: number) => {
    for (let index = 0; index < uploadedFiles.length; index++) {
      const addCertificate = await newCertificate(
        userToken,
        id,
        uploadedFiles[index]
      );
      certifacatesId.push(addCertificate);
    }
    localStorage.setItem('requestId', String(requestId));
    console.log(uploadedFiles);
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

  return (
    <S.Container onDragOver={handleDragOver} onDrop={handleDrop}>
      <S.Title>Etapa 1 de 3 - Anexar certificados</S.Title>
      <S.Subtitle>
        <FileText
          size={24}
          color="#1C3C78
            "
        />
        Barema
      </S.Subtitle>
      <S.FileInputContainer>
        <S.FileInputLabel htmlFor="selecao-arquivo">
          Arraste aqui o(s) arquivo(s) desejado(s)
          <FilePlus size={41} color="#4A4747" />
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
                <XCircle color="#FF0000" size={20} />
              </S.FileRemoveButton>
            </S.FileItem>
          ))}
        </S.FileList>
      </S.FileListContainer>

      <S.ButtonsContainer>
        <S.CancelButton onClick={cancelRequest}>Cancelar</S.CancelButton>
        <S.NextButton onClick={handleNext}>Próximo</S.NextButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};
