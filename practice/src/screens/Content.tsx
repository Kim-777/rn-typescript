import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import * as D from '../data'

const avatars = D.makeArray(200).map((notUsed) => D.randomAvatarUrl())
export default function Content() {

  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}}/>
    </View>
  ))

  return (
    <View style={[styles.view]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {padding: 5, flex: 1, flexDirection: 'row', flexWrap: 'wrap', overflow: 'hidden', justifyContent: 'center'},
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25}
})