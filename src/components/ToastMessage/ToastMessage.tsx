import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const TOAST_SIZE = 300;

const ToastMessage = () => {
  return (
    <Animated.View style={[styles.toastWrapper]}>
      <Text>ToastMessage</Text>
    </Animated.View>
  );
};

export default ToastMessage;

const styles = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    width: TOAST_SIZE,
    height: 80,
    backgroundColor: 'red',
    top: 60,
    left: '50%',
    transform: [{translateX: -TOAST_SIZE / 2}],
    borderRadius: 12,
  },
});
