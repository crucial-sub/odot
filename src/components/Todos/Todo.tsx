import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {TodoType} from '../../recoil';

interface TodoProps {
  todo: TodoType;
}

const Todo = ({todo}: TodoProps) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleCheck = () => {
    if (isScrolled) return;
    setIsChecked(prev => !prev);
    setIsScrolled(false);
  };
  return (
    <View
      style={
        isChecked ? [styles.todoWrapper, styles.checked] : styles.todoWrapper
      }
      onTouchStart={() => setIsScrolled(false)}
      onTouchMove={() => setIsScrolled(true)}
      onTouchEnd={handleCheck}>
      <View style={styles.checkState}>
        {isChecked ? <Icon name="check" size={15} color="#FF7461" /> : ''}
      </View>
      <Text style={styles.todoText}>{todo.contents}</Text>
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
