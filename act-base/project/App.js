import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Agree from './src/screens/Agree';


const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      {/* <Login /> */}
      <Agree />
      {/* <Signup /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  }
});

export default App;
