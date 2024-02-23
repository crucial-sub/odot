import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import NewTaskScreen from '../screens/NewTaskScreen';
import TodoListScreen from '../screens/TodoListScreen';
import TodosFlatListScreen from '../screens/TodosFlatListScreen';
import TodosScreen from '../screens/TodosScreen';
import TodosSectionListScreen from '../screens/TodosSectionListScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TodoList">
      <MainStack.Screen name="TodoList" component={TodoListScreen} />
      <MainStack.Screen name="NewTask" component={NewTaskScreen} />
      <MainStack.Screen name="Todos" component={TodosScreen} />
      <MainStack.Screen name="TodosFlatList" component={TodosFlatListScreen} />
      <MainStack.Screen
        name="TodosSectionList"
        component={TodosSectionListScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
