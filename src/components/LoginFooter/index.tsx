import Image from 'next/image';

import * as S from './styles';

export default function LoginFooter() {
  return (
    <S.Footer>
      <Image
        width={252.5}
        height={111.6}
        alt=""
        src={'/../public/logo-pernambuco.png'}
      />
      <S.TextContainer>
        <div>Contato:&nbsp;</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas
        erat imperdiet sed. Diam in arcu cursus euismod quis viverra.{' '}
      </S.TextContainer>
    </S.Footer>
  );
}
