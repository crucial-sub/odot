import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface TodoProps {
  todo: string;
}

const Todo = ({todo}: TodoProps) => {
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.checkState}></View>
      <Text style={styles.todoText}>{todo}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#00000026',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
  },
  checkState: {},
  todoText: {
    fontWeight: 'bold',
  },
});
