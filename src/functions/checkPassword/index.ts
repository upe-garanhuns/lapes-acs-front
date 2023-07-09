export const checkPassWord = (password: string): boolean => {
  const regex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};':"|,.<>/?]).{8,16}$`,
    'g'
  );

  return regex.test(password);
};
