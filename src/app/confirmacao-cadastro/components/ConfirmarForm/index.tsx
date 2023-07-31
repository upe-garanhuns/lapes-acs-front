import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { verificarCodigo } from './../../../../services/verification';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function ConfirmarForm() {
  const [codigoVerificacao, setCodigoVerificacao] = useState('');
  const [codigoVerificado, setCodigoVerificado] = useState(false);
  const router = useRouter();

  const handleCodigoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigoVerificacao(event.target.value);
  };
  const token = Cookies.get('token'); // Obtém o código de verificação do cookie "token"
  const handleConfirmarClick = async () => {
    try {
      console.log(token);
      if (!token) {
        // Caso o código de verificação não esteja presente no cookie, trate o erro
        throw new Error('Código de verificação não encontrado no cookie.');
      }

      const verificado = await verificarCodigo(codigoVerificacao, token);
      console.log(verificado);

      setCodigoVerificado(true);

      router.push('/home'); // Redireciona o usuário para a página /home
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
        value={codigoVerificacao}
        onChange={handleCodigoChange}
      />
      <S.ButtonsContainer>
        <S.CancelButton>Cancelar</S.CancelButton>
        <S.ConfirmButton onClick={handleConfirmarClick}>
          Confirmar
        </S.ConfirmButton>
      </S.ButtonsContainer>
    </S.Container>
  );
}
