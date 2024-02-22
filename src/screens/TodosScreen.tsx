import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackHeader from '../components/StackHeader';
import FlatListExample from '../components/TodoFlatList/FlatListExample';

const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="Todos" />
      <FlatListExample />
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
