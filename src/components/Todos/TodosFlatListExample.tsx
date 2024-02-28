import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getAllItems, saveStorageData} from '../../lib/storage-helper';
import {AllTodosType, TodoType} from '../../types';
import {getTransformedDate} from '../../utils/getTransformedDate';
import {useNavigation} from '@react-navigation/native';

type ItemType = {
  count: string;
  date: string;
};

const TodosFlatListExample = () => {
  const navigation = useNavigation();
  const currentDate = getTransformedDate(new Date());
  const yearMonth: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);
  const [allTodos, setAllTodos] = React.useState<AllTodosType>({});
  const allTodosArray: TodoType[][] = [];
  Object.values(allTodos).forEach(el =>
    allTodosArray.push(...Object.values(el)),
  );
  const ITEMS: ItemType[] = React.useMemo(
    () =>
      Array.from({length: allTodosArray.length}, (_, index) => {
        const item = allTodosArray[allTodosArray.length - index - 1];
        const totalCount = item.length;
        const doneCount = item.filter(el => el.isCompleted).length;

        return {
          count: `${doneCount}/${totalCount}`,
          date: `${item[0].date}`,
        };
      }),
    [allTodos],
  );

  const handleDayTodos = async (date: string) => {
    await saveStorageData('selected-date', date);
    navigation.navigate('TodoList' as never);
  };

  React.useEffect(() => {
    const getAllTodos = async () => {
      const allItems = await getAllItems();
      const allTodos = Object.fromEntries(
        Object.entries(allItems)
          .filter(entry => entry[0].includes('todos-'))
          .map(([key, value]: any) => [key.slice(6, 13), value])
          .reverse(),
      );
      if (!allTodos[yearMonth] || !allTodos[yearMonth][today]) return;
      setAllTodos(allTodos);
    };
    getAllTodos();
  }, []);

  const renderItem = ({item}: {item: ItemType}) => {
    return (
      <TouchableOpacity onPress={() => handleDayTodos(item.date)}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemDate}>{item.date}</Text>
          <Text style={styles.itemCount}>{item.count}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const keyExtractor = (item: ItemType) => `flat-list-item-${item.date}`;

  return (
    <FlatList
      contentContainerStyle={{gap: 7}}
      style={styles.wrapper}
      data={ITEMS}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TodosFlatListExample;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 25,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#0000000D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
  },
  itemDate: {
    fontWeight: '600',
  },
  itemCount: {
    fontWeight: '600',
    color: '#C4C4C4',
  },
});
