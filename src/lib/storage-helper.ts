import AsyncStorage from '@react-native-async-storage/async-storage';
import {AllTodosType} from '../recoil';

export const saveStorageData = async (key: string, value: any) => {
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

export const getAllTodoList = async () => {
  const allItems: AllTodosType = {};
  const keys = await AsyncStorage.getAllKeys();
  const filteredKeys = keys.filter(key => key.includes('todos-'));
  await AsyncStorage.multiGet(
    filteredKeys,
    (err, items) =>
      items &&
      items.map((result, i, item) => {
        let key = item[i][0].slice(6, 13);
        let value = item[i][1];
        value && (allItems[key] = JSON.parse(value));
      }),
  );
  return allItems;
};
