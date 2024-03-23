import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Alert, BackHandler, StyleSheet} from 'react-native';
import TodoListScreen from '../screens/TodoListScreen';
import TodosGroupScreen from '../screens/TodosGroupScreen';
import TodosDetailScreen from '../screens/TodosDetailScreen';
import {navigationRef} from '../lib/navigation';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  React.useEffect(() => {
    const handleBackPress = () => {
      if (navigationRef.getCurrentRoute()?.name === 'TodoList') {
        Alert.alert('잠깐!!', '정말 앱을 종료하시겠어요?', [
          {
            text: '취소',
            onPress: () => null,
            style: 'cancel',
          },
          {text: '나가기', onPress: () => BackHandler.exitApp()},
        ]);
      } else {
        navigationRef.goBack();
      }

      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', () => handleBackPress());

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () =>
        handleBackPress(),
      );
    };
  }, []);

  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TodoList">
      <MainStack.Screen name="TodoList" component={TodoListScreen} />
      <MainStack.Screen name="TodosGroup" component={TodosGroupScreen} />
      <MainStack.Screen name="TodosDetail" component={TodosDetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
