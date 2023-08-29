import * as S from './Style';

interface CertificateCardInterface {
  eixo: string;
  activity: string;
  dInicial: string;
  dFinal: string;
  hours: string;
}

export const CertificateCard = ({
  eixo,
  activity,
  dInicial,
  dFinal,
  hours
}: CertificateCardInterface) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Eixo:</S.Title>
        <S.TextContent></S.TextContent>
      </S.Content>
      <S.Content>
        <S.Title>Atividade:</S.Title>
        <S.TextContent></S.TextContent>
      </S.Content>
      <S.Content>
        <S.Title>Data inicial:</S.Title>
        <S.TextContent></S.TextContent>
      </S.Content>
      <S.Content>
        <S.Title>Data final:</S.Title>
        <S.TextContent></S.TextContent>
      </S.Content>
      <S.Content>
        <S.Title>Quantidade de horas:</S.Title>
        <S.TextContent></S.TextContent>
      </S.Content>
    </S.Container>
  );
};
