import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {todoListState} from '../../recoil';

const ProgressBar = () => {
  const todoList = useRecoilValue(todoListState);
  const totalCount = todoList.length;
  const doneCount: number = todoList.filter(list => list.isCompleted).length;

  return (
    <View style={styles.progressWrapper}>
      <Text>Progress</Text>
      <View style={styles.barWrapper}>
        <View
          style={[
            styles.doneBar,
            {width: `${(doneCount / totalCount) * 100}%`},
          ]}></View>
      </View>
      <Text>{`${doneCount} / ${totalCount}`}</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressWrapper: {
    height: 104,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#00000026',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
    gap: 5,
  },
  barWrapper: {
    width: '100%',
    height: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  totalBar: {},
  doneBar: {
    width: '0%',
    height: '100%',
    backgroundColor: '#ff7461',
    borderRadius: 50,
  },
});
