import { ReactNode } from 'react';

import { filterData, sortData } from '../../functions';
import { Input } from '../Input';
import { Pagination } from '../Pagination';
import * as S from './styles';
import { useCurrentData } from './useCurrentData';
import { useSearchText } from './useSearchText';
import { useSortConfig } from './useSortConfig';

import { ArrowDown, ArrowUp, MagnifyingGlass } from '@phosphor-icons/react';

type TableProps = {
  data: Array<unknown>;
  onClickRow?: (item: unknown) => void;
  options?: ReactNode;
  pageSize?: number;
};

export default function Table({
  data,
  onClickRow,
  options,
  pageSize = 10
}: TableProps) {
  const { searchText, setSearchText, isSearch, setIsSearch } = useSearchText();
  const { sortConfig, setSortConfig } = useSortConfig();

  const { currentData, currentPage, setCurrentPage } = useCurrentData(
    data,
    pageSize
  );

  const sortedData = sortData(
    currentData,
    sortConfig.key,
    sortConfig.direction
  );

  const handleSort = (key: keyof object) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    e.target.value == '' ? setIsSearch(false) : setIsSearch(true);
  };

  const filteredData = filterData(currentData, searchText);

  return (
    <>
      <S.Container>
        <Input
          onChange={handleSearch}
          value={searchText}
          placeholder="Digite aqui para filtrar os dados"
          endAdornment={<MagnifyingGlass />}
        />
        {data.length && (
          <S.Table>
            <S.TableHead>
              <S.TableRow>
                {Object.keys(data[0]).map((key) => (
                  <S.TableHeadCell
                    key={key}
                    onClick={() => handleSort(key as keyof object)}
                  >
                    {key.toUpperCase()}
                    {sortConfig.key === key && (
                      <S.SpanOrder>
                        {sortConfig.direction === 'asc' ? (
                          <ArrowUp />
                        ) : (
                          <ArrowDown />
                        )}
                      </S.SpanOrder>
                    )}
                  </S.TableHeadCell>
                ))}
                {options && <S.TableHeadCell>Opções</S.TableHeadCell>}
              </S.TableRow>
            </S.TableHead>
            <S.TableBody>
              {!isSearch
                ? sortedData.map((item: unknown, index: number) => (
                    <S.TableRow key={index} onClick={() => onClickRow(item)}>
                      {Object.values(item).map((value) => (
                        <S.TableDataCell key={value}>
                          <S.SpanCell>{value}</S.SpanCell>
                        </S.TableDataCell>
                      ))}
                      {options && <S.TableDataCell>{options}</S.TableDataCell>}
                    </S.TableRow>
                  ))
                : filteredData.map((item: unknown, index: number) => (
                    <S.TableRow key={index} onClick={() => onClickRow(item)}>
                      {Object.values(item).map((value) => (
                        <S.TableDataCell key={value}>
                          <S.SpanCell>{value}</S.SpanCell>
                        </S.TableDataCell>
                      ))}
                      {options && <S.TableDataCell>{options}</S.TableDataCell>}
                    </S.TableRow>
                  ))}
              {filteredData.length == 0 && (
                <S.TableRow>
                  <S.TableDataCell>Nenhum resultado encontrado</S.TableDataCell>
                </S.TableRow>
              )}
            </S.TableBody>
          </S.Table>
        )}
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={data.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </S.Container>
    </>
  );
}
