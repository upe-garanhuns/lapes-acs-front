'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';

import { GlobalStyle } from '../../styles/globalStyles';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined')
    return (
      <>
        <GlobalStyle />
        {children}
      </>
    );

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
