import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {newTaskState, todoListState} from '../../recoil';
import {getTransformedDate} from '../../utils/getTransformedDate';
import {getStorageData, saveStorageData} from '../../lib/storage-helper';

interface PropsType {}

const AddTaskButton = ({}: PropsType) => {
  const [newTask, setNewTask] = useRecoilState(newTaskState);
  const handleAddTask = () => {
    if (!newTask) return;
    const addTodo = async () => {
      const currentDate = getTransformedDate(new Date());
      const yearMonth: string = currentDate.slice(0, 7);
      const today = currentDate.slice(8, 10);
      const todo = {
        id: Date.now(),
        contents: newTask,
        isCompleted: false,
        date: currentDate,
      };
      const monthTodos = await getStorageData(yearMonth);
      if (!monthTodos) {
        await saveStorageData(yearMonth, {[today]: [todo]});
      } else if (!monthTodos[today]) {
        await saveStorageData(yearMonth, {...monthTodos, [today]: [todo]});
      } else {
        await saveStorageData(yearMonth, {
          ...monthTodos,
          [today]: [...monthTodos[today], todo],
        });
      }
    };
    addTodo();
    setNewTask('');
  };
  return (
    <TouchableOpacity onPress={handleAddTask} style={styles.addTaskButton}>
      <Text style={styles.text}>Add Task</Text>
    </TouchableOpacity>
  );
};

export default AddTaskButton;

const styles = StyleSheet.create({
  addTaskButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#FF7461',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
