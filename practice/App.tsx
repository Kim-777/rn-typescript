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
  Alert
} from 'react-native';
import * as D from './src/data'
import { SafeAreaView, ScrollView } from 'react-native';
import Person from './src/screens/Person';
import { Colors } from 'react-native-paper';
import Color from 'color';
import { Platform, Dimensions } from 'react-native';
import { ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const people = D.makeArray(100).map(D.createRandomPerson)
const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;

const App = () => {

  const children = people.map((person) => (
    <Person key={person.id} person={person} />
  ))

  const onIconPress = () => {
    Alert.alert('icon pressed');
  }

  return (
        <SafeAreaView style={[styles.flex]}>
          <ImageBackground 
            style={[styles.flex]}
            source={require('./src/assets/images/bg.jpg')}
          >
            <Image source={{uri: avatarUrl}} style={[styles.image]} />
            <View style={[styles.flex, styles.padding10]}>
              <Text style={[styles.regular]}>some text here</Text>
              <Text style={[styles.medium]}>some text here2</Text>
              <Text style={[styles.semiBold]}>some text here3</Text>
              <Text style={[styles.bold]}>some text here4</Text>
            </View>
            <Icon name="home" size={50} color={Colors.lightBlue500} onPress={onIconPress}
            />
          </ImageBackground>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 25, color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string()},
  imageBackground: {padding: 10},
  flex: {flex: 1},
  padding10: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize/2},
  regular: {fontFamily: 'DancingScript-Regular'},
  medium: {fontFamily: 'DancingScript-Medium'},
  semiBold: {fontFamily: 'DancingScript-SemiBold'},
  bold: {fontFamily: 'DancingScript-Bold'}
});

export default App;
