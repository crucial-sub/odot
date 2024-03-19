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
    <View style={styles.wrapper}>
      <TextInput
        style={styles.taskInput}
        value={newTask}
        onChangeText={handleChangeValue}
        placeholder="tell me what you gonna do today!"
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 236,
  },
  taskInput: {
    fontWeight: '600',
    lineHeight: 18,
  },
});

export default NewTaskInput;
