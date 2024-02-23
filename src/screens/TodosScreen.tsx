import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackHeader from '../components/StackHeader';
import ListTypeSelectionBar from '../components/Todos/ListTypeSelectionBar';

const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="Todos" />
      <ListTypeSelectionBar />
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
