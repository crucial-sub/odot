import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';

const StackHeader = ({title}: {title: string}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image source={ImageAssets.backImage} style={styles.backButton} />
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
  },
  backButton: {
    width: 24,
    height: 24,
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
