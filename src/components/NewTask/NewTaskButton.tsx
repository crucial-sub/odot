import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NewTaskButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewTask' as never);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Icon name="add-circle" size={50} color="#FF7461" />
    </TouchableOpacity>
  );
};

export default NewTaskButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 50,
    height: 50,
  },
});
