import React, {useCallback, useState} from 'react';
import type {FC} from 'react';
import {Text, View, Image, Alert, Animated, Easing} from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native-paper';
import {useToggle, useAnimatedValue, useLayout, useTransformStyle} from '../hooks';
import {Avatar} from '../components';
import {interpolate} from '../utils';

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon)
const iconSize = 50

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonInsideLayout: FC<PersonProps> = ({
  person: initialPerson,
  deletePressed,
}) => {
  const [person, setPerson] = useState(initialPerson);
  const [started, toggleStarted] = useToggle();
  const animValue = useAnimatedValue(0)

  const avatarPressed = useCallback(() => Animated.timing(animValue, {
    useNativeDriver: false,
    toValue: started ? 0 : 1,
    easing: Easing.bounce
  }).start(toggleStarted), [started]);

  const [layout, setLayout] = useLayout()
  const iconAnimStyle = useTransformStyle({
    translateX: interpolate(animValue, [0, layout.width - iconSize]),
    rotate: interpolate(animValue, ['0deg', '720deg'])
  }, [layout.width])

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
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[{flexDirection: 'row', padding: 5}]} onLayout={setLayout}>
          <AnimatedIcon style={[iconAnimStyle]} name="soccer-ball-o" size={iconSize} color={Colors.blue500} />
        </View>
      </View>
    </View>
  );
};

export default PersonInsideLayout;
