import * as S from './styles';

interface PaginationInterface {
  handlePageChangeBack: () => void;
  handlePageChangeNext: () => void;
  allPage: number;
  page: number;
}

export const PaginationComp = ({
  handlePageChangeBack,
  handlePageChangeNext,
  allPage,
  page
}: PaginationInterface) => {
  return (
    <S.PaginationDiv>
      <S.Div>
        <S.LeftArrow size={24} color="#6060ff" onClick={handlePageChangeBack} />
      </S.Div>

      <S.Div>
        <S.CurrentPageNumber>
          <S.PageNumber>{page}</S.PageNumber>
        </S.CurrentPageNumber>
      </S.Div>
      <S.Div>/</S.Div>
      <S.Div>
        <S.CurrentPageNumber>
          <S.PageNumber>{allPage}</S.PageNumber>
        </S.CurrentPageNumber>
      </S.Div>
      <S.Div>
        <S.RightArrow
          size={24}
          color="#5555ff"
          onClick={handlePageChangeNext}
        />
      </S.Div>
    </S.PaginationDiv>
  );
};
