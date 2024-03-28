import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import ModalBottomSheet from './components/BottomSheet/ModalBottomSheet';
import ToastMessage from './components/ToastMessage/ToastMessage';
import {navigationRef} from './lib/navigation';
import MainScreen from './screens/MainScreen';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.flexOne}>
      <RecoilRoot>
        <NavigationContainer ref={navigationRef}>
          <MainScreen />
          <ModalBottomSheet />
          <ToastMessage />
        </NavigationContainer>
      </RecoilRoot>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
