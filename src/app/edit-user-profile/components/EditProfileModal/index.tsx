'use client';
import { useEffect, useState } from 'react';

import { userData } from '../../../../services/user';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function EditProfileModal() {
  const [userDataJSON, setUserDataJSON] = useState({
    id: 0,
    nomeCompleto: '',
    matricula: '',
    telefone: '',
    email: '',
    perfis: [''],
    curso: { id: 0, nome: '' },
    periodo: 0,
    verificado: false
  });
  const token = Cookies.get('token') || '';

  const fetchUserData = async () => {
    try {
      const user = await userData({ token });
      console.log(user);
      setUserDataJSON(user);
      console.log(userDataJSON);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <S.StyledRegister
        userName={userDataJSON.nomeCompleto}
        userEmail={userDataJSON.email}
        userPhone={userDataJSON.telefone}
        userCourse={userDataJSON.curso.id.toString()}
        userRegistry={userDataJSON.matricula}
        userGrade={userDataJSON.periodo.toString()}
        isEdit={true}
      />
    </div>
  );
}
