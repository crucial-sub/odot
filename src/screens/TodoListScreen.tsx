import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MainHeader from '../components/MainHeader';
import NewTaskButton from '../components/NewTask/NewTaskButton';
import ProgressBar from '../components/TodoList/ProgressBar';
import TodoList from '../components/TodoList/TodoList';
import ModalBottomSheet from '../components/BottomSheet/ModalBottomSheet';
import NewTaskModalContents from '../components/NewTask/NewTaskModalContents';

const TodoListScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <MainHeader />
        <View style={styles.wrapper}>
          <ProgressBar />
          <TodoList />
        </View>
        <NewTaskButton />
      </SafeAreaView>
      <ModalBottomSheet>
        <NewTaskModalContents />
      </ModalBottomSheet>
    </>
  );
};

export default TodoListScreen;

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
    gap: 40,
  },
});
