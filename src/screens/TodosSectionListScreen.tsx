import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackHeader from '../components/StackHeader';
import TodosSectionListExample from '../components/Todos/TodosSectionListExample';

const TodosSectionListScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="TodosSectionList" />
      <TodosSectionListExample />
    </SafeAreaView>
  );
};

export default TodosSectionListScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
    gap: 40,
  },
});
