import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {getStorageData, saveStorageData} from '../../lib/storage-helper';
import {
  MonthTodoListType,
  TodoType,
  monthTodoListState,
  todoListState,
} from '../../recoil';
import {getTransformedDate} from '../../utils/getTransformedDate';
import useInitMonthTodoList from '../hooks/useInitMonthTodoList';
import Todo from './Todo';

const TodoList = () => {
  useInitMonthTodoList();
  const [monthTodoList, setMonthTodoList] = useRecoilState(monthTodoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const currentDate = getTransformedDate(new Date());
  const currentMonthKey: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);

  const handleCheck = async (id: number) => {
    const newTodoList = todoList.map(item =>
      item.id === id ? {...item, isCompleted: !item.isCompleted} : item,
    );
    const storedMonthTodoList: MonthTodoListType = await getStorageData(
      'todos-' + currentMonthKey,
    );
    const updatedMonthTodoList: MonthTodoListType = {
      ...storedMonthTodoList,
      [today]: [...newTodoList],
    };
    await saveStorageData('todos-' + currentMonthKey, updatedMonthTodoList);
    setMonthTodoList(updatedMonthTodoList);
  };

  React.useEffect(() => {
    const currentTodoList = monthTodoList[today];
    setTodoList(currentTodoList);
  }, [monthTodoList]);

  return (
    <ScrollView
      style={styles.todoListWrapper}
      contentContainerStyle={{gap: 25, paddingBottom: 40}}>
      {todoList ? (
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
