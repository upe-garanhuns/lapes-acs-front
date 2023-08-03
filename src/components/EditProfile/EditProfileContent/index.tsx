'use client';

import React, { useState } from 'react';

import * as S from './styles';
export default function EditProfileContent() {
  return (
    <S.Container>
      <S.Title></S.Title>
      <S.Subtitle></S.Subtitle>
      <S.Row>
        <S.GridPersonalData></S.GridPersonalData>
      </S.Row>
    </S.Container>
  );
}
