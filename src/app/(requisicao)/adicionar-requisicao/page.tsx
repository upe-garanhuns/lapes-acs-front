'use client';

import * as S from './styles';

import { FilePdf } from '@phosphor-icons/react';

export default function Page() {
  return (
    <S.Container>
      <S.Section>
        <S.DragDropContainer>Insira os arquivos aqui</S.DragDropContainer>
        <S.CertificadoContainer>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
          <S.CertificadoItem>
            <FilePdf size={32} />
            <S.CertificadoItemTitle>nomecertificado.pdf</S.CertificadoItemTitle>
          </S.CertificadoItem>
        </S.CertificadoContainer>
        <S.ButtonContainer></S.ButtonContainer>
      </S.Section>
    </S.Container>
  );
}
