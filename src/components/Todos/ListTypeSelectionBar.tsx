import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodosNavigateButton from './TodosNavigateButton';

const ListTypeSelectionBar = () => {
  return (
    <View style={styles.buttonWrapper}>
      <TodosNavigateButton listType="FlatList" />
      <TodosNavigateButton listType="SectionList" />
    </View>
  );
};

export default ListTypeSelectionBar;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
});
