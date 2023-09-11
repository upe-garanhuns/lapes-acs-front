import Image from 'next/image';

import * as S from './styles';

export default function LoginFooter() {
  return (
    <S.Footer>
      <Image width={252.5} height={111.6} alt="" src={'/logo-pernambuco.png'} />
      <S.TextContainer>
        <div>Contato:&nbsp;</div>
        Fone: (87) 3761-8227
      </S.TextContainer>
    </S.Footer>
  );
}
