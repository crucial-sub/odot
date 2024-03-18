import React from 'react';
import {useRecoilState} from 'recoil';
import {ToastType, toastState, toastVisibleState} from '../../recoil';

const useToastMessage = () => {
  const [toastVisible, setToastVisible] = useRecoilState(toastVisibleState);
  const [toast, setToast] = useRecoilState(toastState);

  const showToast = (type: ToastType, message: string) => {
    setToast({type, message});
    setToastVisible(true);
  };
  const hideToast = () => {
    setToastVisible(false);
  };

  const getToastColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return '#00DFA2';
      case 'error':
        return '#E84545';
      case 'warning':
        return '#FFBF23';
      case 'info':
        return '#3286EA';
      default:
        return '';
    }
  };

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (toastVisible) {
      timeout = setTimeout(hideToast, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [toastVisible]);

  return {
    showToast,
    hideToast,
    getToastColor,
  };
};

export default useToastMessage;
