import React, { useMemo, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  FlatList
} from 'react-native';
import type { FC } from 'react';
import * as D from './src/data'
import { SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native-paper';
import Color from 'color';
import { Platform, Dimensions } from 'react-native';
import Country from './src/screens/Country';
import LifeCycle from './src/screens/LifeCycle';
import Fetch from './src/screens/Fetch';
import Timer from './src/screens/Timer';
import Interval from './src/screens/Interval';

const App = () => {

  const selects = useMemo(() => ['lifeCycle', 'timer', 'interval', 'fetch'], []);
  const [select, setSelect] = useState<string>(selects[0]);
  const onPress = useCallback((text) => () => setSelect(text), []);
  const buttons = useMemo(() => selects.map((text) => (
    <Text 
      key={text}
      onPress={onPress(text)}
      style={styles.button}
    >
      {text}
    </Text>
  )), [])

  return (
        <SafeAreaView style={[styles.safeAreaView]}>
          <View style={styles.topBar}>{buttons}</View>
          {select == 'lifeCycle' && <LifeCycle />}
          {select == 'timer' && <Timer />}
          {select == 'interval' && <Interval />}
          {select == 'fetch' && <Fetch />}
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex:1},
  topBar: {flexDirection: 'row', flexWrap: 'wrap', padding: 5, justifyContent: 'space-between', backgroundColor: Colors.lightBlue500},
  button: {fontSize: 20, color: 'white'},
});


export default App;
