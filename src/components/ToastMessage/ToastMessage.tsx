import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

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
    width: 200,
    height: 80,
    backgroundColor: 'red',
  },
});
