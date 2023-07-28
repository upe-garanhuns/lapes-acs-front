import { useEffect, useState } from 'react';

import Button from '../../../../components/Button';
import { certificateData } from '../../../../services/certificateData';
import { getCertificateInterface } from '../../../../services/certificateData/types';
import { DataText } from './components/DataText';
import * as S from './styles';

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
      <div>
        <p>Visualização Detalhada da Solicitação: {solicitacaoID}</p>
      </div>
      <S.DataDiv>
        <S.DataRow>
          <DataText title={'Titulo:'} content={certificate.titulo} />
          <DataText title={'Data inicial:'} content={certificate.dataInicial} />
          <DataText title={'Data final:'} content={certificate.dataFinal} />
        </S.DataRow>
        <S.DataRow>
          <DataText
            title={'Eixo de ensino:'}
            content={certificate.eixoAtividade}
          />
          <DataText
            title={'Quantidade de horas:'}
            content={certificate.cargaHoraria}
          />
        </S.DataRow>

        <S.DataRow>
          <DataText title={'Atividade:'} content={certificate.atividade} />
        </S.DataRow>
      </S.DataDiv>
      <div>
        <Button />
        <Button />
      </div>
    </S.Container>
  );
};
