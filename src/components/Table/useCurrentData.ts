import { useMemo, useState } from 'react';

export const useCurrentData = (data: object[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData] = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return [data.slice(firstPageIndex, lastPageIndex), data];
  }, [currentPage, data, pageSize]);

  return { currentData, currentPage, setCurrentPage };
};
