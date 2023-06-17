'use client';

import { PropsWithChildren } from 'react';

import { GlobalStyle } from '../styles/globalStyles';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
