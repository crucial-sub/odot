import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AddButtonIcon from '../../assets/images/add-button.svg';
import useBottomSheet from '../hooks/useBottomSheet';
import NewTaskModalContents from './NewTaskModalContents';

const NewTaskButton = () => {
  const {showBottomSheet} = useBottomSheet();

  const handlePress = () => {
    showBottomSheet({content: <NewTaskModalContents />});
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonWrapper}>
      <AddButtonIcon width={50} height={50} />
    </TouchableOpacity>
  );
};

export default React.memo(NewTaskButton);

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 25,
  },
});
