import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useRecoilState} from 'recoil';
import {bottomSheetVisibleState} from '../../recoil';

const SHEET_HEIGHT = 401;

type PropsType = {
  children: ReactElement;
};

const ModalBottomSheet = ({children}: PropsType) => {
  const [isVisibleRecoilState, setIsVisibleRecoilState] = useRecoilState(
    bottomSheetVisibleState,
  );
  const [isVisible, setIsVisible] = React.useState(isVisibleRecoilState);
  const handlePress = () => {
    setIsVisibleRecoilState(false);
  };

  const translateY = useSharedValue(SHEET_HEIGHT);
  const opacity = useSharedValue(0);
  React.useEffect(() => {
    if (isVisibleRecoilState) {
      setIsVisible(true);
      opacity.value = withTiming(1, {duration: 300});
      translateY.value = withTiming(0, {duration: 300});
    } else {
      opacity.value = withTiming(0, {duration: 300});
      translateY.value = withTiming(SHEET_HEIGHT, {duration: 300}, () => {
        runOnJS(setIsVisible)(false);
      });
    }
  }, [isVisibleRecoilState, opacity, translateY]);
  const scrimAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const sheetAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  if (!isVisible) return null;

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.scrim, scrimAnimatedStyle]}>
        <TouchableOpacity style={styles.flexOne} onPressOut={handlePress} />
      </Animated.View>
      <Animated.View style={[styles.sheetWrapper, sheetAnimatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default ModalBottomSheet;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000033',
  },
  flexOne: {
    flex: 1,
  },
  sheetWrapper: {
    height: SHEET_HEIGHT,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
    padding: 25,
  },
});
