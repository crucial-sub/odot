import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {getAllItems} from '../../lib/storage-helper';
import {AllTodosType, TodoType} from '../../types';
import {getTransformedDate} from '../../utils/getTransformedDate';

type SectionType = {
  title: string;
  data: TodoType[][];
};

const TodosSectionListExample = () => {
  const isFocused = useIsFocused();
  const currentDate = getTransformedDate(new Date());
  const yearMonth: string = currentDate.slice(0, 7);
  const today = currentDate.slice(8, 10);
  const [allTodos, setAllTodos] = React.useState<AllTodosType>({});

  const sections: SectionType[] = React.useMemo(
    () =>
      Object.entries(allTodos)
        .reverse()
        .map(([title, data]) => {
          return {
            title: title,
            data: Object.entries(data)
              .map(([_, todoList]) => [...todoList])
              .reverse(),
          };
        }),
    [allTodos],
  );

  React.useEffect(() => {
    const getAllTodos = async () => {
      const allItems = await getAllItems();
      if (!allItems[yearMonth] || !allItems[yearMonth][today]) return;
      setAllTodos(prev => ({...prev, ...allItems}));
    };
    if (isFocused) getAllTodos();
  }, [isFocused]);

  const renderItem = ({item}: {item: TodoType[]}) => {
    const totalCount = item.length;
    const doneCount = item.filter(el => el.isCompleted).length;
    return (
      <View style={styles.itemWrapper}>
        <Text style={styles.itemDate}>{item[0].date}</Text>
        <Text style={styles.itemCount}>{`${doneCount}/${totalCount}`}</Text>
      </View>
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

export default TodosSectionListExample;

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
