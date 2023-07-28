'use client';

import * as S from './styles';

export default function ConfirmarForm() {
  return (
    <S.Container>
      <S.Cima>
        <S.Title>Confirmar cadastro</S.Title>
        <S.Line />
        <S.Paragraph>
          Preencha o campo indicado com código de ativação da conta enviado para
          seu e-mail, caso não tenha recebido, aperte no botão de enviar o
          código novamente.
        </S.Paragraph>
        <S.ButtonEnviar>Enviar novamente</S.ButtonEnviar>
      </S.Cima>
      <S.Input type="number" max="9999" />
      <S.ButtonsContainer>
        <S.CancelButton>Cancelar</S.CancelButton>
        <S.ConfirmButton>Confirmar</S.ConfirmButton>
      </S.ButtonsContainer>
    </S.Container>
  );
}
