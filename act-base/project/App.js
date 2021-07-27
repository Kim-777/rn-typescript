import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Agree from './src/screens/Agree';
import FindId from './src/screens/FindId';
import LoginSuccess from './src/screens/LoginSuccess';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      {/* <Login /> */}
      {/* <Agree /> */}
      {/* <Signup /> */}
      <LoginSuccess />
      {/* <FindId /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'rgb(249, 249, 249)'
  }
});

export default App;
