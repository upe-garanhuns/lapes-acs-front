import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { errorToast } from '../../../../functions/errorToast';
import { sucessToast } from '../../../../functions/sucessToast';
import { verificarCodigo } from './../../../../services/verification';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function ConfirmarForm() {
  const [codigoVerificacao, setCodigoVerificacao] = useState('');

  const router = useRouter();

  const handleCodigoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigoVerificacao(event.target.value);
  };
  const token = Cookies.get('token'); // Obtém o código de verificação do cookie "token"

  const handleConfirmarClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      if (!token) {
        // Caso o código de verificação não esteja presente no cookie, trate o erro
        throw new Error('Código de verificação não encontrado no cookie.');
      }
      await verificarCodigo(codigoVerificacao, token)
        .then((res) => {
          if (res.status == 200) {
            sucessToast('Usuário cadastrado com sucesso!');
            router.push('/home'); // Redireciona o usuário para a página /home
            return;
          }
        })
        .catch((error) => {
          errorToast('Código incorreto, verifique e confirme novamente!');
          console.log(error);
        });
    } catch (error) {
      console.error(error);
      alert(
        'Erro ao verificar o código de ativação. Tente novamente mais tarde.'
      );
      throw error;
    }
  };

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
      <S.Input
        type="text"
        max="9999"
        placeholder="0 - 0 - 0 - 0 "
        value={codigoVerificacao}
        onChange={handleCodigoChange}
      />
      <S.ButtonsContainer>
        <S.CancelButton>Cancelar</S.CancelButton>
        <S.ConfirmButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleConfirmarClick(event);
          }}
        >
          Confirmar
        </S.ConfirmButton>
      </S.ButtonsContainer>
    </S.Container>
  );
}
