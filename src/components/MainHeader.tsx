import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';
import {useNavigation} from '@react-navigation/core';
import HamburgerIcon from '../assets/images/hamburger.svg';

const Header = () => {
  const navagation = useNavigation();
  const handlePress = () => {
    navagation.navigate('TodosGroup' as never);
  };

  return (
    <View style={styles.header}>
      <Image source={ImageAssets.profileImage} style={styles.profileImage} />
      <Text style={styles.headerText}>ODOT</Text>
      <TouchableOpacity onPress={handlePress} style={styles.hamburgerImage}>
        <HamburgerIcon width={20} height={20} />
      </TouchableOpacity>
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
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'RacingSansOne-Regular',
  },
  profileImage: {
    width: 25,
    height: 25,
  },
  hamburgerImage: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
