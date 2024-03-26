import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackIcon from '../assets/images/back.svg';

const StackHeader = ({title}: {title: string}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack} style={styles.buttonWrapper}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 20 : null,
  },
  buttonWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingRight: 48,
  },
  headerTitle: {
    fontWeight: '600',
  },
});

export default StackHeader;
