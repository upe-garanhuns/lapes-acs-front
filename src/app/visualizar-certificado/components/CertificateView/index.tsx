import { useEffect, useState } from 'react';

import { certificateData } from '../../../../services/certificateData';
import { getCertificateInterface } from '../../../../services/certificateData/types';
import { DataText } from './components/DataText';
import * as S from './styles';

import { DownloadSimple, File } from '@phosphor-icons/react';

interface CertificateViewInterface {
  token: string;
}

export const CertificateView = ({ token }: CertificateViewInterface) => {
  const [certificate, setCertificate] = useState<getCertificateInterface>();
  const solicitacaoID = 152;

  useEffect(() => {
    const certificateFetch = async () => {
      try {
        const certificateResponse = await certificateData({
          id: 202,
          token: token
        });
        console.log(certificateResponse);
        setCertificate(certificateResponse);
      } catch (error) {
        console.error('error', error);
      }
    };
    certificateFetch();
  }, [token]);
  return (
    <S.Container>
      <S.RequestDiv>
        <S.RequestId>
          Visualização Detalhada da Solicitação: Id-{solicitacaoID}
        </S.RequestId>
      </S.RequestDiv>
      {certificate && (
        <S.DataDiv>
          <S.DataRow>
            <DataText title={'Titulo:'} content={certificate.titulo} />
            <DataText
              title={'Data inicial:'}
              content={certificate.dataInicial}
            />
            <DataText title={'Data final:'} content={certificate.dataFinal} />
          </S.DataRow>
          <S.DataRow>
            <DataText
              title={'Eixo de ensino:'}
              content={
                certificate.eixoAtividade.charAt(0).toUpperCase() +
                certificate.eixoAtividade.slice(1).toLowerCase()
              }
            />
            <DataText
              title={'Quantidade de horas:'}
              content={`${certificate.cargaHoraria} hora(s)`}
            />
          </S.DataRow>

          <S.DataRow>
            <DataText title={'Atividade:'} content={certificate.atividade} />
          </S.DataRow>
        </S.DataDiv>
      )}

      <S.ButtonDiv>
        <S.DownloadCertificate
          label="Salvar certificado"
          startAdornment={<DownloadSimple size={24} />}
        />
        <S.ViewCertificate
          label="Visualizar Certificado"
          startAdornment={<File size={24} />}
        />
      </S.ButtonDiv>
    </S.Container>
  );
};
