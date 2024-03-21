import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import TodoListScreen from '../screens/TodoListScreen';
import TodosGroupScreen from '../screens/TodosGroupScreen';
import TodosDetailScreen from '../screens/TodosDetailScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
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
