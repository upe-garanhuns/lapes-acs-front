import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  label?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label = '',
  startAdornment,
  endAdornment,
  ...rest
}: ButtonProps) {
  return (
    <S.Button {...rest}>
      {startAdornment && <span>{startAdornment}</span>}
      {label}
      {endAdornment && <span>{endAdornment}</span>}
    </S.Button>
  );
}
