import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Auth from './src/screens/Auth';
import Routes from './src/Routes';
import Test from './src/Test';


export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
