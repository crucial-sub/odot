import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RecoilRoot} from 'recoil';
import ToastMessage from './components/ToastMessage/ToastMessage';
import MainScreen from './screens/MainScreen';
import ModalBottomSheet from './components/BottomSheet/ModalBottomSheet';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainScreen />
        <ModalBottomSheet />
        <ToastMessage />
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});

export default App;
