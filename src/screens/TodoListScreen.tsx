import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Todos from '../components/Todos';

const TodoListScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Header />
        <Todos />
      </View>
    </SafeAreaView>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6FAFB',
  },
  wrapper: {
    width: '90%',
    height: '100%',
    overflow: 'hidden',
  },
});
