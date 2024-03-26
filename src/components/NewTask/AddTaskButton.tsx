import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {getStorageData, saveStorageData} from '../../lib/storage-helper';
import {
  MonthTodoListType,
  monthTodoListState,
  newTaskState,
} from '../../recoil';
import {getCurrentDateItems} from '../../utils';
import useBottomSheet from '../hooks/useBottomSheet';
import useToastMessage from '../hooks/useToastMessage';

interface PropsType {}

const AddTaskButton = ({}: PropsType) => {
  const [newTask, setNewTask] = useRecoilState(newTaskState);
  const [storedMonthTodoList, setMonthTodoList] =
    useRecoilState(monthTodoListState);
  const {showToast} = useToastMessage();
  const {hideBottomSheet} = useBottomSheet();
  const handleAddTask = () => {
    if (!newTask) {
      showToast('warning', 'Please enter what you gonna do today!');
      return;
    }
    const addTodo = async () => {
      const {currentDate, currentMonthKey, currentDay} = getCurrentDateItems();
      const todo = {
        id: Date.now(),
        contents: newTask,
        isCompleted: false,
        date: currentDate,
      };
      const storedMonthTodoList = await getStorageData(
        'todos-' + currentMonthKey,
      );
      let newList: MonthTodoListType;
      if (!storedMonthTodoList) {
        newList = {[currentDay]: [todo]};
      } else if (!storedMonthTodoList[currentDay]) {
        newList = {
          ...storedMonthTodoList,
          [currentDay]: [todo],
        };
      } else {
        newList = {
          ...storedMonthTodoList,
          [currentDay]: [...storedMonthTodoList[currentDay], todo],
        };
      }
      await saveStorageData('todos-' + currentMonthKey, newList);
      setMonthTodoList(newList);
    };
    addTodo();
    hideBottomSheet();
    showToast('success', 'The task has been added successfully!');
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
