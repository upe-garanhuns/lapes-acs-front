export const checkPassWord = (passaword: string): boolean => {
  if (passaword.length < 8 || passaword.length > 16) {
    return false;
  }
  return true;
};
