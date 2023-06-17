import { useState } from 'react';

export const useSortConfig = () => {
  const [sortConfig, setSortConfig] = useState<{
    key?: keyof object;
    direction: 'asc' | 'desc';
  }>({ direction: 'asc' });

  return { sortConfig, setSortConfig };
};
