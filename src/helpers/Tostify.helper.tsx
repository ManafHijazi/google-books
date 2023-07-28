import { toast, ToastOptions } from 'react-toastify';

export const showSuccess = (
  message: string,
  options: ToastOptions = { type: 'success' },
) => {
  return toast(message, options);
};

export const showError = (
  message: string | React.ReactNode,
  options: ToastOptions = { type: 'error' },
) => {
  toast(message, options);
};
