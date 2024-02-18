import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainHeader from '../components/MainHeader';
import NewTaskButton from '../components/NewTask/NewTaskButton';
import ProgressBar from '../components/TodoList/ProgressBar';
import TodoList from '../components/TodoList/TodoList';

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
