import React from 'react';

import * as S from './styles';

export type ComponentProps = {
  gesHours: number;
  extHours: number;
  pesHours: number;
  ensHours: number;
};

const calculateTotalHours = (data: ComponentProps) => {
  const { gesHours, extHours, pesHours, ensHours } = data;
  return gesHours + extHours + pesHours + ensHours;
};

const HourCount: React.FC<ComponentProps> = ({
  gesHours,
  extHours,
  pesHours,
  ensHours
}) => {
  const maxHours = 180;
  const totalHours: number = calculateTotalHours({
    gesHours,
    extHours,
    pesHours,
    ensHours
  });
  const gesWidth = `${(gesHours / maxHours) * 100}%`;
  const extWidth = `${(extHours / maxHours) * 100}%`;
  const pesWidth = `${(pesHours / maxHours) * 100}%`;
  const ensWidth = `${(ensHours / maxHours) * 100}%`;

  return (
    <div>
      <S.Component>
        <S.Container>
          <S.MinhasHorasString>Minhas Horas: </S.MinhasHorasString>
          <S.GesBar>Ges: {gesHours}h</S.GesBar>
          <S.ExtBar>Ext: {extHours}h</S.ExtBar>
          <S.PesBar>Pes: {pesHours}h</S.PesBar>
          <S.EnsBar>Ens: {ensHours}h</S.EnsBar>
        </S.Container>
        <S.TotalBarComponent>
          <S.TotalHoursDatas>
            <S.TotalString>Total:</S.TotalString>
            <S.TotalBarLine>{totalHours}/180</S.TotalBarLine>
          </S.TotalHoursDatas>
          <S.TotalBarBackgroundColor>
            <S.TotalBarGes width={gesWidth} />
            <S.TotalBarExt width={extWidth} />
            <S.TotalBarPes width={pesWidth} />
            <S.TotalBarEns width={ensWidth} />
          </S.TotalBarBackgroundColor>
        </S.TotalBarComponent>
      </S.Component>
    </div>
  );
};

export default HourCount;
