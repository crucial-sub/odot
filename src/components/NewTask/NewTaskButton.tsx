import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ImageAssets} from '../../assets/images/ImageAssets';

const NewTaskButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewTask' as never);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonWrapper}>
      <Image source={ImageAssets.addButton} style={styles.button} />
    </TouchableOpacity>
  );
};

export default NewTaskButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  button: {
    width: 50,
    height: 50,
  },
});
