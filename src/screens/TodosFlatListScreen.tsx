import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackHeader from '../components/StackHeader';
import TodosFlatListExample from '../components/Todos/TodosFlatListExample';

const TodosFlatListScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="TodosFlatList" />
      <TodosFlatListExample />
    </SafeAreaView>
  );
};

export default TodosFlatListScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
    gap: 40,
  },
});
