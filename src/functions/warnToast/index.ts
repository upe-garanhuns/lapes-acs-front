import { toast } from 'react-toastify';

export const warnToast = (message: string) => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  });
};
