import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NewTaskButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewTask' as never);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.button}>
        <Icon name="add-circle" size={50} color="#FF7461" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewTaskButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
  },
});
