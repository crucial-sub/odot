import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <View style={styles.todosWrapper}>
      <TodoInput />
      <TodoList />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todosWrapper: {
    marginTop: 50,
  },
});
