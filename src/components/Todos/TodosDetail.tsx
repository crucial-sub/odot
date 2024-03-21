import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilValue} from 'recoil';
import {getStorageData, saveStorageData} from '../../lib/storage-helper';
import {MonthTodoListType, TodoType, selectedDateState} from '../../recoil';
import Todo from '../TodoList/Todo';

const TodosDetail = () => {
  const isFocused = useIsFocused();
  const selectedDate = useRecoilValue(selectedDateState);
  const [todoList, setTodoList] = React.useState<TodoType[]>([]);

  const selectedDay = selectedDate.slice(8, 10);
  const selectedMonthKey = selectedDate.slice(0, 7);

  const handleCheck = async (id: number) => {
    const newTodoList = todoList.map(item =>
      item.id === id ? {...item, isCompleted: !item.isCompleted} : item,
    );
    const storedMonthTodoList: MonthTodoListType = await getStorageData(
      'todos-' + selectedMonthKey,
    );
    const updatedMonthTodoList: MonthTodoListType = {
      ...storedMonthTodoList,
      [selectedDay]: [...newTodoList],
    };
    await saveStorageData('todos-' + selectedMonthKey, updatedMonthTodoList);
  };

  React.useEffect(() => {
    const loadTodoList = async () => {
      const storedMonthTodoList: MonthTodoListType = await getStorageData(
        'todos-' + selectedMonthKey,
      );
      const selectedTodoList = storedMonthTodoList[selectedDay];
      setTodoList(selectedTodoList);
    };

    loadTodoList();
  }, [isFocused, selectedDate, handleCheck]);

  return (
    <>
      <Text style={styles.headerText}>{selectedDate}</Text>
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
    </>
  );
};

export default TodosDetail;

const styles = StyleSheet.create({
  todoListWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FF7461',
  },
});
