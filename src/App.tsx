import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ImageAssets} from './assets/images/ImageAssets';

function App(): React.JSX.Element {
  const [userName, setUserName] = useState('Crucial-Sub');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello {userName}👋</Text>
          <Image
            source={ImageAssets.profileImage}
            style={styles.profileImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '90%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default App;
