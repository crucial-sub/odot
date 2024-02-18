import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const StackHeader = ({title}: {title: string}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState('Crucial-Sub');
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={handleGoBack}>
        <View style={styles.backButton}></View>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>{title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  profileImage: {
    width: 35,
    height: 35,
  },
});

export default StackHeader;
