import { InputHTMLAttributes, ReactNode, useId } from 'react';

import * as S from './styles';

type InputProps = {
  label?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

//TODO: Add password visibility toggle
export const Input = ({
  label = '',
  name = '',
  type = 'text',
  startAdornment,
  endAdornment,
  ...rest
}: InputProps) => {
  const labelId = useId();

  return (
    <>
      {label && <S.Label htmlFor={labelId}>{label}</S.Label>}
      <S.Container>
        {startAdornment && <S.Adornment>{startAdornment}</S.Adornment>}
        <S.Input id={labelId} type={type} name={name} {...rest} />
        {endAdornment && <S.Adornment>{endAdornment}</S.Adornment>}
      </S.Container>
    </>
  );
};
