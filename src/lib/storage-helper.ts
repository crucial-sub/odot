import AsyncStorage from '@react-native-async-storage/async-storage';
import {MonthTodosType} from '../types';

export const saveStorageData = async (key: string, value: MonthTodosType) => {
  const valueString = JSON.stringify(value);

  AsyncStorage.setItem(key, valueString);
};

export const getStorageData = async (key: string) => {
  const data = await AsyncStorage.getItem(key);

  if (!data) return null;

  const result = JSON.parse(data);

  return result;
};

export const removeStorageData = async (key: string) => {
  AsyncStorage.removeItem(key);
};

export const clearStorageData = async () => {
  AsyncStorage.clear();
};

export const getAllItems = async () => {
  const allItems: any = {};
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiGet(keys, (err, items) =>
    items!.map((result, i, item) => {
      let key = item[i][0];
      let value = item[i][1];
      allItems[key] = JSON.parse(value!);
    }),
  );
  return allItems;
};
