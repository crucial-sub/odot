import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MainHeader from '../components/MainHeader';
import TodoList from '../components/TodoList/TodoList';
import NewTaskButton from '../components/NewTask/NewTaskButton';

const TodoListScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader />
      <View style={styles.wrapper}>
        <TodoList />
      </View>
      <NewTaskButton />
    </SafeAreaView>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
  },
  wrapper: {
    flex: 1,
    width: '90%',
    overflow: 'hidden',
  },
});
