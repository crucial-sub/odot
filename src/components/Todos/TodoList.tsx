import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: string[];
}

const TodoList = ({todos}: TodoListProps) => {
  console.log(todos);
  return (
    <View style={styles.todoListWrapper}>
      {todos.length ? (
        todos.map((todo, i) => {
          return <Todo key={i} todo={todo} />;
        })
      ) : (
        <Text>Please add something to do today!</Text>
      )}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoListWrapper: {
    marginTop: 30,
    gap: 15,
  },
});
