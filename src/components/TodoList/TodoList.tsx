import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {
  getAllItems,
  getStorageData,
  saveStorageData,
} from '../../lib/storage-helper';
import {todoListState} from '../../recoil';
import {MonthTodosType, TodoType} from '../../types';
import {getTransformedDate} from '../../utils/getTransformedDate';
import Todo from './Todo';

const TodoList = () => {
  const isFocused = useIsFocused();
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const currentDate = getTransformedDate(new Date());
  const yearMonth: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);

  const handleCheck = async (id: number) => {
    const newTodos = todoList.map(item => {
      if (item.id === id) {
        return {...item, isCompleted: !item.isCompleted};
      }
      return item;
    });
    const monthTodos: MonthTodosType = await getStorageData(
      'todos-' + yearMonth,
    );
    const updatedTodos: MonthTodosType = {
      ...monthTodos,
      [today]: [...newTodos],
    };
    await saveStorageData('todos-' + yearMonth, updatedTodos);
    setTodoList(newTodos);
  };
  React.useEffect(() => {
    const getAllTodos = async () => {
      const allItems = await getAllItems();
      const allTodos = Object.fromEntries(
        Object.entries(allItems)
          .filter(entry => entry[0].includes('todos-'))
          .map(([key, value]: any) => [key.slice(6, 13), value]),
      );
      if (!allTodos[yearMonth] || !allTodos[yearMonth][today]) return;
      setTodoList(allTodos[yearMonth][today]);
    };
    if (isFocused) getAllTodos();
  }, [isFocused]);

  return (
    <ScrollView
      style={styles.todoListWrapper}
      contentContainerStyle={{gap: 25, paddingBottom: 40}}>
      {todoList?.length ? (
        todoList.map((todo: TodoType) => {
          return <Todo key={todo.id} todo={todo} handleCheck={handleCheck} />;
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
    overflow: 'hidden',
  },
});
