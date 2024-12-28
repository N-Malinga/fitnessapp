import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Register from '../register';
import Login from '../login';
import Home from '../home';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default HomeScreen;
