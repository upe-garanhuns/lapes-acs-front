import React from 'react';

import * as S from './styles';

export type ComponentProps = {
  gesHours: number;
  extHours: number;
  pesHours: number;
  ensHours: number;
  maxHours: number;
  gesHoursWidth: string;
  ensHoursWidth: string;
  pesHoursWidth: string;
  extHoursWidth: string;
};

const calculateTotalHours = (
  gesHours: number,
  extHours: number,
  pesHours: number,
  ensHours: number
) => {
  return gesHours + extHours + pesHours + ensHours;
};

const HourCount: React.FC<ComponentProps> = ({
  gesHours,
  extHours,
  pesHours,
  ensHours,
  maxHours,
  gesHoursWidth,
  ensHoursWidth,
  pesHoursWidth,
  extHoursWidth
}) => {
  const totalHours: number = calculateTotalHours(
    gesHours,
    extHours,
    pesHours,
    ensHours
  );
  //verificando tamanho de cada barrinha para definir o formato correto:
  const borderRadiusExt = gesHoursWidth == '0%' ? '10px 0px 0px 10px' : '0px';
  const borderRadiusPes =
    gesHoursWidth == '0%' && extHoursWidth == '0%'
      ? '10px 0px 0px 10px'
      : '0px';
  const borderRadiusEns =
    gesHoursWidth == '0%' && extHoursWidth == '0%' && pesHoursWidth == '0%'
      ? '10px'
      : '0px 10px 10px 0px';

  return (
    <S.Component>
      <S.Container>
        <S.MinhasHorasString>Minhas Horas: </S.MinhasHorasString>
        <S.Bar color="#00798c">Ges: {gesHours}h</S.Bar>
        <S.Bar color="#ec2026">Ext: {extHours}h</S.Bar>
        <S.Bar color="#004D00">Pes: {pesHours}h</S.Bar>
        <S.Bar color="#3b0086">Ens: {ensHours}h</S.Bar>
      </S.Container>
      <S.TotalBarComponent>
        <S.TotalHoursDatas>
          <S.TotalString>Total:</S.TotalString>
          <S.TotalBarLine>
            {totalHours}/{maxHours}
          </S.TotalBarLine>
        </S.TotalHoursDatas>
        <S.TotalBarBackgroundColor>
          <S.TotalBar
            width={gesHoursWidth}
            color="#00798c"
            radius="10px 0px 0px 10px"
          />
          <S.TotalBar
            width={extHoursWidth}
            color="#ec2026"
            radius={borderRadiusExt}
          />
          <S.TotalBar
            width={pesHoursWidth}
            color="#004D00"
            radius={borderRadiusPes}
          />
          <S.TotalBar
            width={ensHoursWidth}
            color="#3b0086"
            radius={borderRadiusEns}
          />
        </S.TotalBarBackgroundColor>
      </S.TotalBarComponent>
    </S.Component>
  );
};

export default HourCount;
