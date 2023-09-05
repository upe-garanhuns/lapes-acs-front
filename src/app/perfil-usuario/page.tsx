"use client"
import React, { useEffect, useState } from 'react';
import { getUserInformation } from '../../services/user';
import Cookies from 'js-cookie';
import * as S from './styles';

const UserProfile = ({ }) => {
  const [userInfo, setUserInfo] = useState(null);
  const token = Cookies.get('token') || '';

  const fetchUserInfo = async () => {
    try {
      const userResponse = await getUserInformation(token);
      setUserInfo(userResponse);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [token]);

  if (!userInfo) {
    return <div>Loading...</div>;
  
  }

  return (
      <S.Container>
        <S.Title>Editar perfil</S.Title>
        <S.FormContainer>   
        <S.Label>Dados pessoais:</S.Label>       
          <S.InputArea>
            <S.InputGroup>
              <S.LabelMinor>Nome Completo:</S.LabelMinor>
              <S.Input
                type="text"
                value={userInfo.nomeCompleto}
                readOnly
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.LabelMinor>Matrícula:</S.LabelMinor>
              <S.Input
                type="text"
                value={userInfo.matricula}
                readOnly
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.LabelMinor>Email:</S.LabelMinor>
              <S.Input
                type="text"
                value={userInfo.email}
                readOnly
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.LabelMinor>Periodo:</S.LabelMinor>
              <S.Input
                type="text"
                value={userInfo.periodo}
                readOnly
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.LabelMinor>Telefone:</S.LabelMinor>
              <S.Input
                type="text"
                value={userInfo.telefone}
                readOnly
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.LabelMinor>Curso:</S.LabelMinor>
              <S.Input
                type="text"
                value={userInfo.curso.nome}
                readOnly
              />
            </S.InputGroup>
          </S.InputArea>
          </S.FormContainer>
        <S.FormContainerAddress>
            <S.Label>Endereço:</S.Label>
        </S.FormContainerAddress>
        <S.ButtonsContainer>
          <S.SaveButton>Salvar</S.SaveButton>
          <S.Button>Voltar</S.Button>
        </S.ButtonsContainer>
        </S.Container>
  );
};

export default UserProfile;