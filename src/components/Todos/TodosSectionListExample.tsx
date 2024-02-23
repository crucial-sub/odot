import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {TodoType, todosSelector} from '../../recoil';
import {useRecoilValue} from 'recoil';

type SectionType = {
  title: string;
  data: TodoType[][];
};

const TodosSectionListExample = () => {
  const todos = useRecoilValue(todosSelector);
  const sections: SectionType[] = React.useMemo(() => {
    const titleObject: Record<string, TodoType[][]> = {};

    todos.forEach(item => {
      const title = item[0].date.slice(0, 7);

      if (!title) return;

      if (!titleObject[title]) {
        titleObject[title] = [[...item]];
      } else {
        titleObject[title]!.push([...item]);
      }
    });

    return Object.entries(titleObject).map(([title, data]) => ({
      title,
      data,
    }));
  }, []);
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

  const keyExtractor = (_: any, index: number) => `section-list-item-${index}`;

  const renderSectionHeader = ({section}: {section: any}) => {
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
const sampleTitleObject: Record<string, TodoType[][]> = {
  '2024/02': [
    [
      {
        id: 0.41525235,
        contents: '',
        isCompleted: true,
        date: '2024/02/23',
      },
      {
        id: 0.7235435436,
        contents: '',
        isCompleted: false,
        date: '2024/02/23',
      },
    ],
    [
      {
        id: 0.3234234,
        contents: '',
        isCompleted: true,
        date: '2024/02/24',
      },
      {
        id: 0.8435345,
        contents: '',
        isCompleted: false,
        date: '2024/02/24',
      },
    ],
  ],
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
          date: '2024/02/23',
        },
        {
          id: 0.7235435436,
          contents: '',
          isCompleted: false,
          date: '2024/02/23',
        },
      ],
      [
        {
          id: 0.3234234,
          contents: '',
          isCompleted: true,
          date: '2024/02/24',
        },
        {
          id: 0.8435345,
          contents: '',
          isCompleted: false,
          date: '2024/02/24',
        },
      ],
    ],
  },
];
