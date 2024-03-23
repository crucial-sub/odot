import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RecoilRoot} from 'recoil';
import ToastMessage from './components/ToastMessage/ToastMessage';
import MainScreen from './screens/MainScreen';
import ModalBottomSheet from './components/BottomSheet/ModalBottomSheet';
import 'react-native-gesture-handler';
import {navigationRef} from './lib/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
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

const styles = StyleSheet.create({});

export default App;
