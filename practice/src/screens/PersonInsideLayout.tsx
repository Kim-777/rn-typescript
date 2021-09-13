import React, {useCallback, useState} from 'react';
import type {FC} from 'react';
import * as D from '../data';
import {Text, View, Image, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import {Avatar} from '../components';
import {useToggle, useAnimatedValue, useStyle, useTransformStyle, useLayout} from '../hooks';
import {interpolate} from '../utils';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome'

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon)
const iconSize = 50

const PersonIndiseLayout: FC<PersonProps> = ({
  person,
  deletePressed,
}) => {

  const [started, toggleStarted] = useToggle(false);
  const animValue = useAnimatedValue(0);

  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {
        useNativeDriver: false,
        toValue: started ? 0 : 1,
        easing: Easing.bounce,
      }).start(toggleStarted),
    [],
  );

  const [layout, setLayout] = useLayout();
  const iconAnimStyle = useTransformStyle(
    {
      translateX: interpolate(animValue, [0, layout.width - iconSize]),
      rotate: interpolate(animValue, ['0deg', '720deg'])
    },
    [layout.width]
  )

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View onLayout={setLayout} style={[{flexDirection: 'row', padding: 5}]}>
          <AnimatedIcon style={[iconAnimStyle]} name="soccer-ball-o" size={iconSize} color={Colors.blue500} />
        </View>
      </View>
    </View>
  );
};

export default PersonIndiseLayout;
