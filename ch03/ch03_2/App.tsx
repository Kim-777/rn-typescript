import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {Platform} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from 'react-native-paper';

console.log(Platform.OS);

const {width, height} = Dimensions.get('window');

console.log(width, height);

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View
        style={[
          styles.box,
          styles.border,
          {borderTopLeftRadius: 40, borderBottomLeftRadius: 400},
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1, margin: '10%'},
  text: {
    fontSize: 20,
    color: Colors.lightBlue50,
    marginBottom: 10,
    marginLeft: 30,
  },
  box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10},
  border: {borderWidth: 10, borderColor: Colors.black},
});

export default App;
