import {useRecoilState} from 'recoil';
import {toastState, toastVisibleState} from '../../recoil';
import {ToastType} from '../../recoil';
import React from 'react';
import {ViewStyle} from 'react-native';

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

  const getToastStyle = (type: ToastType) => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: '#F1F8F4',
          borderColor: '#CFE8D4',
        } as ViewStyle;
      case 'error':
        return {
          backgroundColor: '#FBEFEB',
          borderColor: '#F0CEC3',
        } as ViewStyle;
      case 'warning':
        return {
          backgroundColor: '#FEF8EB',
          borderColor: '#F6E0B4',
        } as ViewStyle;
      case 'info':
        return {
          backgroundColor: '#E6EFFA',
          borderColor: '#B4CDEF',
        } as ViewStyle;
      default:
        return {};
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
    getToastStyle,
  };
};

export default useToastMessage;
