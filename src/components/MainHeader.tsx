import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';
import {useNavigation} from '@react-navigation/core';

const Header = () => {
  const navagation = useNavigation();
  const handlePress = () => {
    navagation.navigate('Todos' as never);
  };

  return (
    <View style={styles.header}>
      <Image source={ImageAssets.profileImage} style={styles.profileImage} />
      <Text style={styles.headerText}>ODOT</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={ImageAssets.hamburgerImage}
          style={styles.hamburgerImage}
        />
      </TouchableOpacity>
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
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  hamburgerImage: {
    width: 15,
    height: 15,
  },
});

export default Header;
