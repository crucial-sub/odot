import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MainHeader from '../components/MainHeader';
import NewTaskButton from '../components/NewTask/NewTaskButton';
import ProgressBar from '../components/TodoList/ProgressBar';
import TodoList from '../components/TodoList/TodoList';
import {getStorageData} from '../lib/storage-helper';
import {getTransformedDate} from '../utils/getTransformedDate';

const TodoListScreen = () => {
  const isFocused = useIsFocused();
  const currentDate = getTransformedDate(new Date());
  const yearMonth: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);
  const [selectedDate, setSelectedDate] = React.useState(currentDate);
  React.useEffect(() => {
    const getSelectedDate = async () => {
      const date = await getStorageData('selected-date');
      setSelectedDate(date);
    };
    if (isFocused) getSelectedDate();
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader />
      <View>
        <Text>{selectedDate}</Text>
      </View>
      <View style={styles.wrapper}>
        <ProgressBar />
        <TodoList />
      </View>
      <NewTaskButton />
    </SafeAreaView>
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
