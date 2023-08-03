import * as S from './styles';

interface DataTextInterface {
  title: string;
  content: string | number;
}

export const DataText = ({ title, content }: DataTextInterface) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};
