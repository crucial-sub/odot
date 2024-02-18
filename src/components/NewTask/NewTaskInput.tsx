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
    <View style={styles.taskInputWrapper}>
      <TextInput
        style={styles.taskInput}
        value={newTask}
        onChangeText={handleChangeValue}
        placeholder="tell me what you gonna do today!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskInputWrapper: {width: '100%'},
  taskInput: {
    borderRadius: 50,
    height: 40,
    backgroundColor: '#ffffff',
    shadowColor: '#0000000D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
    paddingHorizontal: 17,
    fontWeight: '600',
  },
  addTaskButton: {
    flex: 1,
    width: '100%',
    height: 45,
    backgroundColor: '#FF7461',
  },
});

export default NewTaskInput;
