import { useState } from 'react';

export const useSearchText = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return { searchText, setSearchText, isSearch, setIsSearch };
};
