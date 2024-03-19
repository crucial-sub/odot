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
  taskInputWrapper: {
    width: '100%',
    height: 236,
    gap: 10,
  },
  taskInput: {
    backgroundColor: '#ffffff',
    fontWeight: '600',
  },
});

export default NewTaskInput;
