import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import TodoList from '../components/TodoList/TodoList';
import NewTaskButton from '../components/NewTask/NewTaskButton';

const TodoListScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
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
