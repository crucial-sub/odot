import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewTaskScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>NewTaskScreen</Text>
    </View>
  );
};

export default NewTaskScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
