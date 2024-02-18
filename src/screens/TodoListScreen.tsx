import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MainHeader from '../components/MainHeader';
import TodoList from '../components/TodoList/TodoList';
import NewTaskButton from '../components/NewTask/NewTaskButton';
import ProgressBar from '../components/TodoList/ProgressBar';

const TodoListScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader />
      <ProgressBar />
      <TodoList />
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
    gap: 40,
  },
});
