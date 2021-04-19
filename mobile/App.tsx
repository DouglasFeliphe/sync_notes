import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="lightyellow"
        placement="left"
        leftComponent={{ icon: 'menu', color: '#333' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#333' } }}
        rightComponent={{ icon: 'home', color: '#333' }}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
  },
});
