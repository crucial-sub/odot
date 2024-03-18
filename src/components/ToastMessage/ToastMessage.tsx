import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';
import {useRecoilValue} from 'recoil';
import {toastState, toastVisibleState} from '../../recoil';
import useToastMessage from '../hooks/useToastMessage';
import ToastIcon from './ToastIcon';

const TOAST_SIZE = 340;

const ToastMessage = () => {
  const {getToastStyle} = useToastMessage();
  const toastVisible = useRecoilValue(toastVisibleState);
  const {type, message} = useRecoilValue(toastState);
  const [isVisible, setIsVisible] = React.useState(false);
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  React.useEffect(() => {
    setIsVisible(toastVisible);
  }, [toastVisible]);

  return (
    <View style={styles.toastWrapper}>
      {isVisible && (
        <Animated.View
          style={[styles.animatedToastWrapper, getToastStyle(type)]}
          entering={LightSpeedInLeft}
          exiting={LightSpeedOutRight}>
          <ToastIcon type={type} />
          <View style={styles.textBox}>
            <Text style={styles.toastTitle}>{title}</Text>
            <Text
              style={styles.messageText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {message}
            </Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default ToastMessage;

const styles = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    top: 60,
    left: '50%',
    transform: [{translateX: -TOAST_SIZE / 2}],
  },
  animatedToastWrapper: {
    width: TOAST_SIZE,
    height: 70,
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 15,
  },
  textBox: {gap: 3, flex: 1},
  toastTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333439',
  },
  messageText: {
    color: '#626463',
  },
});
