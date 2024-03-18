import React from 'react';
import {StyleSheet, View} from 'react-native';
import FailIcon from '../../assets/images/fail.svg';
import InfoIcon from '../../assets/images/info.svg';
import SuccessIcon from '../../assets/images/success.svg';
import WarningIcon from '../../assets/images/warning.svg';
import {ToastType} from '../../recoil';
import useToastMessage from '../hooks/useToastMessage';

type PropsType = {
  type: ToastType;
};

const ToastIcon = ({type}: PropsType) => {
  const {getToastColor} = useToastMessage();

  return (
    <View style={styles.iconBox}>
      {type === 'success' ? (
        <SuccessIcon width={20} height={20} fill={getToastColor(type)} />
      ) : type === 'error' ? (
        <FailIcon width={20} height={20} fill={getToastColor(type)} />
      ) : type === 'warning' ? (
        <WarningIcon width={20} height={20} fill={getToastColor(type)} />
      ) : type === 'info' ? (
        <InfoIcon width={20} height={20} fill={getToastColor(type)} />
      ) : null}
    </View>
  );
};

export default ToastIcon;

const styles = StyleSheet.create({
  iconBox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
