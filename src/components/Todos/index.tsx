import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  return (
    <View style={styles.todosWrapper}>
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todosWrapper: {
    marginTop: 50,
  },
});
