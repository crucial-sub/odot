import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <View style={styles.todosWrapper}>
      <TodoList />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todosWrapper: {
    marginTop: 50,
    height: '100%',
  },
});
