import { useState } from 'react';

import { RegisterParams } from '..';

export const useSetInput = (props: RegisterParams) => {
  const [userName, setUserName] = useState<string>(props.userName);
  const [userCpf, setUserCpf] = useState<string>(props.userCpf);
  const [userPhone, setUserPhone] = useState<string>(props.userPhone);
  const [userGrade, setUserGrade] = useState<string>(props.userGrade);
  const [userEmail, setUserEmail] = useState<string>(props.userEmail);
  const [userCourse, setUserCourse] = useState<string>(props.userCourse);
  const [userPass, setUserPass] = useState<string>(props.userPass);
  const [userSamePass, setUserSamePass] = useState<string>(props.userSamePass);
  const [userNumber, setUserNumber] = useState<string>(props.userNumber);
  const [userCep, setUserCep] = useState<string>(props.userCep);
  const [userCity, setUserCity] = useState<string>(props.userCity);
  const [userBlock, setUserBlock] = useState<string>(props.userBlock);
  const [userUf, setUserUf] = useState<string>(props.userUf);
  const [userStreet, setUserStreet] = useState<string>(props.userStreet);
  const [userComplement, setUserComplement] = useState<string>(
    props.userComplement
  );
  const [userRegistry, setUserRegistry] = useState<string>(props.userRegistry);

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
    setUserComplement,
    userRegistry,
    setUserRegistry
  };
};
