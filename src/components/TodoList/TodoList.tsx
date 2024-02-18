import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilValue} from 'recoil';
import {TodoType, todoListState} from '../../recoil';
import Todo from './Todo';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <ScrollView
      style={styles.todoListWrapper}
      contentContainerStyle={{gap: 15, paddingBottom: 100}}>
      {todoList!.length ? (
        todoList.map((todo: TodoType, i) => {
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
  todoListWrapper: {},
});