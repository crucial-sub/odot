import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import StackHeader from '../components/StackHeader';

const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="Todos" />
      <View style={styles.wrapper}></View>
    </SafeAreaView>
  );
};

export default TodosScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6FAFB',
  },
  wrapper: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dartImage: {
    width: 100,
    height: 100,
  },
});
