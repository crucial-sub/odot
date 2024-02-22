import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {newTaskState, todoListState} from '../../recoil';
import {getDate} from '../../utils/getDate';

const AddTaskButton = () => {
  const [newTask, setNewTask] = useRecoilState(newTaskState);
  const setTodoList = useSetRecoilState(todoListState);
  const handleAddTask = () => {
    if (!newTask) return;
    setTodoList(prev => {
      return [
        ...prev,
        {
          id: Date.now(),
          contents: newTask,
          isCompleted: false,
          date: getDate(new Date()),
        },
      ];
    });
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
