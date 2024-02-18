import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import NewTaskScreen from '../screens/NewTaskScreen';
import TodoListScreen from '../screens/TodoListScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TodoList">
      <MainStack.Screen name="TodoList" component={TodoListScreen} />
      <MainStack.Screen name="NewTask" component={NewTaskScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
