import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {TodoType} from '../../recoil';

interface TodoProps {
  todo: TodoType;
  handleCheck: (id: number) => void;
}

const Todo = ({todo, handleCheck}: TodoProps) => {
  const isChecked = todo.isCompleted;

  return (
    <TouchableOpacity
      onPress={() => handleCheck(todo.id)}
      style={
        isChecked ? [styles.todoWrapper, styles.checked] : styles.todoWrapper
      }>
      <View style={styles.checkState}>
        {isChecked ? <Icon name="check" size={15} color="#FF7461" /> : ''}
      </View>
      <Text style={styles.todoText}>{todo.contents}</Text>
    </TouchableOpacity>
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
  checked: {
    backgroundColor: '#e3e3e3',
    shadowColor: '#0000004c',
  },
  checkState: {
    width: 25,
    height: 25,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ff7461',
  },
  todoText: {
    fontWeight: 'bold',
  },
});
