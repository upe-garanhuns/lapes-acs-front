import Cookies from 'js-cookie';

export const isTokenValid = () => {
  const token = Cookies.get('token');
  if (token) {
    return true;
  } else {
    return false;
  }
};
