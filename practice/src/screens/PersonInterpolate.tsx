import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import type {FC} from 'react';
import {Text, View, Image, Alert, Animated, Easing } from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper'
import { Avatar } from '../components'
import { Text as ThemeText, View as ThemeView} from '../theme/paper'
import { useToggle, useAnimatedValue, useMonitorAnimatedValue, useStyle} from '../hooks'


moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void
};

const PersonInterpolate: FC<PersonProps> = ({person, deletePressed}) => {

  const animValue = useAnimatedValue(0);
  const realAnimValue = useMonitorAnimatedValue(animValue);
  const [started, toggleStarted] = useToggle(false);
  // const [started, setStarted] = useState<boolean>(false)
  
  const avatarPressed = useCallback(() => Animated.timing(animValue, {useNativeDriver: false, toValue: started ? 0 : 1, duration: 3000, easing: Easing.bounce}).start(toggleStarted), [started])

  const rightViewAnimStyle = useStyle({ opacity: animValue })

  const textAnimStyle = useStyle({
    fontSize: animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 30]
    }),
    color: animValue.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [Colors.lightBlue900, Colors.lime500, Colors.blue900]
    })
  })

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <Animated.View style={[styles.rightView]}>
        <Animated.Text style={[styles.name, textAnimStyle]}>{person.name}</Animated.Text>
        <Animated.Text style={[styles.email, textAnimStyle]}>{person.email}</Animated.Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
        <Image style={[styles.image]} source={{uri: person.image}}/>
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={Colors.blue500}/>
          <Icon name="twitter-retweet" size={24} color={Colors.purple500}/>
          <Icon name="comment" size={24} color={Colors.red500}/>
        </View>
      </Animated.View>
    </View>
  );
};

export default PersonInterpolate;
