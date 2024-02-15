import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: string[];
}

const TodoList = ({todos}: TodoListProps) => {
  return (
    <ScrollView
      style={styles.todoListWrapper}
      contentContainerStyle={{gap: 15, paddingBottom: 100}}>
      {todos.length ? (
        todos.map((todo, i) => {
          return <Todo key={i} todo={todo} />;
        })
      ) : (
        <Text>Please add something to do today!</Text>
      )}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoListWrapper: {
    marginTop: 30,
  },
});
