import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StackHeader from '../components/StackHeader';
import TodosDetail from '../components/Todos/TodosDetail';
import {getStorageData} from '../lib/storage-helper';

const TodosDetailScreen = () => {
  const isFocused = useIsFocused();
  const [selectedDate, setSelectedDate] = React.useState('');
  React.useEffect(() => {
    const getSelectedDate = async () => {
      const date = await getStorageData('selected-date');
      setSelectedDate(date);
    };
    if (isFocused) getSelectedDate();
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="TodosDetail" />
      <View style={styles.wrapper}>
        <Text style={styles.detailHeaderText}>{selectedDate}</Text>
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
  detailHeaderText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FF7461',
  },
});
