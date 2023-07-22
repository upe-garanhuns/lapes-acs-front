'use client';

import { useRouter } from 'next/navigation';

import * as S from './styles';

import Cookies from 'js-cookie';

export default function NotFound() {
  const router = useRouter();
  const token = Cookies.get('token');
  let buttonText = '';
  let redirectLink = '';

  if (token) {
    buttonText = 'Voltar para a página principal';
    redirectLink = '/home';
  } else {
    buttonText = 'Voltar para a página de login';
    redirectLink = '/signin';
  }

  function handle() {
    router.push(redirectLink);
  }

  return (
    <S.Container>
      <S.ErrorContainer>
        <S.ErrorTitle>Erro 404</S.ErrorTitle>
        <S.ErrorSubTitle>
          A página que você procura não foi encontrada
        </S.ErrorSubTitle>
        <S.ErrorButton onClick={handle}>{buttonText}</S.ErrorButton>
      </S.ErrorContainer>
    </S.Container>
  );
}
