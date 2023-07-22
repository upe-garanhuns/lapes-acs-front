'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { getRequest } from '../../services/request';
import ViewRequest, { ViewRequestProps } from '../ViewRequestContent';
import * as S from './styles';

import { Eye, XCircle } from '@phosphor-icons/react';
export type ViewRequestModalProps = {
  id: number;
  token: string;
};

export default function ViewRequestModal(props: ViewRequestModalProps) {
  const router = useRouter();
  const { id, token } = props;
  const iconSize = 24;
  const [isOpen, setIsOpen] = useState(false);
  const [certificateData, setCertificateData] = useState<ViewRequestProps>({
    id: 0,
    data: new Date(),
    requisicaoStatus: '',
    observacao: '',
    certificados: []
  });
  const fetchData = async () => {
    try {
      const response = await getRequest(id, token); // colocar o link do end-point aqui
      return response;
    } catch (error) {
      toast.error('Sua sessão expirou!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
      router.push('/signin');
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
