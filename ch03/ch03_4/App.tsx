import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Person from './src/copy/Person';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from './src/data';


const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);

function App() {
  return (
    <SafeAreaView style={styles.flex}>
        <FlatList 
          data={people}
          renderItem={({item}) => <Person person={item} />}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: { borderWidth: 1, borderColor: Colors.grey300}
});

export default App;
