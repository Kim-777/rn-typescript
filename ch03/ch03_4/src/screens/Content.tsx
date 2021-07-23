import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';

const avatars = D.makeArray(200).map(notUsed => D.randomAvatarUrl());

const Content = () => {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}}></Image>
    </View>
  ));

  return (
    <View style={[styles.view]}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 1,
    padding: 5,
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25},
});

export default Content;
