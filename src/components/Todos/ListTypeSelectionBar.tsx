import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {allTodosState} from '../../recoil';
import {AllTodosType} from '../../types';
import TodosNavigateButton from './TodosNavigateButton';

const ListTypeSelectionBar = () => {
  const [allTodos, setAllTodos] = useRecoilState(allTodosState);
  useEffect(() => {
    const getAllTodos = async () => {
      const allItems: AllTodosType = {};
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiGet(keys, (err, items) =>
        items!.map((result, i, item) => {
          let key = item[i][0];
          let value = item[i][1];
          allItems[key] = JSON.parse(value!);
        }),
      );
      setAllTodos(allItems);
    };
    getAllTodos();
  }, []);

  return (
    <View style={styles.buttonWrapper}>
      <TodosNavigateButton listType="FlatList" />
      <TodosNavigateButton listType="SectionList" />
    </View>
  );
};

export default ListTypeSelectionBar;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
});
