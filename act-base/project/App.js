import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      {/* <Login /> */}
      <Signup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  }
});

export default App;
