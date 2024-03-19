import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AddButtonIcon from '../../assets/images/add-button.svg';
import {useSetRecoilState} from 'recoil';
import {bottomSheetVisibleState} from '../../recoil';

const NewTaskButton = () => {
  const setBottomSheetVisible = useSetRecoilState(bottomSheetVisibleState);

  const handlePress = () => {
    setBottomSheetVisible(true);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonWrapper}>
      <AddButtonIcon width={50} height={50} />
    </TouchableOpacity>
  );
};

export default NewTaskButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 25,
  },
});
