import Button from '../Button';
import * as S from './style';

export function Register() {
  return (
    <S.Container>
      <S.BlueBarContainer />
      <S.RegisterContainer>
        <S.Div>
          <S.RegisterTitle $principal>Cadastro</S.RegisterTitle>
        </S.Div>

        <S.Line />

        <S.Div>
          <S.RegisterTitle>Dados Pessoais:</S.RegisterTitle>
        </S.Div>
        <S.Div>
          <S.RegisterTitle>Endereco:</S.RegisterTitle>
        </S.Div>
        <S.Div>
          <S.RegisterButton label="Cadastrar" />
        </S.Div>
      </S.RegisterContainer>
    </S.Container>
  );
}
