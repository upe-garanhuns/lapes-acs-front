import Button from '../../../../components/Button';
import { DataText } from './components/DataText';
import * as S from './styles';

export const CertificateView = () => {
  return (
    <S.Container>
      <div>
        <p>Visualização Detalhada da Solicitação: XXXXXXXXX</p>
      </div>
      <div>
        <div>
          <DataText title={'Titulo:'} content={'exemplo'} />
          <DataText title={'Data inicial:'} content={'exemplo'} />
          <DataText title={'Data final:'} content={'exemplo'} />
        </div>
        <div>
          <DataText title={'Eixo de ensino:'} content={'exemplo'} />
          <DataText title={'Quantidade de horas:'} content={'exemplo'} />
        </div>

        <div>
          <DataText title={'Atividade:'} content={'exemplo'} />
        </div>
      </div>
      <div>
        <Button />
        <Button />
      </div>
    </S.Container>
  );
};
