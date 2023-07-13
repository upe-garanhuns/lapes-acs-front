import * as S from './styles';
import { DOTS, usePagination } from './usePagination';

import { ArrowLineLeft, ArrowLineRight } from '@phosphor-icons/react';

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  totalCount,
  siblingCount = 10
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (paginationRange === undefined) return null;

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (Math.ceil(totalCount / pageSize) == currentPage) {
      return null;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage - 1 < 1) {
      return null;
    }
    onPageChange(currentPage - 1);
  };

  return (
    <S.Container>
      <S.Arrow onClick={onPrevious}>
        <ArrowLineLeft />
      </S.Arrow>
      <S.PagesBackground>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li key={index}>...</li>;
          }

          return (
            <S.Page
              key={index}
              onClick={() => onPageChange(parseInt(pageNumber.toString()))}
              isSelected={pageNumber === currentPage}
            >
              <S.CertificateName isSelected={pageNumber === currentPage}>
                Certificado {pageNumber}
              </S.CertificateName>
            </S.Page>
          );
        })}
      </S.PagesBackground>
      <S.Arrow onClick={onNext}>
        <ArrowLineRight />
      </S.Arrow>
    </S.Container>
  );
};
export default usePagination;
