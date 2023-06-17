import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathName = usePathname();
  const isCurrentPath = pathName === href;

  return (
    <S.Anchor href={href} isCurrentPath={isCurrentPath}>
      {children}
    </S.Anchor>
  );
};
