export const checkSamePass = (
  firstPass: string,
  secondPass: string
): boolean => {
  if (firstPass !== secondPass) {
    return false;
  }

  return true;
};
