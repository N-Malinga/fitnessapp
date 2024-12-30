import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Register from '../register';
import Login from '../login';
import Home from '../home';
import { NavigationContainer } from '@react-navigation/native';
import {Link} from 'expo-router';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Login />
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
