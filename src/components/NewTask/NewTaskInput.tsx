import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {newTaskState} from '../../recoil';

const NewTaskInput = () => {
  const [newTask, setNewTask] = useRecoilState(newTaskState);
  const handleChangeValue = (text: string) => {
    setNewTask(text);
  };

  return (
    <View style={styles.toDoInputWrapper}>
      <TextInput
        style={styles.todoInput}
        value={newTask}
        onChangeText={handleChangeValue}
        placeholder="tell me what you gonna do today!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toDoInputWrapper: {width: '100%'},
  todoInput: {
    borderRadius: 50,
    backgroundColor: '#ffffff',
    shadowColor: '#0000000D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
  addTaskButton: {
    flex: 1,
    width: '100%',
    height: 45,
    backgroundColor: '#FF7461',
  },
});

export default NewTaskInput;
