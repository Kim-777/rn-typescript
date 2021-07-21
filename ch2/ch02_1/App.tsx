import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as D from './src/data';
import ClassComponent from './src/screeens/ClassComponent';
import ArrowComponent from './src/screeens/ArrowComponent';

const person = D.createRandomPerson();

export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
    </SafeAreaView>
  );
}
