import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TodoInputProps {
  setTodos: Dispatch<SetStateAction<string[]>>;
}

const TodoInput = ({setTodos}: TodoInputProps) => {
  const [value, setValue] = React.useState('');
  const handleChangeValue = (text: string) => {
    setValue(text);
  };
  const handleAddTodo = () => {
    setTodos(prev => [...prev, value]);
    setValue('');
  };

  return (
    <View style={styles.toDoInputWrapper}>
      <TextInput
        style={styles.todoInput}
        value={value}
        onChangeText={handleChangeValue}
        placeholder="tell me what you gonna do today!"
      />
      <Icon
        name="add-circle"
        size={40}
        color="#FF7461"
        onPress={handleAddTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toDoInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoInput: {
    width: 295,
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
});

export default TodoInput;
