import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {getStorageData} from '../../lib/storage-helper';
import {todoListState} from '../../recoil';
import {getTransformedDate} from '../../utils/getTransformedDate';
import Todo from './Todo';
import {TodoType} from '../../types';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const currentDate = getTransformedDate(new Date());
  const yearMonth: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);

  const handleCheck = (id: number) => {
    const newTodos = todoList.map(item => {
      if (item.id === id) {
        return {...item, isCompleted: !item.isCompleted};
      }
      return item;
    });

    setTodoList(newTodos);
  };
  React.useEffect(() => {
    const getTodayTodoList = async () => {
      const monthTodos = await getStorageData(yearMonth);
      if (!monthTodos || !monthTodos[today]) return;
      setTodoList(monthTodos[today]);
    };
    getTodayTodoList();
  }, []);

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
    overflow: 'hidden',
  },
});
