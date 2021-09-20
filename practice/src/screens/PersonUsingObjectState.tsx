import React, { useCallback } from 'react';
import type {FC} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import {Avatar, IconText} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper'

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const PersonUsingObjectState: FC<PersonProps> = ({person}) => {
  
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed'), [])
const deletePressed = useCallback(() => Alert.alert('deleted pressed'), []);
const countIconPressed = useCallback((name: string) => () => Alert.alert(`${name} pressed`), [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
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
          <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('comment')} name="comment" size={24} color={Colors.blue500} textStyle={[styles.iconText]} text={person.counts.comment} />
          <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('retweet')} name="twitter-retweet" size={24} color={Colors.purple500} textStyle={[styles.iconText]} text={person.counts.retweet} />
          <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('heart')} name="heart" size={24} color={Colors.purple500} textStyle={[styles.iconText]} text={person.counts.heart} />
        </View>
      </View>
    </View>
  );
};

export default PersonUsingObjectState;
