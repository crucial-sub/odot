import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import CircleCheckedIcon from '../../assets/images/circle-checked.svg';
import CircleIcon from '../../assets/images/circle.svg';
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
      style={styles.todoWrapper}>
      {isChecked ? (
        <CircleCheckedIcon width={25} height={25} />
      ) : (
        <CircleIcon width={25} height={25} />
      )}
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
    gap: 15,
  },
  todoText: {
    fontWeight: '600',
  },
});
