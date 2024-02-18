import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';
import AddTaskButton from '../components/NewTask/AddTaskButton';
import NewTaskInput from '../components/NewTask/NewTaskInput';
import StackHeader from '../components/StackHeader';

const NewTaskScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="New Task" />
      <View style={styles.wrapper}>
        <NewTaskInput />
        <Image source={ImageAssets.dartImage} style={styles.dartImage} />
        <AddTaskButton />
      </View>
    </SafeAreaView>
  );
};

export default NewTaskScreen;

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dartImage: {
    width: 100,
    height: 100,
  },
});
