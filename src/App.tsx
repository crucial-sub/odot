import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TodoListScreen from './screens/TodoListScreen';
import MainScreen from './screens/MainScreen';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
