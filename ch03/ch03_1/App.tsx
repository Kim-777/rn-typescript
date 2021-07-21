import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

console.log(Colors.blue500);
// console.log(color);

function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello world!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Colors.white,
  },
});

export default App;
