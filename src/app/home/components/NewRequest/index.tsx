'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import { errorToast } from '../../../../functions/errorToast';
import { sucessToast } from '../../../../functions/sucessToast';
import { deleteCertificate } from '../../../../services/deleteCertificate';
import { newCertificate } from '../../../../services/newCertificate';
import { getRequest } from '../../../../services/request';
import { Certificate } from '../../../../services/request/types';
import * as S from './style';

import { XCircle, FileText, FilePlus } from '@phosphor-icons/react';

type ComponentProps = {
  cancelRequest: () => void;
  requestId: number | undefined;
  token: string;
  isNewRequest: boolean;
};

export const NewRequest = ({
  cancelRequest,
  requestId,
  token,
  isNewRequest
}: ComponentProps) => {
  const [certificateData, setCertificateData] = useState<Certificate[]>([]);
  const router = useRouter();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const certifacatesId = [];

  const request = useCallback(async () => {
    try {
      const requestResponse = await getRequest(requestId, token);
      setCertificateData(requestResponse.certificados ?? []);
    } catch (error) {
      errorToast('Ocorreu um erro! Tente novamente mais tarde');
    }
  }, [requestId, token]);

  useEffect(() => {
    if (!isNewRequest) {
      request();
    }
  }, [isNewRequest, request, requestId, token]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileRegex = /^.+\.pdf$/;
    const mb = 1048576; //1mb

    const files = event.target.files;
    if (files) {
      console.log(files);
      for (let index = 0; index < files.length; index++) {
        if (fileRegex.test(files[index].name)) {
          if (files[index].size < mb) {
            setUploadedFiles((prevFiles) => [...prevFiles, files[index]]);
          } else {
            errorToast('Só é possível enviar arquivos com menos de 1mb');
          }
        } else {
          errorToast('Só é possível enviar PDF');
        }
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleDeleteCertificate = async (certificateId: number | undefined) => {
    try {
      if (certificateId != undefined) {
        await deleteCertificate(certificateId, token);
        sucessToast('Certificado deletado com sucesso!');
        request();
      }
    } catch (error) {
      errorToast('Ocorreu um erro ao deletar o certificado!');
    }
  };

  const handleNext = () => {
    if (uploadedFiles.length > 0 || certificateData.length > 0) {
      try {
        if (requestId != undefined) {
          fetchCertificate(token, requestId);
          router.push(`/registrar-certificado/${requestId}`);
        }
      } catch (error) {
        errorToast('Ocorreu um erro ao cadastrar os certificados!');
      }
    } else {
      errorToast('Insira um arquivo!');
    }
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
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    const fileRegex = /^.+\.pdf$/;
    const maxFileSize = 1048576;

    if (files) {
      console.log(files);
      for (let index = 0; index < files.length; index++) {
        if (fileRegex.test(files[index].name)) {
          if (files[index].size < maxFileSize) {
            setUploadedFiles((prevFiles) => [...prevFiles, files[index]]);
          } else {
            errorToast('Só é possível enviar arquivos com menos de 1mb');
          }
        } else {
          errorToast('Só é possível enviar PDF');
        }
      }
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
          {certificateData.map((certificate) => (
            <S.FileItem key={certificate.id}>
              <S.FileName>{`Certificado ${certificate.id}.pdf`}</S.FileName>
              <S.FileRemoveButton>
                <XCircle
                  color="#FF0000"
                  size={20}
                  onClick={() => handleDeleteCertificate(certificate.id)}
                />
              </S.FileRemoveButton>
            </S.FileItem>
          ))}
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
