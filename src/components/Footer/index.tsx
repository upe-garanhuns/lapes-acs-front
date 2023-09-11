import Image from 'next/image';
import { usePathname } from 'next/navigation';

import * as S from './styles';

export default function Footer() {
  const pathName = usePathname();

  const recoverPasswordRegex = /\/account\/reset\/(.+)/;
  if (
    pathName === '/signin' ||
    pathName === '/confirmacao-cadastro' ||
    pathName === '/account/reset/' ||
    recoverPasswordRegex.test(pathName)
  )
    return null;
  return (
    <S.Container>
      <S.ImageContainer>
        <a href="http://www.upe.br/garanhuns/">
          <Image width={110} height={70} src={'/logo-upe.png'} alt="Upe" />
        </a>
      </S.ImageContainer>
      <div>
        <S.BoldParagraph>Universidade de Pernambuco</S.BoldParagraph>
        <S.BoldParagraph>Campus Garanhuns</S.BoldParagraph>
        <S.Paragraph>
          R. Cap. Pedro Rodrigues - São José, Garanhuns - PE
        </S.Paragraph>
        <S.Paragraph>CEP: 55294-902 | Fone: (87) 3761-8227</S.Paragraph>
      </div>
    </S.Container>
  );
}
