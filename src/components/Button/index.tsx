'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  label?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  className?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label,
  startAdornment,
  endAdornment,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <S.Button onClick={onClick} className={className} {...rest}>
      {startAdornment && <span>{startAdornment}</span>}
      {label}
      {endAdornment && <span>{endAdornment}</span>}
    </S.Button>
  );
}
