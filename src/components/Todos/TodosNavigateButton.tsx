import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface PropsType {
  listType: string;
}

const TodosNavigateButton = ({listType}: PropsType) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(`Todos${listType}` as never);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonWrapper}>
      <Text>{listType}</Text>
    </TouchableOpacity>
  );
};

export default TodosNavigateButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#FF7461',
    padding: 10,
    borderRadius: 12,
  },
});
