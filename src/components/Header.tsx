import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageAssets} from '../assets/images/ImageAssets';

const Header = () => {
  const [userName, setUserName] = React.useState('Crucial-Sub');

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hello {userName}👋</Text>
      <Image source={ImageAssets.profileImage} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
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
});

export default Header;
