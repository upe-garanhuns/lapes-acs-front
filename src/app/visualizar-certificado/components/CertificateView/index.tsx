import Button from '../../../../components/Button';
import { DataText } from './components/DataText';
import * as S from './styles';

export const CertificateView = () => {
  return (
    <S.Container>
      <div>
        <p>Visualização Detalhada da Solicitação: XXXXXXXXX</p>
      </div>
      <S.DataDiv>
        <S.DataRow>
          <DataText title={'Titulo:'} content={'exemplo'} />
          <DataText title={'Data inicial:'} content={'exemplo'} />
          <DataText title={'Data final:'} content={'exemplo'} />
        </S.DataRow>
        <S.DataRow>
          <DataText title={'Eixo de ensino:'} content={'exemplo'} />
          <DataText title={'Quantidade de horas:'} content={'exemplo'} />
        </S.DataRow>

        <S.DataRow>
          <DataText title={'Atividade:'} content={'exemplo'} />
        </S.DataRow>
      </S.DataDiv>
      <div>
        <Button />
        <Button />
      </div>
    </S.Container>
  );
};
