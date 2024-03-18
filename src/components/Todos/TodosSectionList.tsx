import {useIsFocused, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getAllItems, saveStorageData} from '../../lib/storage-helper';
import {AllTodosType, TodoType} from '../../recoil';
import {getTransformedDate} from '../../utils/getTransformedDate';

type SectionType = {
  title: string;
  data: TodoType[][];
};

const TodosSectionList = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const currentDate = getTransformedDate(new Date());
  const yearMonth: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);
  const [allTodos, setAllTodos] = React.useState<AllTodosType>({});

  const sections: SectionType[] = React.useMemo(
    () =>
      Object.entries(allTodos).map(([title, data]) => {
        return {
          title: title,
          data: Object.entries(data)
            .map(([_, todoList]) => [...todoList])
            .reverse(),
        };
      }),
    [allTodos],
  );
  const handleDayTodos = async (date: string) => {
    await saveStorageData('selected-date', date);
    navigation.navigate('TodosDetail' as never);
  };

  React.useEffect(() => {
    const getAllTodos = async () => {
      const allItems = await getAllItems();
      const allTodos = Object.fromEntries(
        Object.entries(allItems)
          .filter(entry => entry[0].includes('todos-'))
          .map(([key, value]: any) => [key.slice(6, 13), value]),
      );
      if (!allTodos[yearMonth] || !allTodos[yearMonth][today]) return;
      setAllTodos(prev => ({...prev, ...allTodos}));
    };
    if (isFocused) getAllTodos();
  }, [isFocused]);

  const renderItem = ({item}: {item: TodoType[]}) => {
    const totalCount = item.length;
    const doneCount = item.filter(el => el.isCompleted).length;
    return (
      <TouchableOpacity onPress={() => handleDayTodos(item[0].date)}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemDate}>{item[0].date}</Text>
          <Text style={styles.itemCount}>{`${doneCount}/${totalCount}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: TodoType[]) => {
    return `section-list-item-${item[0].id}`;
  };

  const renderSectionHeader = ({section}: {section: SectionType}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  };

  return (
    <SectionList
      style={styles.wrapper}
      contentContainerStyle={{gap: 7}}
      sections={sections}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default TodosSectionList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: '#F6FAFB',
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FF7461',
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

// TitleObject 예시
const sampleTitleObject: AllTodosType = {
  '2024/02': {
    '27': [
      {
        id: 0.41525235,
        contents: '',
        isCompleted: true,
        date: '2024/02/27',
      },
      {
        id: 0.7235435436,
        contents: '',
        isCompleted: false,
        date: '2024/02/27',
      },
    ],
    '28': [
      {
        id: 0.3234234,
        contents: '',
        isCompleted: true,
        date: '2024/02/28',
      },
      {
        id: 0.8435345,
        contents: '',
        isCompleted: false,
        date: '2024/02/28',
      },
    ],
  },
};

// sections 예시
const sampleSections: SectionType[] = [
  {
    title: '2024/02',
    data: [
      [
        {
          id: 0.41525235,
          contents: '',
          isCompleted: true,
          date: '2024/02/27',
        },
        {
          id: 0.7235435436,
          contents: '',
          isCompleted: false,
          date: '2024/02/27',
        },
      ],
      [
        {
          id: 0.3234234,
          contents: '',
          isCompleted: true,
          date: '2024/02/28',
        },
        {
          id: 0.8435345,
          contents: '',
          isCompleted: false,
          date: '2024/02/28',
        },
      ],
    ],
  },
];
