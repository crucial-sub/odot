import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackHeader from '../components/StackHeader';
import TodosSectionList from '../components/Todos/TodosSectionList';

const TodosGroupScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="TodosGroup" />
      <TodosSectionList />
    </SafeAreaView>
  );
};

export default TodosGroupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
    gap: 40,
  },
});
