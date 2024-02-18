import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {newTaskState, todoListState} from '../../recoil';

const AddTaskButton = () => {
  const [newTask, setNewTask] = useRecoilState(newTaskState);
  const setTodoList = useSetRecoilState(todoListState);
  const handleAddTask = () => {
    if (!newTask) return;
    setTodoList(prev => {
      return [
        ...prev,
        {
          contents: newTask,
        },
      ];
    });
    setNewTask('');
  };
  return (
    <TouchableWithoutFeedback onPress={handleAddTask}>
      <View style={styles.addTaskButton}>
        <Text style={styles.text}>AddTaskButton</Text>
      </View>
    </TouchableWithoutFeedback>
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
    color: '#ffffff',
  },
});
