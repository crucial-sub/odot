import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';

const StackHeader = ({title}: {title: string}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState('Crucial-Sub');
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image source={ImageAssets.backImage} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontWeight: '600',
  },
});

export default StackHeader;
