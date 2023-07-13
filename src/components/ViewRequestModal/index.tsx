'use client';

import React, { useState } from 'react';

import ViewRequest, { ViewRequestProps } from '../ViewRequestContent';
import * as S from './styles';

import { Eye, XCircle } from '@phosphor-icons/react';
import axios from 'axios';
export default function ViewRequestModal() {
  const iconSize = 24;
  const [isOpen, setIsOpen] = useState(false);
  const [certificateData, setCertificateData] = useState<ViewRequestProps>({
    id: 0,
    name: '',
    date: '',
    status: '',
    note: '',
    hours: 0
  });
  const fetchData = async () => {
    try {
      const response = await axios.get('end-point'); // colocar o link do end-point aqui
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
    fetchData().then((data) => {
      setCertificateData(data);
    });
  };
  const closeModalArea = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <S.OpenRequest onClick={openModal}>
        <Eye size={iconSize} />
      </S.OpenRequest>
      <S.ModalContainer
        isOpen={isOpen}
        closeModalArea={closeModalArea}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop
        children={<ViewRequest {...certificateData} />}
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
