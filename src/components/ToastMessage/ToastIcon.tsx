import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import ErrorIcon from '../../assets/images/error-bg-white.svg';
import InfoIcon from '../../assets/images/info-bg-white.svg';
import SuccessIcon from '../../assets/images/success-bg-white.svg';
import WarningIcon from '../../assets/images/warning-bg-white.svg';
import {ToastType} from '../../recoil';

type PropsType = {
  type: ToastType;
};

const ToastIcon = ({type}: PropsType) => {
  const getToastBg = () => {
    let toastBg = '';
    if (type === 'success') toastBg = '#51DC6D';
    else if (type === 'error') toastBg = '#FC5758';
    else if (type === 'warning') toastBg = '#FFBF23';
    else if (type === 'info') toastBg = '#3286EA';

    return {
      backgroundColor: toastBg,
    } as ViewStyle;
  };

  return (
    <View style={[styles.iconBox, getToastBg()]}>
      {type === 'success' ? (
        <SuccessIcon
          width={25}
          height={25}
          stroke={'#51DC6D'}
          fill={'#51DC6D'}
        />
      ) : type === 'error' ? (
        <ErrorIcon width={25} height={25} stroke={'#FC5758'} fill={'#FC5758'} />
      ) : type === 'warning' ? (
        <WarningIcon
          width={25}
          height={25}
          stroke={'#FFBF23'}
          fill={'#FFBF23'}
        />
      ) : type === 'info' ? (
        <InfoIcon width={25} height={25} stroke={'#3286EA'} fill={'#3286EA'} />
      ) : null}
    </View>
  );
};

export default ToastIcon;

const styles = StyleSheet.create({
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
