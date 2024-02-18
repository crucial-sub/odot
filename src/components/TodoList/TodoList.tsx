import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {TodoType, todoListState} from '../../recoil';
import Todo from './Todo';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleCheck = (id: number) => {
    const newTodos = todoList.map(item => {
      if (item.id === id) {
        return {...item, isCompleted: !item.isCompleted};
      }

      return item;
    });

    setTodoList(newTodos);
  };

  return (
    <ScrollView
      style={styles.todoListWrapper}
      contentContainerStyle={{gap: 25, paddingBottom: 40}}>
      {todoList?.length ? (
        todoList.map((todo: TodoType, i) => {
          return <Todo key={i} todo={todo} handleCheck={handleCheck} />;
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
    flex: 1,
    width: '90%',
    overflow: 'hidden',
  },
});
