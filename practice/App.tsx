/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  FlatList
} from 'react-native';
import * as D from './src/data'
import { SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native-paper';
import Color from 'color';
import { Platform, Dimensions } from 'react-native';
import { ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Person from './src/copy/Person';
import { useClock } from './src/hooks'
import Cache from './src/screens/Cache';
import Memo from './src/screens/Memo';
import Fibo from './src/screens/Fibo';

const people = D.makeArray(100).map(D.createRandomPerson)
const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;

const { width } = Dimensions.get('window');
const numberOfComponents = 3

const App = () => {

  const time = useClock();

  const onIconPress = () => {
    Alert.alert('icon pressed');
  }

  return (
        <SafeAreaView style={[styles2.safeAreaView]}>
          <ScrollView horizontal contentContainerStyle={[styles2.contentContainer]}>
            <Cache />
            <Memo />
            <Fibo />
          </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 25, color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string()},
  imageBackground: {padding: 10},
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  padding10: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize/2},
  regular: {fontFamily: 'DancingScript-Regular'},
  medium: {fontFamily: 'DancingScript-Medium'},
  semiBold: {fontFamily: 'DancingScript-SemiBold'},
  bold: {fontFamily: 'DancingScript-Bold'},
  itemSeparator: {borderWidth: 1, borderColor: Color(Colors.grey500).lighten(0.3).string()}
});

const styles2 = StyleSheet.create({
  safeAreaView: {flex:1},
  contentContainer: {width: width * numberOfComponents}
})

export default App;
