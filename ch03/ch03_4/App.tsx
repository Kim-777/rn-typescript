import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from 'react-native-paper';
import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';


function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100}
})

export default App
