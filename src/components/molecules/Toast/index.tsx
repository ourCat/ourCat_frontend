import { toast } from 'react-toastify';
import * as S from './style';

export const showToast = (message: string, bgColor?: string) => {
  toast.dark(message, {
    style: {
      borderRadius: '20px',
      textAlign: 'center',
      backgroundColor: bgColor ? bgColor : 'gray',
    },
    closeButton: false,
  });
};

export const ToastComponentContainer = () => {
  return (
    <S.ToastWrap
      limit={1}
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={true}
      pauseOnHover={true}
    />
  );
};
