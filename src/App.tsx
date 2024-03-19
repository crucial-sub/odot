import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RecoilEnv, RecoilRoot} from 'recoil';
import ToastMessage from './components/ToastMessage/ToastMessage';
import MainScreen from './screens/MainScreen';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainScreen />
        <ToastMessage />
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});

export default App;
