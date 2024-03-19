import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';
import {useRecoilValue} from 'recoil';
import {toastState, toastVisibleState} from '../../recoil';
import ToastIcon from './ToastIcon';

const TOAST_SIZE = 345;

const ToastMessage = () => {
  const toastVisible = useRecoilValue(toastVisibleState);
  const {type, message} = useRecoilValue(toastState);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(toastVisible);
  }, [toastVisible]);

  return (
    <View style={styles.toastWrapper}>
      {isVisible && (
        <Animated.View
          style={[styles.animatedToastWrapper]}
          entering={LightSpeedInLeft}
          exiting={LightSpeedOutRight}>
          <ToastIcon type={type} />
          <View style={styles.textBox}>
            <Text
              style={styles.messageText}
              numberOfLines={1}
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
    height: 45,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#00000026',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 8,
    shadowRadius: 0,
  },
  textBox: {flex: 1},
  messageText: {
    fontWeight: '500',
    fontSize: 12,
  },
});
