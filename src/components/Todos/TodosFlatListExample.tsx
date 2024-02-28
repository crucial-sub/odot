import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {allTodosSelector, todosSelector} from '../../recoil';
import {TodoType} from '../../types';

type ItemType = {
  count: string;
  date: string;
};

const TodosFlatListExample = () => {
  const allTodos = useRecoilValue(allTodosSelector);
  const allTodosArray: TodoType[][] = [];
  Object.values(allTodos).forEach(el =>
    allTodosArray.push(...Object.values(el)),
  );
  const ITEMS: ItemType[] = React.useMemo(
    () =>
      Array.from({length: allTodosArray.length}, (_, index) => {
        const item = allTodosArray[index];
        const totalCount = item.length;
        const doneCount = item.filter(el => el.isCompleted).length;

        return {
          count: `${doneCount}/${totalCount}`,
          date: `${item[0].date}`,
        };
      }),
    [allTodos],
  );
  const renderItem = ({item}: {item: ItemType}) => {
    return (
      <View style={styles.itemWrapper}>
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text style={styles.itemCount}>{item.count}</Text>
      </View>
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
