import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import StackHeader from '../components/StackHeader';
import TodosDetail from '../components/Todos/TodosDetail';

const TodosDetailScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="TodosDetail" />
      <View style={styles.wrapper}>
        <TodosDetail />
      </View>
    </SafeAreaView>
  );
};

export default TodosDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
    gap: 40,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    gap: 20,
  },
});
