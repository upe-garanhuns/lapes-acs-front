import { useState } from 'react';

export const useSetInput = () => {
  const [userName, setUserName] = useState<string>('');
  const [userCpf, setUserCpf] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userCourse, setUserCourse] = useState<string>('');
  const [userPass, setUserPass] = useState<string>('');
  const [userSamePass, setUserSamePass] = useState<string>('');
  const [userNumber, setUserNumber] = useState<string>('');
  const [userCep, setUserCep] = useState<string>('');
  const [userCity, setUserCity] = useState<string>('');
  const [userBlock, setUserBlock] = useState<string>('');
  const [userUf, setUserUf] = useState<string>('');
  const [userStreet, setUserStreet] = useState<string>('');
  const [userComplement, setUserComplement] = useState<string>('');

  return {
    userName,
    setUserName,
    userCpf,
    setUserCpf,
    userPhone,
    setUserPhone,
    userGrade,
    setUserGrade,
    userEmail,
    setUserEmail,
    userCourse,
    setUserCourse,
    userPass,
    setUserPass,
    userSamePass,
    setUserSamePass,
    userNumber,
    setUserNumber,
    userCep,
    setUserCep,
    userCity,
    setUserCity,
    userBlock,
    setUserBlock,
    userUf,
    setUserUf,
    userStreet,
    setUserStreet,
    userComplement,
    setUserComplement
  };
};
