import { useState } from 'react';

export const useSetLock = () => {
  const [cityLock, setCityLock] = useState<boolean>(true);
  const [ufLock, setUfLock] = useState<boolean>(true);
  const [blockLock, setBlockLock] = useState<boolean>(true);
  const [streetLock, setStreetLock] = useState<boolean>(true);

  return {
    cityLock,
    setCityLock,
    ufLock,
    setUfLock,
    blockLock,
    setBlockLock,
    streetLock,
    setStreetLock
  };
};
