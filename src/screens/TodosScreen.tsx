import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackHeader from '../components/StackHeader';
import FlatListExample from '../components/TodoFlatList/FlatListExample';
import SectionListExample from '../components/TodoSectionList/SectionListExample';

const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="Todos" />
      {/* <FlatListExample /> */}
      <SectionListExample />
    </SafeAreaView>
  );
};

export default TodosScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
    gap: 40,
  },
});
