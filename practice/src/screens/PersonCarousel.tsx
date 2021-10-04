import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import type {FC} from 'react';
import {Text, View } from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper'
import { useToggle, useLayout } from '../hooks'
import { Avatar, ImageSlider } from '../components'


moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void
};

const Person: FC<PersonProps> = ({person, deletePressed}) => {
  
  const imageUrls = useMemo(() => D.makeArray(D.random(2, 6 + 1)).map(D.randomImage), [])
  const [layout, setLayout] = useLayout();
  const [showThumbnails, toggleShowThumbnails] = useToggle(true);
  

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
        />
      </View>
      <View style={[styles.rightView]} onLayout={setLayout}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}]}>
          <Text style={[styles.text]}>
            imageUrls.length: {imageUrls.length}
          </Text>
          <Text style={[styles.email]} onPress={toggleShowThumbnails}>show thumbnails</Text>
        </View>
        <ImageSlider imageUrls={imageUrls} imageWidth={layout.width} showThumbnails={showThumbnails}/>
      </View>
    </View>
  );
};

export default Person;
