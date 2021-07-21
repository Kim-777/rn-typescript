import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import * as D from './src/data';
import Person from './src/screeens/Person';



const people = D.makeArray(100).map(D.createRandomPerson)

export default function App() {
  
  const children = people.map((person) => (
    <Person key={person.id} person={person} />
  ))
  
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
