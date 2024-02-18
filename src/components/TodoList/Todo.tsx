import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ImageAssets} from '../../assets/images/ImageAssets';
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
      <Image
        source={
          isChecked ? ImageAssets.circleCheckedImage : ImageAssets.circleImage
        }
        style={styles.checkState}
      />
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
  checkState: {
    width: 25,
    height: 25,
  },
  todoText: {
    fontWeight: '600',
  },
});
