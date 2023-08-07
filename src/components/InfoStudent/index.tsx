import React, { useState } from 'react';

import * as S from './styles';

export type ComponentProps = {
  profilePhotoUrl?: string;
  name?: string;
  email?: string;
  period?: number;
  phoneNumber?: string;
  address?: string;

  onEdit?: () => void;

  closeModal: () => void;
};

const InfoStudent: React.FC<ComponentProps> = ({
  profilePhotoUrl,
  name,
  email,
  period,
  phoneNumber,
  address,

  onEdit,

  closeModal
}) => {
  const [warning, setWarninig] = useState(false);

  const setWarningText = () => {
    setWarninig(true);
  };
  setWarningText();
  console.log(warning);
  return (
    <>
      <S.Background onClick={closeModal} />
      <S.Container>
        <S.EditButton onClick={onEdit}>
          <p>editar</p>
        </S.EditButton>
        {profilePhotoUrl ? (
          <S.ProfilePhoto src={profilePhotoUrl} alt="Profile Photo" />
        ) : (
          <S.ProfileIconContainer>
            <p>user</p>
          </S.ProfileIconContainer>
        )}
        <S.Name>{name}</S.Name>
        <S.HorizontalLine />
        <S.InfoText>{email}</S.InfoText>
        <S.InfoText>{period}º Período</S.InfoText>
        <S.InfoText>{phoneNumber}</S.InfoText>
        <S.HorizontalLine />
        <S.InfoText>{address}</S.InfoText>
      </S.Container>
    </>
  );
};

export default InfoStudent;
