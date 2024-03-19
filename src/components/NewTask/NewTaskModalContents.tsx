import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTaskButton from './AddTaskButton';
import NewTaskInput from './NewTaskInput';

const NewTaskModalContents = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>New Task</Text>
      <NewTaskInput />
      <AddTaskButton />
    </View>
  );
};

export default React.memo(NewTaskModalContents);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
  },
});
