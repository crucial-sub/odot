import React from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import useBottomSheet from '../hooks/useBottomSheet';

const screenHeight = Dimensions.get('window').height;
const MAX_HEIGHT = screenHeight - 50;
const SHEET_HEIGHT = 401;

const ModalBottomSheet = () => {
  const {isGlobalVisible, content} = useBottomSheet();
  const [isLocalVisible, setIsLocalVisible] = React.useState(isGlobalVisible);
  const {hideBottomSheet} = useBottomSheet();
  const handlePress = () => {
    hideBottomSheet();
  };

  const translateY = useSharedValue(SHEET_HEIGHT);
  const opacity = useSharedValue(0);
  const height = useSharedValue(SHEET_HEIGHT);
  const startY = useSharedValue(0);

  const panGestureEvent = Gesture.Pan()
    .onStart(() => {
      startY.value = height.value;
    })
    .onUpdate(event => {
      height.value = startY.value - event.translationY;
    })
    .onEnd(() => {
      if (height.value >= SHEET_HEIGHT && height.value < 550) {
        height.value = withSpring(SHEET_HEIGHT);
      } else if (height.value >= 550) {
        height.value = withSpring(MAX_HEIGHT);
      } else if (height.value < SHEET_HEIGHT) {
        runOnJS(hideBottomSheet)();
      }
    });

  React.useEffect(() => {
    if (isGlobalVisible) {
      height.value = Math.max(height.value, SHEET_HEIGHT);
      setIsLocalVisible(true);
      opacity.value = withTiming(1, {
        duration: 300,
      });
      translateY.value = withTiming(0, {
        duration: 300,
      });
    } else {
      opacity.value = withTiming(0, {
        duration: 300,
      });
      translateY.value = withTiming(
        SHEET_HEIGHT,
        {
          duration: 300,
        },
        () => {
          runOnJS(setIsLocalVisible)(false);
        },
      );
    }
  }, [isGlobalVisible, opacity, translateY]);

  const scrimAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const sheetAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <Modal
      visible={isLocalVisible}
      transparent
      onRequestClose={hideBottomSheet}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.scrim, scrimAnimatedStyle]}>
          <TouchableOpacity style={styles.flexOne} onPressOut={handlePress} />
        </Animated.View>
        <Animated.View style={[styles.sheetWrapper, sheetAnimatedStyle]}>
          <GestureDetector gesture={panGestureEvent}>
            <View style={styles.handler}></View>
          </GestureDetector>
          {content}
        </Animated.View>
      </View>
    </Modal>
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
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // height: SHEET_HEIGHT,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingBottom: 25,
    // paddingTop: 10,
  },
  handler: {
    width: 40,
    height: 6,
    backgroundColor: 'lightgrey',
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
